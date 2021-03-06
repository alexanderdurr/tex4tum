
// Fuse (Fuzzy Search Library)
// ====================================================================


var search_index = [{"url":"actuator","title":"Actuator","tags":[],"sections":[]},{"url":"servo","title":"Servo Motor","tags":["motor,","pwm"],"sections":[]},{"url":"bus","title":"Bus","tags":[],"sections":[]},{"url":"i2c","title":"Inter-Integrated Circuit (I2C)","tags":["bus","I2C","SDA","SCK"],"sections":[]},{"url":"spi","title":"Serial Peripheral Interface (SPI)","tags":["bus","SPI","MOSI","MISO"],"sections":[]},{"url":"usart","title":"Universal Asynchronous Receiver Transmitter (UART)","tags":["bus,","UART,","RX,","TX,","RTS,","CTS"],"sections":[]},{"url":"usb","title":"Universal Serial Bus (USB)","tags":["USB,","Typ-C"],"sections":[]},{"url":"cmos","title":"CMOS","tags":["mosfet","inverter","nand","nor","not"],"sections":[]},{"url":"capacitor","title":"Capacitor","tags":["elko,","farad"],"sections":[]},{"url":"component","title":"Component","tags":[],"sections":[]},{"url":"diode","title":"Diode","tags":["shottky,","zener,","led"],"sections":[]},{"url":"inductor","title":"Inductor","tags":["coil","henry"],"sections":[]},{"url":"op-amp","title":"Operational Amplifier","tags":["opamp","non-inverting","schmitt trigger"],"sections":[]},{"url":"resistor","title":"Resistor","tags":["ohm"],"sections":[]},{"url":"transistor","title":"Transistor","tags":["bipolar","bjt","mosfet"],"sections":[]},{"url":"computer","title":"Computer","tags":[],"sections":[]},{"url":"processor","title":"Central Processing Unit (CPU)","tags":["CPU,","ALU"],"sections":[]},{"url":"psu","title":"Power Supply Unit (PSU)","tags":["Netzteil"],"sections":[]},{"url":"ram","title":"Random Access Memory (RAM)","tags":["RAM"],"sections":[]},{"url":"dsp","title":"Signal Processing","tags":[],"sections":[]},{"url":"filter","title":"Digital Filter","tags":["FIR","IIR"],"sections":[]},{"url":"kalman-filter","title":"Kalman Filter","tags":[],"sections":[]},{"url":"low-pass","title":"Low Pass Filter","tags":[],"sections":[]},{"url":"modulation","title":"Modulation","tags":[],"sections":[]},{"url":"signal","title":"Signal","tags":[],"sections":[]},{"url":"electronics","title":"Electronics","tags":[],"sections":[]},{"url":"glossary","title":"Glossary","tags":[],"sections":[]},{"url":"index","title":"Tex4TUM","tags":[],"sections":[]},{"url":"aes","title":"Advanced Encryption Standard (AES)","tags":[],"sections":[]},{"url":"algorithm","title":"Algorithm","tags":[],"sections":[]},{"url":"complexity-theory","title":"Complexity Theory","tags":["P,","NP,","DTIME,","NTIME,","DSPACE,","NSPACE"],"sections":[]},{"url":"rsa","title":"RSA","tags":[],"sections":[]},{"url":"datastructures","title":"Datastructures","tags":[],"sections":[]},{"url":"jpeg","title":"JPEG","tags":[],"sections":[]},{"url":"tree","title":"Tree","tags":[],"sections":[]},{"url":"uri","title":"Uniform Resource Identifier (URI)","tags":["URI,","URL,","URN"],"sections":[]},{"url":"utf8","title":"UTF-8","tags":[],"sections":[]},{"url":"vcf","title":"vCard","tags":["vcf"],"sections":[]},{"url":"informatics","title":"Information Theory","tags":[],"sections":[]},{"url":"ada","title":"Ada","tags":[],"sections":[]},{"url":"bash","title":"Bash","tags":[],"sections":[]},{"url":"c","title":"C","tags":[],"sections":[]},{"url":"cpp","title":"C++","tags":["cpp"],"sections":[]},{"url":"css","title":"Cascading Style Sheets (CSS)","tags":[],"sections":[]},{"url":"doxygen","title":"DoxyGen","tags":[],"sections":[]},{"url":"go","title":"Go","tags":[],"sections":[]},{"url":"language","title":"Language","tags":[],"sections":[]},{"url":"markdown","title":"Markdown","tags":[],"sections":["Level 2 Heading"]},{"url":"matlab","title":"Matlab","tags":[],"sections":[]},{"url":"natural-language","title":"Natural Language","tags":[],"sections":[]},{"url":"python","title":"Python","tags":[],"sections":[]},{"url":"regular-expressions","title":"Regular Expressions","tags":[],"sections":[]},{"url":"ruby","title":"Ruby","tags":[],"sections":[]},{"url":"rust","title":"Rust","tags":[],"sections":[]},{"url":"6lowpan","title":"6LoWPAN","tags":[],"sections":[]},{"url":"coap","title":"Constrained Application Protocol (CoAP)","tags":[],"sections":[]},{"url":"dns","title":"Domain Name System (DNS)","tags":[],"sections":[]},{"url":"http","title":"HTTP","tags":[],"sections":[]},{"url":"ieee-802-15-04","title":"IEEE 802.15.4","tags":[],"sections":[]},{"url":"ip","title":"Internet Protocol","tags":["address,","IPv4,","IPv6"],"sections":[]},{"url":"mac","title":"Media Access Control","tags":[],"sections":[]},{"url":"mqtt","title":"Message Queue Telemetry Transport (MQTT)","tags":[],"sections":[]},{"url":"network","title":"Network","tags":[],"sections":[]},{"url":"osi","title":"Open Systems Interconnection model (OSI)","tags":[],"sections":[]},{"url":"rpl","title":"RPL","tags":[],"sections":[]},{"url":"tcp","title":"TCP","tags":["port"],"sections":[]},{"url":"udp","title":"UDP","tags":[],"sections":[]},{"url":"zigbee","title":"ZigBee","tags":[],"sections":[]},{"url":"filesystem","title":"Filesystem","tags":[],"sections":[]},{"url":"operating-system","title":"Operating System","tags":[],"sections":[]},{"url":"paging","title":"Paging","tags":[],"sections":[]},{"url":"semaphore","title":"Semaphore","tags":[],"sections":[]},{"url":"systemcall","title":"System Call","tags":[],"sections":[]},{"url":"cryptography","title":"Cryptography","tags":[],"sections":[]},{"url":"blake2","title":"Blake 2","tags":[],"sections":[]},{"url":"hash","title":"Hash Function","tags":[],"sections":[]},{"url":"sha-2","title":"Secure Hash Algorithm 2 (SHA-2)","tags":[],"sections":[]},{"url":"sha-3","title":"Secure Hash Algorithm 3 (SHA-3)","tags":[],"sections":[]},{"url":"multivariate-cryptography","title":"Multivariate Cryptography","tags":[],"sections":[]},{"url":"security","title":"Security","tags":["authentication,","encryption,","integrity"],"sections":[]},{"url":"signature","title":"Signature","tags":[],"sections":[]},{"url":"zksnark","title":"zkSNARK","tags":[],"sections":[]},{"url":"float","title":"Floating Point Number","tags":[],"sections":[]},{"url":"numbers","title":"Number Converter","tags":[],"sections":[]},{"url":"oop","title":"Object Oriented Programming (OOP)","tags":[],"sections":[]},{"url":"petri-net","title":"Petri Net","tags":[],"sections":[]},{"url":"gdb","title":"Gnu Debugger (GDB)","tags":[],"sections":[]},{"url":"git","title":"Git","tags":[],"sections":[]},{"url":"tools","title":"Tools","tags":[],"sections":[]},{"url":"algebra","title":"Algebra","tags":[],"sections":[]},{"url":"bool","title":"Boolean Algebra","tags":[],"sections":[]},{"url":"complex-number","title":"Complex Numbers","tags":["Imaginary Unit"],"sections":[]},{"url":"exp-log","title":"Exponential and Logarithm","tags":[],"sections":[]},{"url":"matrix","title":"Matrix","tags":[],"sections":[]},{"url":"vector","title":"Vector Space","tags":[],"sections":[]},{"url":"analysis","title":"Analysis","tags":[],"sections":[]},{"url":"convolution","title":"Convolution","tags":["Faltung"],"sections":[]},{"url":"curve","title":"Curve","tags":["line, kurve"],"sections":[]},{"url":"differential-equation","title":"Differential Equation","tags":[],"sections":[]},{"url":"differential-operators","title":"Differential Operators","tags":["gradient,","rotation,","divergence,","laplace"],"sections":[]},{"url":"frequency-analysis","title":"Frequency Analysis","tags":[],"sections":[]},{"url":"integral","title":"Integral","tags":[],"sections":[]},{"url":"series","title":"Series","tags":["sum, mean"],"sections":[]},{"url":"geometry","title":"Geometry","tags":["strahlensatz"],"sections":[]},{"url":"trigonometry","title":"Trigonometry","tags":["Sinus","Cosinus","Tangens","Arctan"],"sections":[]},{"url":"math","title":"Math","tags":[],"sections":[]},{"url":"combinatoric","title":"Combinatorics","tags":["permutation","combination","variation"],"sections":[]},{"url":"binomial-distribution","title":"Binomial Distribution","tags":[],"sections":[]},{"url":"normal-distribution","title":"Normal Distribution","tags":[],"sections":[]},{"url":"moment","title":"Moment","tags":[],"sections":[]},{"url":"probability-distributions","title":"Probability Distributions","tags":[],"sections":[]},{"url":"probability","title":"Probability Theory","tags":[],"sections":[]},{"url":"statistics","title":"Statistics","tags":[],"sections":[]},{"url":"stochastic_process","title":"Stochastic Process","tags":[],"sections":[]},{"url":"testing","title":"Hypothesis Testing","tags":[],"sections":[]},{"url":"materials","title":"Materials","tags":[],"sections":[]},{"url":"constants","title":"Physical Constants","tags":[],"sections":[]},{"url":"electric-field","title":"Electric Field","tags":[],"sections":[]},{"url":"electromagnetism","title":"Electromagnetism","tags":[],"sections":[]},{"url":"kirchhoff","title":"Kirchhoffs's Circuit Laws","tags":[],"sections":[]},{"url":"maxwell","title":"Maxwell Equations","tags":[],"sections":[]},{"url":"mechanics","title":"Mechanics","tags":[],"sections":[]},{"url":"motion","title":"Mechanical Motion","tags":["Rotation","Translation"],"sections":[]},{"url":"optic","title":"Optics","tags":[],"sections":[]},{"url":"reflection","title":"Reflection and Refraction","tags":[],"sections":[]},{"url":"physics","title":"Physics","tags":[],"sections":[]},{"url":"rounding","title":"Rounding","tags":[],"sections":[]},{"url":"si-units","title":"SI Units","tags":[],"sections":[]},{"url":"thermodynamics","title":"Thermodynamics","tags":[],"sections":[]},{"url":"404","title":"Oops!","tags":[],"sections":[]},{"url":"about","title":"About TeX4TUM","tags":[],"sections":[]},{"url":"calculator","title":"Calculator","tags":[],"sections":[]},{"url":"contact","title":"Contact","tags":[],"sections":[]},{"url":"contribution","title":"Contribution","tags":[],"sections":["First Heading"]},{"url":"demo","title":"Demo of Interactive Features","tags":[],"sections":[]},{"url":"first-time","title":"LaTeX4EI becomes TeX4TUM!","tags":[],"sections":[]},{"url":"links","title":"Links","tags":[],"sections":[]},{"url":"sheets","title":"Cheat Sheets","tags":["latex4ei","github","pdf","formelsammlung"],"sections":[]},{"url":"support","title":"Support","tags":[],"sections":[]},{"url":"team","title":"Team","tags":[],"sections":[]},{"url":"todo","title":"TODO","tags":[],"sections":[]}]

var options = {
  keys: ['title', 'tags'] //,
  //id: ['url', 'title']
}
var fuse = new Fuse(search_index, options)


// dynamically load search index
// ====================================================================

// $.getJSON("/assets/js/search_index.json", function(data) {
//     console.log(data);
//     // data is a JavaScript object now. Handle it as such

//     search_index = data;
//     fuse = new Fuse(search_index, options);


// });

var autocomplete = function (options) {
    // console.log(JSON.stringify(options.data));
    for (var idx = 0; idx < options.container.length; idx++){
        var doc = document,
            data = options.data,
            contEl = options.container[idx],
            resultNodes = contEl.getElementsByTagName('A'),
            inputEl = options.container[idx].firstElementChild,
            cache = {},
            handlers = {
                'enter': function (e) {
                    if (e.target.nextElementSibling.firstChild && e.target.nextElementSibling.firstChild.style.display != 'none') {
                        window.location = e.target.nextElementSibling.firstChild.href;
                    } else if (e.target.parentNode === contEl && resultNodes[0].style.display == 'none') {
                        // todo: deal with no results
                        window.location = './404.html';
                    }
                },
                'up': function (e) {
                    e.preventDefault();
                    if (e.target.previousElementSibling && e.target.previousElementSibling.hasAttribute('href')) {
                        e.target.previousElementSibling.focus();
                    } else if (!e.target.previousElementSibling && e.target.parentNode === contEl.lastElementChild) {
                        contEl.children[0].focus();
                    }
                },
                'down': function (e) {
                    e.preventDefault();
                    if (e.target === contEl.children[0]) {
                        contEl.lastElementChild.children[0].focus();
                    } else if (e.target.nextElementSibling && e.target.nextElementSibling.hasAttribute('href')) {
                        e.target.nextElementSibling.focus();
                    }
                },
                'input': function (e) {
                    var val = e.target.value.trim().replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
                    return val ? insert(cacheFn(val, check)) : insert();
                },
                'escape': function (e) {
                    inputEl.value = "";
                    insert();
                    // contEl.firstElementChild.blur(); // should we unfocus?
                }
            };

        function createDropdown() {
            var wrapEl = contEl.querySelectorAll('.ac-results-wrapper')[0];
            var i = options.numResults;
            while (i--) {
                var anchorEl = document.createElement('a');
                anchorEl.href = '#';
                anchorEl.innerHTML = 'a<i>i</i>';
                wrapEl.appendChild(anchorEl);
            }
        }

        function cacheFn(q, fn) {
            return cache[q] ? cache[q] : cache[q] = fn(q), cache[q];
        }


        function check(q) {   // fuse part
            var entries = fuse.search(q);
            var arr = [];
            for (var i = 0; (i < entries.length && i < options.numResults); i++) {
                arr.push({
                    'name': entries[i].url,
                    'tag': entries[i].title
                });
            }
            return arr;
        }


        function insert(d) {
            var i = options.numResults;
            while (i--) {
                if (d && d[i]) {
                    resultNodes[i].style.display = 'block';
                    resultNodes[i].firstChild.nodeValue = d[i].tag;
                    var uri = d[i].name.toLowerCase();
                    resultNodes[i].href = options.directPath + '/' + uri // + '.html';
                    resultNodes[i].firstElementChild.firstChild.nodeValue = '';
                } else if (!d || !d[i]) {
                    resultNodes[i].style.display = 'none';
                }
            }
        }

        function multiHandler(e) {
            var k = e.keyCode,
                //assign a value to k if the up, down enter keys are pressed, or if the event is an input
                meth = k === 13 ? 'enter' : k === 27 ? 'escape' : k === 38 ? 'up' : k === 40 ? 'down' : e.type === 'input' ? 'input' : null;
            //if 'meth' was assigned a value earlier, return the associated function and pass the event to it
            return meth ? handlers[meth](e) : null;

        }

        function changeHandler(e) {
            window.setTimeout(function () {
                return doc.activeElement.parentNode === contEl || doc.activeElement.parentNode === contEl.lastElementChild ? null : insert();
            }, 50);
        }

        function globalHandler(e) {
            var keyCode = e.keyCode;
            if(keyCode==9) {
                if (e.target != contEl.children[0]) {
                    window.setTimeout(function (){ contEl.children[0].focus(); }, 0);
                    contEl.children[0].focus();
                }
            } 
        }
   

        createDropdown();
        document.addEventListener('keydown', globalHandler);
        contEl.addEventListener('input', multiHandler);
        contEl.addEventListener('keydown', multiHandler);
        contEl.parentNode.addEventListener('submit', function(e){ event.returnValue=false; return false; } );  // for the form
        contEl.firstElementChild.addEventListener('change', changeHandler);
    }
};