# FancyDir
FancyDir styles Apache's default (and rather ugly) directory listing, turning it into something considerably easier on the eyes.
Because it uses Apache's mod_autoindex, FancyDir <em>does not</em> rely on any additional scripting engine such as PHP.

## Features
* Requires Apache 2.x with the mod_autoindex module.
* Inline search &mdash; dynamically filter your files.
* Breadcrumb navigation &mdash; quickly navigate to a parent folder.
* Tested in major browsers (Internet Explorer 7&ndash;11, Firefox, Opera, Brave, and Chrome).
* Degrades gracefully &mdash; While some features require JavaScript, if it is disabled users are still presented with a clear layout.

## What does this fork add?
* Adds capitalization variations for each extension.
* Changes icons for several extensions.
* Adds icons for
** .bin .xml .sql .db
** .srt .subs .sub .idx .ssa .ass
** .iso .cia .3ds .nds .rom .bios .gba .gbc .gb .cue
** .epub .cbz .cbr
** .jar .ps1

## All filetypes handled by this fork of FancyDir:
* Code: .htm .html .shtm .shtml .css .xml .php .c .cs .cpp .rb .jar .java .class .h .py .pl .ps1 .sln .project .proj .asp .aspx .vb .vbx
* Roms/Images: .iso .cia .3ds .nds .rom .bios .gba .gbc .gb .cue
* Books: .epub .cbz .cbr
* Office: .doc .docx .xls .xlsx .ppt .pptx
* Databases: .mdb .sql .db
* Adobe: .pdf .fla .swf .as
* Archives: .zip .rar .7z .ace .tar .gz
* Subtitles: .srt .subs .sub .idx .ssa .ass
* Linux Stuff: .sh .rpm .deb .ebuild
* .exe .bin
* And wildcards for all image, audio, video, and text files handled by your Apache server.

## Updates
* v2.1 (This fork) &mdash; 2023/12/03 &mdash; Added several file types to display icons. Added all of the other Silk icons, so you can customize more easily.
* v2.0 &mdash; 2011/04/17 &mdash; Search is now much faster, removed lightbox effects (they're so 2008), removed all dependencies on jQuery and dropped support for IE6.
* v1.0.1 &mdash; 2008/08/05 &mdash; Optimised the search slightly and added more content types to display within the iframe.
* v1.0 &mdash; 2008/07/20 &mdash; FancyDir's first release.

## Download & Installation
1. Download [FancyDir-v2.0.zip](https://github.com/BPScott/FancyDir/zipball/v2.0).
2. Upload the fancydir directory to the root of your domain (so it would be accessible at yourdomain.com/fancydir/).
3. Upload the .htaccess file to the root of your domain, if a .htaccess file already exists then append the contents of the fancydir .htaccess file to your own.
4. Enjoy your fancy directory listings.

## Notes
* Sometimes you don't want list the contents of a directory, in this case create a .htaccess file containing the line *Options -Indexes* and place it in the directory you don't want listed.
* FancyDir uses the [Silk icon set](https://github.com/legacy-icons/famfamfam-silk) from famfamfam.

## License
FancyDir is licensed under the [Creative Commons Attribution 3.0 License](http://creativecommons.org/licenses/by/3.0/).
Use and modify FancyDir as you see fit but please include a comment marking [BPScott's Project](https://github.com/BPScott/FancyDir) as the original source. Thanks BPScott!
