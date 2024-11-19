// ==UserScript==
// @name         Oplius
// @version      2024-11-15
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
      console.info(`[Oplius]: Injected into game, took ${Date.now() - startTimestamp}ms for game to load.`)
     
      const getAppModel = () => window?.__require("ClientData")?.default?.prototype?.constructor?.AppModel;
      const question_types = window?.__require("ioe_config").IOE.QuestionType || {};

      // Taking from the platform with white theme
      const generateString = (length) => {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
      }

      const httpUtils_key = generateString(20);
      const endGame_key = generateString(20);

      // ApiDefine
      const api_enum = window.__require("ApiDefine").ApiDefine; // Can't believe it's ANSWEAR instead of ANSWER in their code

      // Patch typo issue on original code
      api_enum.ANSWER = api_enum.ANSWEAR_CHECK;

      // Finish game with answer
      const finish_game_ans = async (answers) => {
        window.__require("ClientData").default.ans = answers;
        window.__require("GamePlay")?.GamePlay?.prototype?.resetStateAllView();
        window.__require("GamePlay")?.GamePlay?.prototype?.endGame(endGame_key);
      }

      // Check answer correct
      const check_correction = (answers) => {
        // Use the httpUtils_key so the postApi if injected won't cause any issues
        return new Promise((resolve) => {
          httpUtils.default.postApi(api_enum.ANSWER, {
            "api_key": window?.__require("ClientData")?.default?.prototype?.constructor?.API_KEY || "gameioe",
            "token": window?.__require("ClientData")?.default?.prototype?.constructor?.TokenMD5orTokenFull || "",
            "serviceCode": window?.__require("ClientData")?.default?.prototype?.constructor?.SERVICE_CODE,
            "examKey": getAppModel()?.game?.examKey,
            "ans": answers, // Example: [{"questId":000000,"point":10,"ans":"True"}]
            "IPClient":"",
            "deviceId":""
          }, (data) => resolve((data?._data?.data?.point > 0) ? true : false), false, httpUtils_key);
        })
      }

      // Variables
      const httpUtils = window.__require("HttpUtils");
      let old_countDownUpdate = null;
      let old_endGame = null; 
      let old_postApi = null;

      // Functions
      const booleanify = (r_str) => {
        const str = r_str?.toString().toLowerCase().replaceAll(" ", "");
        if (str === "") return null;
        return (str === "true" || str === "yes" || str === "y" || str === "ye" || str === "yea" || str === "yeah") ? true : false;
      }

      // Popup listener (For some oplius module injection require error)
      const UIPopupManager = window.__require("UIPopupManager");
      const old_showPopupFromNode = UIPopupManager.default.prototype.showPopupFromNode;
      
      // Make a fake "this" environment (So it won't throw error) for UIPopupManager
      const fake_this_env = UIPopupManager.default.prototype;
      fake_this_env._popupStack = [];
      fake_this_env._childs_node = [];
      fake_this_env.node = {
        "getChildByName": (child) => { return fake_this_env._childs_node[child] || undefined; },
        "addChild": (child) => { fake_this_env._childs_node.push(child); }
      };


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
            console.info(final_outp);
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
              if (old_countDownUpdate === undefined || old_countDownUpdate === null) {
                old_countDownUpdate = window.__require("CountDown").CountDown.prototype.update;
                return;
              }
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
              window.__require("GamePlay").prototype.endGame = (key) => { if (key === endGame_key) old_endGame(); };
            } else {
              if (old_endGame === undefined || old_endGame === null) {
                old_endGame = window.__require("GamePlay").prototype.endGame;
              }
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

              // Inject (Tamper) into original function
              UIPopupManager.default.prototype.showPopupFromNode = (e, t, o, n) => {
                if (e !== "__OPLIUS_INCORRECT_WARN_MODULE_POPUP__") {
                  // Continue
                  return old_showPopupFromNode.call(fake_this_env, e, t, o, n);
                } else {
                  return undefined;
                }
              }

              // Inject into postApi function
              // NOTE: key is the input for the oplius module
              httpUtils.default.postApi = (url, request, res, bool, key) => { 
                if (url.includes(api_enum.ANSWER) || url === api_enum.ANSWEAR_CHECK || url.includes(api_enum.ANSWEAR_CHECK)) { 
                  return old_postApi(url, request, (response) => {
                    if (response["_data"] && response["_data"]["data"] && response["_data"]["data"]["ans"] && !isNaN(Number(response["_data"]["data"]["point"]))) {
                      const pointGiven = Number(response["_data"]["data"]["point"]);
                      
                      if (key === httpUtils_key) {
                        res(response);
                        return response;
                      }

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
              if (old_postApi === undefined || old_postApi === null) {
                old_postApi = httpUtils.default.postApi;
                return;
              }
              if (old_showPopupFromNode === undefined || old_showPopupFromNode === null) {
                old_showPopupFromNode = UIPopupManager.default.prototype.showPopupFromNode;
                return;
              }
              httpUtils.default.postApi = old_postApi;
              UIPopupManager.default.prototype.showPopupFromNode = old_showPopupFromNode;
            }
          }
        },
        {
          "name": "bruteforce-answer",
          "cmd": ["bruteforce-answer", "bforce", "aans", "autoans"],
          "description": "Works on ticking answer and true/false game only.",
          "isEnabled": false,
          "function": async (args) => { 
            // Except for two types of game (They don't require brute-force)
            // The "LEO_NUI" is "hanh tinh tim"
            if (window?.__require("ClientData")?.ClientDataKey?.GAME_NAME === "LEO_NUI" && window.location.href.includes("hanh-tinh-tim")) { 
              const answers_array = [];

              await getAppModel()?.game?.questionArr.forEach(async (question) => {
                const ans_obj = question?.data?.ans;
                const q_id = question?.questionId; 
                const q_point = question?.questionPoint;
                let final_ans = "";

                for (let i = 0; i < ans_obj.length; i++) {
                  for (let j = 0; j < ans_obj.length; j++) {
                    if (ans_obj[j]?.orderTrue === i) final_ans += `${ans_obj[j]?.content}${i < ans_obj.length ? "|" : ""}`;
                  }
                }

                answers_array.push({
                  "ans": final_ans || "",
                  "point": q_point || 10,
                  "questId": q_id || 0
                });
              })

              finish_game_ans(answers_array || []);
              return;
            }

            if (window?.__require("ClientData")?.ClientDataKey?.GAME_NAME === "GAME_12_GHEPCAP" && window.location.href.includes("ghep-cap")) { 
              const answers_array = [];

              await getAppModel()?.game?.questionArr.forEach(async (question) => {
                answers_array.push({
                  "ans": question?.data?.ans[0]?.content || "",
                  "point": question?.questionPoint || 10,
                  "questId": question?.questionId || 0 
                });
              })

              finish_game_ans(answers_array || []);
              return;
            }

            const results = await Promise.all(
              getAppModel()?.game?.questionArr.map(async (question) => {
                const q_id = question.questionId;
                const q_type = question.questionType;
                const q_point = question.questionPoint;
          
                switch (q_type) {
                  case question_types.TrueOrFalse:
                    const true_check = await check_correction({
                      questId: q_id,
                      point: q_point,
                      ans: "True",
                    });
                    return { questId: q_id, point: q_point, ans: true_check ? "True" : "False" };
          
                  case question_types.SelectAnswear:
                    const checkResults = await Promise.all(
                      question.answearArr.map(async (answer) =>
                        check_correction({ questId: q_id, point: q_point, ans: answer.content })
                      )
                    );
                    const correctAnswerIndex = checkResults.findIndex((result) => result);
                    return correctAnswerIndex !== -1
                      ? {
                          questId: q_id,
                          point: q_point,
                          ans: question.answearArr[correctAnswerIndex].content,
                        }
                      : null; // Handle case where no correct answer is found
          
                  default:
                    console.warn(`Unknown question type: ${q_type}`);
                    return null;
                }
              })
            );
          
            // Filter out null values (errors or no correct answer)
            const answers_array = results.filter((result) => result !== null);
            finish_game_ans(answers_array || []);
          }
        },
        {
          "name": "show-bruteforce-answer",
          "cmd": ["show-bruteforce-answer", "sbforce", "saans", "showans"],
          "description": "Works on ticking answer and true/false game only. This will output the answer inside console.",
          "isEnabled": false,
          "function": async (args) => {
            const b_output = (answers) => {
              for (let i = 0; i < answers.length; i++) {
                console.info(`${i+1}: "${answers[i]?.ans}" | questId: ${answers[i]?.questId}`);
              }
            }

            const b_q_output = (answers) => {
              for (let i = 0; i < answers.length; i++) {
                console.info(`${i+1}: ${answers[i]?.content} | "${answers[i]?.ans}" | questId: ${answers[i]?.questId}`);
              }
            }

            // Except for two types of game (They don't require brute-force)
            // The "LEO_NUI" is "hanh tinh tim"
            if (window?.__require("ClientData")?.ClientDataKey?.GAME_NAME === "LEO_NUI" && window.location.href.includes("hanh-tinh-tim")) {
              const answers_array = [];

              await getAppModel()?.game?.questionArr.forEach(async (question) => {
                const ans_obj = question?.data?.ans;
                const q_id = question?.questionId; 
                const q_point = question?.questionPoint;
                let final_ans = "";

                for (let i = 0; i < ans_obj.length; i++) {
                  for (let j = 0; j < ans_obj.length; j++) {
                    if (ans_obj[j]?.orderTrue === i) final_ans += `${ans_obj[j]?.content}${i < ans_obj.length ? "|" : ""}`;
                  }
                }

                answers_array.push({
                  "ans": final_ans || "",
                  "point": q_point || 10,
                  "questId": q_id || 0
                });
              })

              b_output(answers_array);
              return;
            }

            if (window?.__require("ClientData")?.ClientDataKey?.GAME_NAME === "GAME_12_GHEPCAP" && window.location.href.includes("ghep-cap")) {
              const answers_array = [];

              await getAppModel()?.game?.questionArr.forEach(async (question) => {
                answers_array.push({
                  "ans": question?.data?.ans[0]?.content || "",
                  "point": question?.questionPoint || 10,
                  "questId": question?.questionId || 0,
                  "content": question?.data?.content?.content || ""
                });
              })

              b_q_output(answers_array);
              return;
            }

            const results = await Promise.all(
              getAppModel()?.game?.questionArr.map(async (question) => {
                const q_id = question.questionId;
                const q_type = question.questionType;
                const q_point = question.questionPoint;
          
                switch (q_type) {
                  case question_types.TrueOrFalse:
                    const true_check = await check_correction({
                      questId: q_id,
                      point: q_point,
                      ans: "True",
                    });
                    return { questId: q_id, point: q_point, ans: true_check ? "True" : "False" };
          
                  case question_types.SelectAnswear:
                    const checkResults = await Promise.all(
                      question.answearArr.map(async (answer) =>
                        check_correction({ questId: q_id, point: q_point, ans: answer.content })
                      )
                    );
                    const correctAnswerIndex = checkResults.findIndex((result) => result);
                    return correctAnswerIndex !== -1
                      ? {
                          questId: q_id,
                          point: q_point,
                          ans: question.answearArr[correctAnswerIndex].content,
                        }
                      : null; // Handle case where no correct answer is found
          
                  default:
                    console.warn(`Unknown question type: ${q_type}`);
                    return null;
                }
              })
            );
          
            // Filter out null values (errors or no correct answer)
            const answers_array = results.filter((result) => result !== null);
            b_output(answers_array);
          }
        }
      ] 

      // Binding on Cocos-engine (Bad engine lol)
      // VERY IMPORTANT: If you're a gamedev, don't do cocos-engine it's a bad game engine
  
      // Godot and Unity > This chinese game engine
      // After around 30 minutes I found: https://docs.cocos.com/creator/2.0/manual/en/scripting/player-controls.html
      // window.cc.systemEvent.on(window.cc.SystemEvent.EventType.KEY_DOWN, () => {}, window);
      // never use cocos-engine lol, they're the worst

      // Command interface
      window.cc.systemEvent.on(window.cc.SystemEvent.EventType.KEY_DOWN, (ev) => {
        if (ev.keyCode === 59 || ev.keyCode === 191) {
          const command_prompt = window.prompt("Enter command here:") || "";
          const command_input = command_prompt.split(" ")[0];
          const args = command_prompt.split(" ").splice(1);

          command_modules.forEach((command) => {
            if (!command || !command["cmd"]) return;
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