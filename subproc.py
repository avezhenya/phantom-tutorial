#!usr/bin/python
# -*- coding: utf-8 -*-
import subprocess

# Запуск test.html на phantomjs средствами python
# 1. путь к phantomjs
# 2. путь к скрипту
# 3. путь к тесту
# TODO: путь куда сохранять screenshot
subprocess.call(["phantomjs", "loadspeed.js", "test.html"])
