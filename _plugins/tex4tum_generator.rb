# encoding=utf-8

module Jekyll
  require "yaml"

  class Tex4TumGenerator < Generator
    safe true
    priority :highest

    def generate(site)
      puts "Add TeX Definitions..."
      #puts "Add Abbreviations..."
      puts "Parsing TODOs..."

      todos = Array.new

      site.documents.each do |document|
        if document.is_a?(StaticFile)
          puts "ERR: Forgot YAML Header in: "+document.path
        end
        todos = get_todos(document, todos)

        # exclude JS
        relevant_content, sep, rest = document.content.partition(/<script .*?<\/script>/m)

        # puts document.path
        relevant_content = markDefinition(relevant_content)    # this has to be called first
        relevant_content = replaceClasses(relevant_content)
        #relevant_content = add_abbreviations(relevant_content)   # Pandoc does not support abbreviations.
        relevant_content = add_latex_definitions(relevant_content)

        document.content = relevant_content+sep+rest # put together

        # puts document.data  # gotcha!
      end

      # site.pages contains only main.scss
      # site.posts is empty

      # site.pages.each do |page|
      #   page.content = replaceClasses(page.content)
      #   #puts page.content
      # end

      site.data['todos'] = todos
    end

    private

    TODO_REGEXP = %r{(?:\n\s*|^)((?:TODO|\\todo|@todo):?\s(.*?))\n}
    #INNER_SECTION_REGEXP = %r{^\s*(##+\s(.*?)\n((?:.|\n)*?)\n\s*\n(?=\s*##|\Z))}
    DEFINITION_REGEXP = %r{\A([A-Z](?:.|\n)*?)\n\s*\n}

    TEX_SINGLE_REGEXP = %r{(?:\s|^)\$(?=[^\s$])(.*?)(?<=[^\s$\\])\$(?:\s|$)}
    TEX_DUAL_REGEXP = %r{(?:^|\n)\s*\$\$(?=[^\s$])((.|\n)*?)(?<=[^\s$\\])\$\$\s*(?:\n|$)}

    LEGEND_REGEXP = %r{(?:^|\n)\s*((\$\$(?=[^\s$])(?:.)*?\$\$)\s*\n\s*((?:with|where|Legend:)\s+((?:.|\n)*?))\n\s*\n)}   # safer: (?<=[^\s$\\])\$\$

    RE_NL = %r{(?:^|\n)\s*}          # Newline
    RE_BL = %r{(?:^|\n)\s*\n\s*}     # Blankline
    RE_ANY = %r{((?:.|\n)*?)}        # Anything
    RE_SE = %{\n\s*\n(?=\s*##|\Z))}  # Section End


    #EXPLANATION_REGEXP = RE_NL+%r{((?:Explanation|Details):\s+(?:.|\n)*?)}+RE_BL
    EXPLANATION_REGEXP = %r{(?:^|\n)\s*\n\s*(?:Explanations?|Details?):\s+((?:.|\n)*?)(?:^|\n)\s*\n\s*}
    # RE_EXPLANATION_SECTION = %r{(?<=^|\n)\s*##+\s*(Explanation.*?)\n\s*((?:.|\n)*?)\n.*\n(?=##+|\Z|\n\n)}    # \n\s*((?:.|\n)*?)\n\s*\n(?=\s*##+|\Z)
    RE_EXAMPLE = %r{(?:^|\n)\s*\n\s*(?:Example|For Example):\s+((?:.|\n)*?)(?:^|\n)\s*\n\s*}


    UNICODE_TEX_HASH = {
      '<' => %q{\lt}, '>' => %q{\gt}, 
      "∈" => %q{\in},
      "ℕ" => %q{\mathbb{N}}, "ℂ" => %q{\mathbb{C}},"ℤ" => %q{\mathbb{Z}},
      "α" => %q{\alpha}, "Α" => %q{\Alpha}, "β" => %q{\beta},
      "γ" => %q{\gamma}, "Γ" => %q{\alpha}, "δ" => %q{\dlpha}, "Δ" => %q{\Delta},
      "ε" => %q{\varepsilon}, "ζ" => %q{\zeta}, "η" => %q{\eta},
      "θ" => %q{\theta}, "Θ" => %q{\Theta},
      "κ" => %q{\kappa}, "λ" => %q{\lambda}, "Λ" => %q{\Lambda},
      "μ" => %q{\mu}, "ν" => %q{\nu}, "ξ" => %q{\xi}, "Ξ" => %q{\Xi},
      "π" => %q{\pi}, "Π" => %q{\Pi},
      "ρ" => %q{\rho}, "σ" => %q{\sigma}, "Σ" => %q{\Sigma}, "τ" => %q{\tau},
      "ω" => %q{\omega}, "Ω" => %q{\Omega} }


    def add_latex_definitions(content)
      latex_definitions = File.read('./res/parser_util/tex_definitions.md', :encoding => 'utf-8')
      content = latex_definitions + content


      # replace unicode
      content.scan(TEX_SINGLE_REGEXP) do |match|
        newtext = match[0]
        UNICODE_TEX_HASH.each { |k, v| newtext = newtext.gsub(k) { v } }
        content = content.gsub(match[0]){ newtext }
      end


      return content
    end


    # can only be used if Markdown renderer supports PHP style abbreviations. Pandoc does not support this.
    def add_abbreviations(content)
      abbreviations = File.read('./res/parser_util/abbreviations.md', :encoding => 'utf-8')
      content += abbreviations
      return content
    end





    def get_todos(document, todos)
      document.content.scan(TODO_REGEXP) do |match|
        todo = match[1].gsub(/<\/?[^>]*>/) { "" } # Stripping html
        todos.push({"todo" => todo, "file" => document.data['slug'] + document.data['ext'], "link" => document.url + ".html", "name" => document.data['title']})
        document.content = document.content.sub(match[0]) { "" }  # remove from final article
      end
      return todos
    end



    def markDefinition(content)
      # idea: find a definition and show it when the heading is clicked
      content = content.sub(DEFINITION_REGEXP) { %q{{% definition title_def%}}+ $1 +%q{{% enddefinition %}}+"\n\n" }
      return content
    end




    def replaceClasses(content)
      section_array = Array.new

      # regcognize sections (match between ## and ##)
      level = 1
      re_inner_section = %r{^\s*(\#{#{level}}+\s(.*?)\n((?:.|\n)*?)\n\s*\n(?=\s*\#{1,#{level}}|\Z|\n\n\n))}
      #content.scan(INNER_SECTION_REGEXP) do |match|
      content.scan(re_inner_section) do |match|
        section_title = match[1]   #$1
        if section_title.include? "Example"
          content = content.sub(match[0]) { "\n\n{\% example #{match[1]} \%}\n#{match[2]}\n{\% endexample \%}\n\n" }
        end
        if section_title.include? "Explanation"
          content = content.sub(match[0]) { "\n\n{\% explanation #{match[1]}\%}\n#{match[2]}\n{\% endexplanation \%}\n\n" }
        end
        #puts 'match0: '+match[0]+', match1:'+match[1]+', match2:'+match[2]
      end

      
      # legends
      eq_num = 0
      content.scan(LEGEND_REGEXP) do |match|
        equation_par = match[0]
        equation = match[1]
        # attention! use block style .sub(x) { y } instead of .sub(x, y) to avoid replacing \\ with \ (newline \\ will be an escape sequence for \)
        # see https://stackoverflow.com/questions/1542214/weird-backslash-substitution-in-ruby
        equation_par = equation_par.sub(equation) { "<div data-toggle='collapse' href='\#eq_#{eq_num}'>"+ "\n" + equation + "\n" + "</div>" }
        equation_par = equation_par.sub(match[2]) { '{% '+"legend eq_#{eq_num}"+'%}' + "\n" + match[2] + "\n" + %q{{% endlegend %}} }
        content = content.sub(match[0]) { equation_par }
        eq_num += 1
      end

      # explanation
      content = content.gsub(EXPLANATION_REGEXP) { "\n\n"+%q{{% explanation %}}+$1+%q{{% endexplanation %}}+"\n\n" }

      # example
      if content.include? "Example"
        content = content.gsub(RE_EXAMPLE) { "\n\n"+%q{{% example %}}+$1+%q{{% endexample %}}+"\n\n" }
      end
    
      return content
    end
  end
end
