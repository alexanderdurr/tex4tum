---
title: vCard
tags: vcf
---

A vCard is a file format standard for electronic business cards.



## Facts and Figures
* Extension: `.vcf`
* MIME type: `text/vcard`



### Format

The format in general is
`<PROPERTY>:<VALUE>\n`


Required properties:
* BEGIN:VCARD
* VERSION:3.0
* N:Doe;John;;Dr;
* FN:Dr. John Doe
* END:VCARD





## Example

```
BEGIN:VCARD
VERSION:3.0
N:Gump;Forrest;;Mr.;
FN:Forrest Gump
ORG:Bubba Gump Shrimp Co.
TITLE:Shrimp Man
PHOTO;VALUE=URI;TYPE=GIF:http://www.example.com/dir_photos/my_photo.gif
TEL;TYPE=WORK,VOICE:(111) 555-1212
TEL;TYPE=HOME,VOICE:(404) 555-1212
ADR;TYPE=WORK,PREF:;;100 Waters Edge;Baytown;LA;30314;United States of Amer
 ica
LABEL;TYPE=WORK,PREF:100 Waters Edge\nBaytown\, LA 30314\nUnited States of 
 America
ADR;TYPE=HOME:;;42 Plantation St.;Baytown;LA;30314;United States of America
LABEL;TYPE=HOME:42 Plantation St.\nBaytown\, LA 30314\nUnited States of Ame
 rica
EMAIL:forrestgump@example.com
REV:2008-04-24T19:52:43Z
END:VCARD
```


