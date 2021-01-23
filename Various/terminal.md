**`ctrl` + `c`** leave any terminal view you are stuck in (terminates most operations).  
**`date`**  displays the current date and time.  
**`diff`**  compares two files line by line (assumes there is text).  

**`help`**    displays a partial list of bash commands.  

**cat: file contents**  
`cat <filename>` prints the file contents to the terminal. It can also be used to merge two files (concatenation).  

**cd**  
`cd` go back to the home directory  
`cd <dir_name>`  Go to the working directory you named  
`cd ..` go up one level  
`cd ../../<dir_name>` goes back two levels then down one level  
`chmod` Changes permissions for access to a file (check man for info before using this)  

**clear terminal**  
`clear` clears all the text from the terminal.  

**copy**  
`cp <file1> <file2>` copies a file: first name of original file, second name of copy.  

**create folder**  
`mkdir <foldername>` creates a new directory.  

**echo**  
`echo` repeats whatever appears after the command (after expansion).
To write in a text file: `echo "this is the text" > example-filename`  
This also creates the file *example-filename* if it does not exist already.  
It will replace any text that is already there. With `echo "this is the text" >> example-filename` the text is not replaced.  

**grep to search**  
`grep <keyword>` can be used to search for a word in a file. It can also be used with regex.  
Combine `cat <filename>` with `|` (= pipe) and `grep <keyword>`: `cat Markdown.md | grep "text`. This will print the lines of the file where 'text' is used.  

**history**  
`history` will return a full list of commands that were used recently. These commands have an index number.  
With `!` plus the index number, the command of that index will run again.  


**less**  
`less <filename>` opens a viewer and makes it easy to scroll up and down through larger files. `q` closes the viewer.  

**list**  
`ls` shows all files in the directory.
`ls ..` show parent directory of list.  
`ls -R` shows full tree of directories etc.  
`ls -a` shows all folders and (hidden) files in folders.  
`ls <dirname>` show files in specific directory.  
`ls -l` for more complete information  

**more**  
`more <filename>` opens a viewer that displays a text file one page at a time. Press the spacebar to see the next page.  
It makes it easy to scroll up (not down like you can do with `less`) through larger files.  
`q` closes the viewer. 

**move/rename**  
`mv <file1> <file2>` moves a file or changes its name.  
The example renames folder static to tests: `mv terminal-exercises-1/src/static terminal-exercises-1/src/tests`

**nano**  
`nano` opens up the GNU nano terminal inside the terminal.  
`nano <filename>` opens the GNU terminal and shows the file.  
All commands start with Ctrl (^). Example: Ctrl x for save/exit.  

**pipe: |**  
`|` is used to funnel output or results from one program to the input of another: `input | output`.  
When used with `grep` it takes what is piped into it and matches patterns.

**pwd for current folder**  
`pwd` stands for print working directory and prints the path of the folder you are currently working in.  


**remove**  
`rm <filename>` will remove the file.
NB: `rm *` will remove **all** files.  
To remove files with a specific pattern: never put a space after *, always immediately put pattern after *.  
`rmdir <foldername>` will remove the folder.  
`rm -r <foldername>` removes folder, subdirectories, and files in all of these. `-r` stands for *recursive*.

