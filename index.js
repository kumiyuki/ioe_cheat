;(async() => {
  if (window.__oplius_injected === undefined || window.__oplius_injected === null || window.__oplius_injected === false) {
    // Set inject value
    // window.__oplius_injected = true;

    // ApiDefine
    const api_enum = window.__require("ApiDefine").ApiDefine; // Can't believe it's ANSWEAR instead of ANSWER in their code

    // Patch typo issue on original code
    api_enum.ANSWER = api_enum.ANSWEAR_CHECK;

    // Variables
    const httpUtils = window.__require("HttpUtils");
    let old_countDownUpdate = null;
    let old_endGame = null; 
    let old_postApi = null; 

    // Cheat modules
    const command_modules = [
      {
        "name": "freeze",
        "cmd": ["freeze", "frz", "fr"],
        "description": "Freeze the current game time.",
        "function": (isEnable) => {
          if (isEnable === true) {
            // Grab original function
            old_countDownUpdate = window.__require("CountDown").CountDown.prototype.update;

            // The argument "e" here is time, they are 0.000 idk
            window.__require("CountDown").CountDown.prototype.update = (e) => {}
          } else {
            // The argument "e" here is time, they are 0.000 idk
            window.__require("CountDown").CountDown.prototype.update = old_countDownUpdate
          } 
        }
      },
      {
        "name": "antiEndgame",
        "cmd": ["antiendgame", "aeg", "antieg"],
        "description": "Freeze the current game time.",
        "function": (isEnable) => {
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
        "description": "Warn users/players when they choose incorrect option.",
        "function": (isEnable) => {
          // Grab original function
          old_postApi = httpUtils.default.postApi;

          // Inject into postApi function
          httpUtils.default.postApi = (url, request, res, bool) => {
            console.log(url)
            if (url.includes(api_enum.ANSWER) || url === api_enum.ANSWEAR_CHECK || url.includes(api_enum.ANSWEAR_CHECK)) {
              const tampered_res = (response) => {
                console.log(response)
  
                if (response["_data"] && response["_data"] && response["_data"]["data"] && response["_data"]["data"]["ans"] && isNaN(Number(response["_data"]["data"]["point"]))) {
                  const pointGiven = Number(response["_data"]["data"]["point"]);
  
                  if (pointGiven <= 0) {
                    alert(`The answer ${response["_data"]["data"]["ans"]} is incorrect, please try again with different option`);
                    // Tamper with error
                    response["data"] = undefined;
                    response["success"] = false;
                    response["_data"]["HaveError"] = true;
                    response["_data"]["IsSuccessed"] = true;
                    response["error"] = { "msg": "__OPLIUS_INCORRECT_WARN_MODULE_POPUP__" }
                    res(response);
                    return response;
                  } else {
                    res(response);
                    return response;
                  }
                }
              }
              return old_postApi(url, request, tampered_res, bool);
            } else { return old_postApi(url, request, res, bool) };
          }
        }
      },
    ]

    // Enable cheat
    command_modules[2].function();

    // Command interface

  } else {
    alert("Oplius already injected!");
  }
})();