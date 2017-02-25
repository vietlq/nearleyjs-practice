$ export EDITOR=vim
vietlq@Viets-iMac:~>
$ crontab -e
crontab: no crontab for vietlq - using an empty one
crontab: temp file must be edited in place

$ sudo ls -la /usr/lib/cron/tabs/vietlq
-rw-r--r-- 1 vietlq wheel 0 Feb 24 21:37 /usr/lib/cron/tabs/vietlq

$ crontab -e
crontab: temp file must be edited in place

$ vim ~/.vimrc
" Must have for crontab, otherwise you will get the error:
" crontab: temp file must be edited in place
autocmd filetype crontab setlocal nobackup nowritebackup

$ crontab -e
crontab: installing new crontab

$ crontab -e
crontab: no crontab for vietlq - using an empty one
crontab: installing new crontab

Valid cron statements:

```
* * * * * echo "\%" burger! "\%" stdin
* * * * * echo "\%" burger! "\%" % stdin
```

Invalid cron statement:

```
* * * * * echo "\%" burger! "%" stdin
```

The output:

```
/bin/sh: -c: line 0: unexpected EOF while looking for matching `"'
/bin/sh: -c: line 1: syntax error: unexpected end of file
```
