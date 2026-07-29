# Oplius
cheat for [ioe.vn](https://ioe.vn/)\
i will not update the cheat anymore, some features should still work.\
if you want to add new features or fix some issues in the cheat, you will have to create your own fork.

# how to install
1. install tampermonkey.
2. click on https://github.com/kaedesuu/ioe_cheat/raw/refs/heads/main/oplius.user.js
3. you will see a new page popup with tampermonkey, then click on the `Install` button.
4. done, now you can use them in game

# how to use
1. go the page where you usually see buttons to join the game (the page includes your name, and might be `/tu-luyen` on the url bar)
2. presses `Ctrl + Shift + I` or `F12` to open devtool
3. after devtool opens, click on `Console` button on the top of the devtool to open the `Console` tab
4. **you can join the game now!**
5. press `/` on the game screen to open command prompt, type `help` and press enter.
6. look into the `Console` tab and you will see commands for the cheat listed there.

If you want to use `incorrectwarn` (warns you when you choose the wrong answer, the command **allows you to choose the answer multiple times until you click on the correct answer**), you can turn it on by press `/` to open the command prompt, then type `iwarn on` and press enter to turn it on.\
You can turn `incorrectwarn` off by repeating the same pressing `/` step and type `iwarn off` and press enter to turn it off.

# disclaimer
The content and code in this repository are provided solely for **educational and research purposes**.\
**You're 100% responsible for your own actions.** By downloading, viewing, or utilizing any code or information provided in this repository, you acknowledge and agree that the creator/author of this project is in no way liable for damages, bans, or legal consequences that may arise from misuse or misapplication.

# reverse engineering purposes
if you plan to reverse engineer the [ioe.vn](https://ioe.vn/), you can view their code in the devtool's debugger.\
You can require some modules in their code by using this function:

```js
window.__require(module_name)
```

Most modules are included in `resources/index.js`. You can view it in debugger.
