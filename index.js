// ==UserScript==
// @name         Oplius
// @version      2024-09-07
// @description  The fastest way to beat IOE!
// @author       kaedesuu
// @match        https://ioe.vn/lam-bai/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ioe.vn
// @grant        none
// ==/UserScript==

// Since this is a tampermonkey script, please use tampermonkey
// Or else the script won't load
// Reason: It needs to check for game load listener

// If you still want to do direct injection (uncomment line below)
// window.__require("HotUpdate").default.prototype.logTime("show lobby done");

;(async() => {
  if (window.__oplius_injected === undefined || window.__oplius_injected === null || window.__oplius_injected === false) {
    // Set inject value
    window.__oplius_injected = true;

    const main = () => {
      // Injection message
      console.log(`[Oplius]: Injected into game, took ${Date.now() - startTimestamp}ms for game to load.`)
      
      // ApiDefine
      const api_enum = window.__require("ApiDefine").ApiDefine; // Can't believe it's ANSWEAR instead of ANSWER in their code

      // Patch typo issue on original code
      api_enum.ANSWER = api_enum.ANSWEAR_CHECK;

      // Variables
      const httpUtils = window.__require("HttpUtils");
      let old_countDownUpdate = null;
      let old_endGame = null; 
      let old_postApi = null;

      // Functions
      const booleanify = (r_str) => {
        const str = r_str?.toString().toLowerCase().replaceAll(" ", "")
        if (str === "") return null;
        return (str === "true" || str === "yes" || str === "y" || str === "ye" || str === "yea" || str === "yeah") ? true : false;
      }

      // Cheat modules
      const command_modules = [
        {
          "name": "help",
          "cmd": ["help","hlp", "cmd", "cmds"],
          "description": "Show commands list. Usage: help",
          "isEnabled": false,
          "function": (args) => {
            let final_outp = ``
            command_modules.forEach((el) => { final_outp += `Name: ${el["name"]} | Description: ${el["description"]} | Command (Alternative): ${JSON.stringify(el["cmd"])}\n` });
            console.log(final_outp);
          }
        },
        {
          "name": "freeze",
          "cmd": ["freeze", "frz", "fr"],
          "description": "Freeze the current game time. Usage: freeze [isEnable: bool (true/false)]",
          "isEnabled": false,
          "function": (args) => {
            const isEnable = booleanify(args[0]);

            if (isEnable === true) {
              // Grab original function
              old_countDownUpdate = window.__require("CountDown").CountDown.prototype.update;

              // The argument "e" here is time, they are 0.000 idk
              window.__require("CountDown").CountDown.prototype.update = (e) => {}
            } else {
              // Apply old countdown update function
              if (old_countDownUpdate === undefined || old_countDownUpdate === null) old_countDownUpdate = window.__require("CountDown").CountDown.prototype.update;
              window.__require("CountDown").CountDown.prototype.update = old_countDownUpdate;
            } 
          }
        },
        {
          "name": "antiEndgame",
          "cmd": ["antiendgame", "aeg", "antieg"],
          "description": "Prevent game from ending. Usage: aeg [isEnable: bool (true/false)]",
          "isEnabled": false,
          "function": (args) => {
            const isEnable = booleanify(args[0]);

            if (isEnable === true) {
              // Grab original function
              old_endGame = window.__require("GamePlay").prototype.endGame;

              // No more end game lol
              window.__require("GamePlay").prototype.endGame = () => {};
            } else {
              window.__require("GamePlay").prototype.endGame = old_endGame;
            }
          }
        },
        {
          "name": "incorrectwarn",
          "cmd": ["iwarn", "incorrectwarn", "wrongwarn", "answerwarn"],
          "description": "Warn users/players when they choose incorrect option. Usage: iwarn [isEnable: bool (true/false)]",
          "isEnabled": false,
          "function": (args) => {
            const isEnable = booleanify(args[0]);

            if (isEnable === true) {
              // Grab original function
              old_postApi = httpUtils.default.postApi;

              // Inject into postApi function
              httpUtils.default.postApi = (url, request, res, bool) => { 
                if (url.includes(api_enum.ANSWER) || url === api_enum.ANSWEAR_CHECK || url.includes(api_enum.ANSWEAR_CHECK)) { 
                  return old_postApi(url, request, (response) => {
                    if (response["_data"] && response["_data"]["data"] && response["_data"]["data"]["ans"] && !isNaN(Number(response["_data"]["data"]["point"]))) {
                      const pointGiven = Number(response["_data"]["data"]["point"]);
      
                      if (pointGiven <= 0) {
                        // Give user alert
                        alert(`The answer "${response["_data"]["data"]["ans"]}" is incorrect, please try again with different option`);

                        // Tamper with error 
                        let tampered_res = response;
                        tampered_res["data"] = { "success": false, "error": { "msg": "__OPLIUS_INCORRECT_WARN_MODULE_POPUP__", code: 3, "message": "__OPLIUS_INCORRECT_WARN_MODULE_POPUP__" } };
                        tampered_res["_error"] = { code: 3, msg: "__OPLIUS_INCORRECT_WARN_MODULE_POPUP__" };

                        // Send back tampered response
                        res(tampered_res);
                        return tampered_res;
                      } else {
                        res(response);
                        return response;
                      }
                    }
                  }, bool);
                } else { return old_postApi(url, request, res, bool) };
              }
            } else if (isEnable === false) {
              httpUtils.default.postApi = old_postApi;
            }
          }
        },
      ]

      // Popup listener (For some oplius module injection require error)
      const UIPopupManager = window.__require("UIPopupManager");
      const old_showPopup = UIPopupManager.default.prototype.showPopup;
      UIPopupManager.default.prototype.showPopup = (e, t, o, n, i) => {
        if (e !== "__OPLIUS_INCORRECT_WARN_MODULE_POPUP__") {
          // Continue
          return old_showPopup(e, t, o, n, i);
        } else {
          return undefined;
        }
      }

      // Binding on Cocos-engine (Bad engine lol)
      // VERY IMPORTANT: If you're a gamedev, don't do cocos-engine it's a bad game engine
  
      // Godot and Unity > This chinese game engine
      // After around 30 minutes I found: https://docs.cocos.com/creator/2.0/manual/en/scripting/player-controls.html
      // window.cc.systemEvent.on(window.cc.SystemEvent.EventType.KEY_DOWN, () => {}, window);
      // never use cocos-engine lol, they're the worst

      // Command interface
      window.cc.systemEvent.on(window.cc.SystemEvent.EventType.KEY_DOWN, (ev) => {
        if (ev.keyCode === 59 || ev.keyCode === 191) {
          const command_prompt = window.prompt("Enter command here:");
          const command_input = command_prompt.split(" ")[0];
          const args = command_prompt.split(" ").splice(1);

          command_modules.forEach((command) => {
            if (command["cmd"].includes(command_input)) {
              if (command["isEnabled"] === false) {
                command["isEnabled"] = true;
                return command["function"](args);
              } else {
                command["isEnabled"] = false;
                return command["function"](args);
              }
            }
          })
        }
      }, window)
    } 
   
    const startTimestamp = Date.now();
    let logTime_original = null;

    const logTime_loop = setInterval(() => {
      if (window && window.__require && window.__require("HotUpdate") && window.__require("GameScene").default && window.__require("GameScene").default.prototype && window.__require("GameScene").default.prototype.logTime && logTime_original === null) {
        logTime_original = window.__require("HotUpdate").default.prototype.logTime;
        window.__require("HotUpdate").default.prototype.logTime = (msg) => {
          logTime_original(msg); 
          if (msg.includes("show lobby done")) {
            main();
          }
        }
        clearInterval(logTime_loop);
      }
    }, 250);
  } else {
    alert("Oplius already injected!");
  }
})();