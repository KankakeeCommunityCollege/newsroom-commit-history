#!/bin/bash

echo 'Cleaning up Server Site'

sleep 1

gulp cleanFTP --user $FTP_USER --password $FTP_PASSWORD

sleep 15

echo 'Sending Files to Server via FTP'

sleep 5

gulp newerFTP --user $FTP_USER --password $FTP_PASSWORD
