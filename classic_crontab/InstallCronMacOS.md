# Add cron jobs on MacOS X (or macos)

By default the environment `$EDITOR` is not set. Before editing cron, we should set it:

```
$ EDITOR=vim crontab -e
```

You can add the following line:

```
* * * * * echo Hello, World!
```

Use your VIM tricks and save it. Now you will see the errors:

```
crontab: no crontab for vietlq - using an empty one
crontab: temp file must be edited in place
```

## Error handling

### No crontab for user

The first error says: `no crontab for vietlq - using an empty one`. It means you do not have crontab file. Check it for yourself:

```
$ sudo ls -la /usr/lib/cron/tabs/vietlq
```

### Edit in place

The second error `temp file must be edited in place` insists that the editor must not make a backup file. You can edit your `.vimrc` to satisfy this condition:

```
$ vim ~/.vimrc

" Must have for crontab, otherwise you will get the error:
" crontab: temp file must be edited in place
autocmd filetype crontab setlocal nobackup nowritebackup
```

## Adding cron job for real

```
$ EDITOR=vim crontab -e

crontab: no crontab for vietlq - using an empty one
crontab: installing new crontab
```

Since you don't have crontab file yet, you can still see the 1st error. But now you have the confirmation `installing new crontab`, verify that crontab file is created for you:

```
$ sudo ls -la /usr/lib/cron/tabs/vietlq
-rw------- 1 root wheel 256 Feb 25 07:31 /usr/lib/cron/tabs/vietlq
```

## Special character %

Note that `%` is a special character in crontab statement. For the shell command part, `%` must be escaped by `\`. The first unescaped `%` will terminate the shell command. Anything comes after the first `%` will be passed to `STDIN` of the shell process. Any following `%` will be treated as a new line passed to the `STDIN` of the shell process.

### A bad example - escape or no quotes

Invalid cron statement:

```
* * * * * echo "\%" burger! "%" stdin
```

The output:

```
/bin/sh: -c: line 0: unexpected EOF while looking for matching `"'
/bin/sh: -c: line 1: syntax error: unexpected end of file
```

### Valid examples

Valid cron statements:

```
* * * * * echo "\%" burger! "\%" stdin
* * * * * echo "\%" burger! "\%" % stdin
```

## You've got mail!

Note that since your have successfully installed the cron, now every single minute you will have a new email sent to your local machine mailbox:

```
You have new mail in /var/mail/vietlq
```

Type `mail` to access emails.

An example email sent by cron:

```
From vietlq@****  Sat Feb 25 03:33:01 2017
Return-Path: <vietlq@****>
X-Original-To: vietlq
Delivered-To: vietlq@****
Received: by **** (Postfix, from userid 501)
        id 086FF3****; Sat, 25 Feb 2017 03:28:01 +0000 (GMT)
From: vietlq@**** (Cron Daemon)
To: vietlq@****
Subject: Cron <vietlq@****> echo
X-Cron-Env: <SHELL=/bin/sh>
X-Cron-Env: <PATH=/usr/bin:/bin>
X-Cron-Env: <LOGNAME=vietlq>
X-Cron-Env: <USER=vietlq>
X-Cron-Env: <HOME=/Users/vietlq>
Message-Id: <20170225032801.086FF3****@****>
Date: Sat, 25 Feb 2017 03:28:01 +0000 (GMT)
Status: O
```

## Clean up after yourself

Remember to remove your newly added crontab statement:

```
$ EDITOR=vim crontab -e
```

Your computer will thank you for the act.
