window.__require = function e(t, o, n) {
  function i(a, c) {
    if (!o[a]) {
      if (!t[a]) {
        var s = a.split("/");
        if (s = s[s.length - 1], !t[s]) {
          var u = "function" == typeof __require && __require;
          if (!c && u) return u(s, !0);
          if (r) return r(s, !0);
          throw new Error("Cannot find module '" + a + "'")
        }
        a = s
      }
      var l = o[a] = {
        exports: {}
      };
      t[a][0].call(l.exports, function(e) {
        return i(t[a][1][e] || e)
      }, l, l.exports, e, t, o, n)
    }
    return o[a].exports
  }
  for (var r = "function" == typeof __require && __require, a = 0; a < n.length; a++) i(n[a]);
  return i
}({
  AnswerButton: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "d3cc8l3or1HcIiUhcQDqaKh", "AnswerButton");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.AnswerButton = void 0;
    var a = cc._decorator,
      c = a.ccclass,
      s = a.property,
      u = function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.scrollViewContent = null, t.spriteStateArr = [], t.btnIdx = 0, t.btnContent = "", t.enableSizeChangeEvent = !0, t.useRichText = !1, t
        }
        return i(t, e), Object.defineProperty(t.prototype, "btnTxt", {
          get: function() {
            return this.btnContent
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype.setBtnTxt = function(e, t, o) {
          if (void 0 === o && (o = !0), !this.contentLbl) return "";
          this.enableSizeChangeEvent = o && this.btnContent != e, o && (this.btnContent = e), t && (this.contentLbl.font = t, this.contentNoScrollLbl.font = t), this.contentLbl.horizontalAlign = cc.macro.TextAlignment.LEFT, this.contentNoScrollLbl.horizontalAlign = cc.macro.TextAlignment.LEFT, this.contentNoScrollLbl.node.active = !0, this.scrollViewContent ? this.enableSizeChangeEvent ? (this.contentLbl.node.active = !1, this.contentNoScrollLbl.node.opacity = 1, this.contentNoScrollLbl.string = e, cc.log("hereeeee enableSizeChangeEvent " + e)) : this.useRichText ? (this.contentLbl.node.active = !0, this.contentLbl.string = e, cc.log("hereeeee useRichText " + e)) : (this.contentNoScrollLbl.node.opacity = 255, this.contentNoScrollLbl.string = e, cc.log("hereeeee contentNoScrollLbl " + e)) : this.contentLbl.string = e
        }, t.prototype.changeStateWwithAnswer = function(e) {
          if (cc.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa changeStateWwithAnswer"), this.spriteAnsState && 0 != this.spriteStateArr.length) {
            cc.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa changeStateWwithAnswer spriteStateArr pass"), this.spriteAnsState.spriteFrame = this.spriteStateArr[e ? 1 : 2];
            var t = this.btnContent,
              o = e ? "<color=#f0ff00>" + t + "</color>" : "<color=#f0b500>" + t + "</color>";
            this.useRichText ? (this.contentLbl.node.active = !0, this.contentLbl.string = o) : (this.contentNoScrollLbl.node.active = !0, this.contentNoScrollLbl.node.opacity = 255, this.contentNoScrollLbl.string = o)
          }
        }, t.prototype.resetStateWwithAnswer = function() {
          this.spriteAnsState && 0 != this.spriteStateArr.length && (this.spriteAnsState.spriteFrame = this.spriteStateArr[0])
        }, t.prototype.onLoad = function() {
          null != this.contentNoScrollLbl && null != this.contentNoScrollLbl.node && this.contentNoScrollLbl.node.on("richtext-update-string", this.onRichTextChange, this)
        }, t.prototype.onDestroy = function() {
          null != this.contentNoScrollLbl && null != this.contentNoScrollLbl.node && this.contentNoScrollLbl.node.off("richtext-update-string", this.onRichTextChange, this)
        }, t.prototype.onRichTextChange = function() {
          var e = this;
          cc.log("onRichTextChange .....", this.contentNoScrollLbl), this.enableSizeChangeEvent && this.scheduleOnce(function() {
            return e.onSizeChange()
          })
        }, t.prototype.onSizeChange = function() {
          if (null != this.contentNoScrollLbl && "" != this.contentNoScrollLbl.string) {
            var e = this.contentNoScrollLbl.node.getContentSize();
            cc.log("contentNoScrollLbl._lineCount ", this.contentNoScrollLbl.string);
            var t = this.scrollViewContent.node.getContentSize();
            e.height > t.height ? (this.scrollViewContent.node.getComponentInChildren(cc.Scrollbar).node.active = !0, this.useRichText = !0, this.contentLbl.node.active = !0, this.contentLbl.string = this.contentNoScrollLbl.string, this.contentNoScrollLbl.string = "", this.contentNoScrollLbl.node.active = !1, this.scrollViewContent.scrollToTop(), this.scrollViewContent.node.active = !0, cc.log("useRichText ", this.contentLbl.string), console.log("useRichText test ", this.scrollViewContent)) : (this.contentNoScrollLbl.node.opacity = 255, this.contentNoScrollLbl.node.active = !0, this.contentLbl.node.active = !1, this.useRichText = !1, this.scrollViewContent.node.getComponentInChildren(cc.Scrollbar).node.active = !1)
          }
        }, r([s({
          type: cc.RichText
        })], t.prototype, "contentNoScrollLbl", void 0), r([s({
          type: cc.RichText
        })], t.prototype, "contentLbl", void 0), r([s(cc.ScrollView)], t.prototype, "scrollViewContent", void 0), r([s({
          type: cc.Sprite
        })], t.prototype, "spriteAnsState", void 0), r([s({
          type: cc.SpriteFrame
        })], t.prototype, "spriteStateArr", void 0), r([s], t.prototype, "btnIdx", void 0), r([c], t)
      }(cc.Button);
    o.AnswerButton = u, cc._RF.pop()
  }, {}],
  AnswerImgButton: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "bb115dCfVhL952txETksfIE", "AnswerImgButton");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.AnswerImgButton = void 0;
    var a = e("../../../framework/ui/UISpriteHelper"),
      c = cc._decorator,
      s = c.ccclass,
      u = c.property,
      l = function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.spriteStateArr = [], t.btnIdx = 0, t.btnContent = "", t
        }
        return i(t, e), Object.defineProperty(t.prototype, "btnUrl", {
          get: function() {
            return this.btnContent
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype.setImageContent = function(e, t) {
          var o = this;
          if (void 0 === t && (t = !0), this.spriteRemote) {
            t && (this.btnContent = e);
            var n = e;
            a.default.setImageFromURL(this.spriteRemote, e, void 0, function(i) {
              cc.log("AnswerImgButton::load image done"), "string" == typeof i && "error" == i && setTimeout(function() {
                o.btnContent == n && o.setImageContent(e, t)
              }, 100)
            })
          }
        }, t.prototype.changeStateWwithAnswer = function(e) {
          this.spriteAnsState && 0 != this.spriteStateArr.length && (this.spriteAnsState.spriteFrame = this.spriteStateArr[e ? 1 : 2], this.btnContent)
        }, t.prototype.resetStateWwithAnswer = function() {
          this.spriteAnsState && 0 != this.spriteStateArr.length && (this.spriteAnsState.spriteFrame = this.spriteStateArr[0])
        }, r([u({
          type: cc.Sprite
        })], t.prototype, "spriteAnsState", void 0), r([u({
          type: cc.SpriteFrame
        })], t.prototype, "spriteStateArr", void 0), r([u({
          type: cc.Sprite
        })], t.prototype, "spriteRemote", void 0), r([u], t.prototype, "btnIdx", void 0), r([s], t)
      }(cc.Button);
    o.AnswerImgButton = l, cc._RF.pop()
  }, {
    "../../../framework/ui/UISpriteHelper": "UISpriteHelper"
  }],
  ApiDefine: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "58b5ajlG81Nc7aS1ROqronV", "ApiDefine"), Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.ApiDefine = void 0,
      function(e) {
        e.DAILY_ONLINE_CHECK_IN = "DAILY_ONLINE_CHECK_IN", e.SET_INFO = "/setinfo", e.GET_INFO = "/getinfo", e.START_GAME = "/startgame", e.ANSWEAR_CHECK = "/AnswerCheck", e.FINISH_GAME = "/finishgame"
      }(o.ApiDefine || (o.ApiDefine = {})), cc._RF.pop()
  }, {}],
  AppModel: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "4a7eb5eS49L/5RXHaKh2QMP", "AppModel"), Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.ContentModel = o.QuestionModel = o.GameModel = o.UserModel = o.AppModel = void 0;
    var n = e("../../../framework/utils/StringUtils"),
      i = e("../../config/ioe_config");
    o.AppModel = function(e) {
      this.subjectName = e.subjectName, this.excersiseName = e.excersiseName, this.timeDoing = e.timeDoing, this.startTime = e.startTime, this.game = new a(e.game), this.start = e.start, this.examTime = e.examTime, this.timeServer = e.timeserver, this.gameDesc = e.gameDesc, this.user = new r(e.user), this.token = e.token, this.timeAuto = e.timeAuto, this.flagViewLocation = e.flagViewLocation
    };
    var r = function(e) {
      this.accountType = e.AccountType, this.accountId = e.AccountId, this.accountName = e.AccountName, this.fullName = e.FullName, this.gradeLevel = e.GradeLevel, this.round = e.round, this.level = e.Level, this.point = e.Point, this.provinName = e.provinName, this.schoolName = e.schoolName, this.className = e.className, this.school = e.school
    };
    o.UserModel = r;
    var a = function(e) {
      this.examType = e.examType, this.gameId = e.gameId, this.examKey = e.examKey, this.subject = e.Subject, this.questionArr = e.question ? e.question.map(function(e) {
        return new c(e)
      }) : null, this.answear = e.ans, this.totalPoint = e.totalPoint
    };
    o.GameModel = a;
    var c = function(e) {
      this.data = e, this.questionId = e.id, this.id = e.id, this.questionPoint = e.Point, this.questionType = e.type, this.questionContent = new s(e.content), this.questionDescription = new s(e.Description), this.answearArr = e.ans ? e.ans.map(function(e) {
        return new s(e)
      }) : null, this.tans = e.tans
    };
    o.QuestionModel = c;
    var s = function() {
      function e(e) {
        var t, o;
        this.dataType = e.dataType, this.contentType = e.type, this.content = e.content || "", this.contentId = e.contentId, this.id = e.Id, this.subjectId = e.subjectId, this.orderId = e.orderId, this.hasImage = this.contentType == i.IOE.ContentType.Image, this.hasAudio = this.contentType == i.IOE.ContentType.Audio, this.hasText = this.contentType == i.IOE.ContentType.Text && !n.default.isNullOrEmpty(this.content);
        var r = n.default.escapeRegExp("*");
        this.maxInput = null !== (o = null === (t = this.content.match(new RegExp(r, "g"))) || void 0 === t ? void 0 : t.length) && void 0 !== o ? o : 0, this.content = n.default.replaceAll(this.content, "*", "_")
      }
      return e.prototype.onInHandler = function(e) {
        cc.log(" onInHandler " + e)
      }, e
    }();
    o.ContentModel = s, cc._RF.pop()
  }, {
    "../../../framework/utils/StringUtils": "StringUtils",
    "../../config/ioe_config": "ioe_config"
  }],
  AudioContent: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "fcdb92DyqJN7L5buyCCer50", "AudioContent");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var a = e("./ContentComponent"),
      c = e("../../../../framework/ui/UIPopupManager"),
      s = e("../../../../framework/utils/ClientData"),
      u = e("../../../config/ioe_config"),
      l = e("../../answer/AnswerButton"),
      p = e("../../../../framework/ui/UIOnOffSwitcher"),
      d = e("../../../../framework/utils/StringUtils"),
      f = e("../../../../framework/audio/AudioManager"),
      h = e("../../../../framework/ui/ScrollToTop"),
      g = e("../../../../framework/zai/GlobalEvent"),
      _ = e("../../common/DienDoanVan"),
      y = cc._decorator,
      m = y.ccclass,
      v = y.property,
      b = function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.scrollViewContent = null, t.scrollViewArr = [], t.buttons = [], t.remoteSound = "", t.audioClip = null, t
        }
        return i(t, e), t.prototype.onLoad = function() {
          e.prototype.onLoad.call(this), g.default.instance.addListener(g.GlobalEventName.AUDIO_QUEST_START, this.onAudioStart, this), g.default.instance.addListener(g.GlobalEventName.AUDIO_QUEST_END, this.onAudioFinsh, this)
        }, t.prototype.onDestroy = function() {
          g.default.instance.removeListener(this)
        }, t.prototype.onAudioStart = function() {
          this.spriteReplay && this.spriteReplay.setOnOff(!0)
        }, t.prototype.onAudioFinsh = function() {
          this.spriteReplay && this.spriteReplay.setOnOff(!1)
        }, t.prototype.stopSoundIfNeed = function() {}, t.prototype.updateWithQuestion = function(e, t) {
          var o = this;
          this.node.active = this.contentType == e.questionDescription.contentType, this.node.active && (this.inputTxt = "", this.questionModel = e, this.currentQuestionNumber = t, this.questNumberLbl.string = "" + t, this.totalQuestNumberLbl && (this.totalQuestNumberLbl.string = "" + s.default.AppModel.game.questionArr.length), this.updateQuestContent(), this.node.active && (this.canClick = !0, this.updateStateButtons(!0), this.questionModel.questionType != u.IOE.QuestionType.TrueOrFalse && this.updateTxtInAllBtn(this.buttons), this.scrollViewArr.forEach(function(e) {
            e.onNewQuest()
          }), f.default.instance.pauseBgMusic(), this.remoteSound = e.questionDescription.content, this.remoteSound = this.remoteSound.replace(".MP3", ".mp3"), cc.log("audio link " + this.remoteSound), this.questionModel.questionDescription.hasAudio && (cc.log("audio link hasAudio"), f.default.instance.playAudioQuest(this.remoteSound, function(e) {
            cc.log("audioClip ", e), o.audioClip = e
          }))))
        }, t.prototype.replaySound = function() {
          cc.log("replaySound ", this.audioClip), this.audioClip && f.default.instance.playAudioQuest(this.audioClip)
        }, t.prototype.updateQuestContent = function() {
          var e = this.questionModel.questionContent.content || "";
          if (e = d.default.getContentWithUserInput(e, this.inputTxt), this.descriptionLbl) {
            var t = e,
              o = this.centerContentInBox(this.descriptionLblNoScroll, this.descriptionLbl, this.scrollViewContent, t);
            if (o && this.questionModel.questionType == u.IOE.QuestionType.DienTuVaoChoTrong) {
              var n = o.getComponent(_.default);
              n && (n.setData(t), this.dienDoanVan = n, this.dienDoanVan.getFirstEditBox().focus())
            }
          }
        }, t.prototype.parseAnswerCheckResponse = function(t, o) {
          e.prototype.parseAnswerCheckResponse.call(this, t, o), this.audioClip = null;
          var n = !1,
            i = t.data.point;
          null != i && i > 0 && (n = !0), this.updateStateButtons(!1), this.updateStateCorrectButtons(n);
          var r = s.default.AppModel.game.questionArr || [];
          this.currentQuestionNumber >= r.length && (f.default.instance.pauseBgMusic(), f.default.instance.stopAudioQuest());
          var a = cc.delayTime(u.IOE.TIME_TO_NEXT_QUEST),
            c = cc.callFunc(function() {
              g.default.instance.postEvent(g.GlobalEventName.IOE_CLIMB_NEXT_CHECKPOINT, {})
            }),
            l = cc.sequence(a, c);
          this.node.runAction(l)
        }, t.prototype.updateStateButtons = function(e) {
          for (var t = 0; t < this.buttons.length; t++) {
            var o = this.buttons[t];
            o.enabled = e, o.interactable = e, o.resetStateWwithAnswer(), e && (o.node.opacity = 255)
          }
        }, t.prototype.updateStateCorrectButtons = function(e) {
          for (var t = 0; t < this.buttons.length; t++) {
            var o = this.buttons[t];
            this.idBtnClick == o.btnIdx && (cc.log("updateStateCorrectButtons this.idBtnClick=" + this.idBtnClick + " btnIdx=" + o.btnIdx + " to  " + !e), o.changeStateWwithAnswer(e))
          }
        }, t.prototype.onKeyDown = function(e) {
          if (0 != this.node.active) switch (cc.log("press " + e.keyCode, this.node), e.keyCode) {
            case cc.macro.KEY.enter:
              this.onKeyEnterPress()
          }
        }, t.prototype.onEditReturn = function() {
          console.log("onEditReturn"), this.onKeyEnterPress()
        }, t.prototype.onEditTextChange = function(e) {
          console.log("onEditTextChange", e), this.inputTxt = e
        }, t.prototype.onKeyEnterPress = function() {
          if (this.node.active && this.questionModel.questionType == u.IOE.QuestionType.DienTuVaoChoTrong && this.canClick && !c.default.instance.isHavePopup)
            if (0 != this.validateInput(this.questionModel.questionContent)) {
              var e = this.inputTxt;
              this.callApiAnswer(e)
            } else c.default.instance.showPopup("Vui l\xf2ng nh\u1eadp \u0111\u1ee7 s\u1ed1 k\xfd t\u1ef1")
        }, r([v({
          type: cc.RichText
        })], t.prototype, "askLbl", void 0), r([v({
          type: cc.RichText
        })], t.prototype, "descriptionLbl", void 0), r([v({
          type: cc.RichText
        })], t.prototype, "descriptionLblNoScroll", void 0), r([v({
          type: cc.Label
        })], t.prototype, "questNumberLbl", void 0), r([v({
          type: cc.Label
        })], t.prototype, "totalQuestNumberLbl", void 0), r([v({
          type: cc.Sprite
        })], t.prototype, "spriteImage", void 0), r([v({
          type: cc.SpriteFrame
        })], t.prototype, "spriteDefault", void 0), r([v(cc.ScrollView)], t.prototype, "scrollViewContent", void 0), r([v({
          type: h.default
        })], t.prototype, "scrollViewArr", void 0), r([v({
          type: l.AnswerButton
        })], t.prototype, "buttons", void 0), r([v({
          type: p.default
        })], t.prototype, "spriteReplay", void 0), r([m], t)
      }(a.default);
    o.default = b, cc._RF.pop()
  }, {
    "../../../../framework/audio/AudioManager": "AudioManager",
    "../../../../framework/ui/ScrollToTop": "ScrollToTop",
    "../../../../framework/ui/UIOnOffSwitcher": "UIOnOffSwitcher",
    "../../../../framework/ui/UIPopupManager": "UIPopupManager",
    "../../../../framework/utils/ClientData": "ClientData",
    "../../../../framework/utils/StringUtils": "StringUtils",
    "../../../../framework/zai/GlobalEvent": "GlobalEvent",
    "../../../config/ioe_config": "ioe_config",
    "../../answer/AnswerButton": "AnswerButton",
    "../../common/DienDoanVan": "DienDoanVan",
    "./ContentComponent": "ContentComponent"
  }],
  AudioControl: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "8bbe8GuUIlCrKIwaeV1H7tj", "AudioControl");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.eAudioType = void 0;
    var a, c = e("../ui/UIOnOffSwitcher"),
      s = e("./AudioManager"),
      u = cc._decorator,
      l = u.ccclass,
      p = u.property;
    (function(e) {
      e[e.Music = 0] = "Music", e[e.SFX = 1] = "SFX", e[e.Vibrate = 2] = "Vibrate"
    })(a = o.eAudioType || (o.eAudioType = {}));
    var d = function(e) {
      function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.controlType = a.Music, t
      }
      return i(t, e), t.prototype.onEnable = function() {
        e.prototype.onEnable.call(this), this.controlType == a.Music ? this.setOnOff(s.default.instance.musicVolume > 0) : this.controlType == a.SFX ? this.setOnOff(s.default.instance.sfxVolume > 0) : this.controlType == a.Vibrate && this.setOnOff(s.default.instance.vibrate)
      }, t.prototype.setOnOff = function(t) {
        e.prototype.setOnOff.call(this, t), this.controlType == a.Music ? s.default.instance.musicVolume = t ? 1 : 0 : this.controlType == a.SFX ? s.default.instance.sfxVolume = t ? 1 : 0 : this.controlType == a.Vibrate && (s.default.instance.vibrate = t)
      }, r([p({
        type: cc.Enum(a)
      })], t.prototype, "controlType", void 0), r([l], t)
    }(c.default);
    o.default = d, cc._RF.pop()
  }, {
    "../ui/UIOnOffSwitcher": "UIOnOffSwitcher",
    "./AudioManager": "AudioManager"
  }],
  AudioManager: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "3e147cjLKtATKtTuEJwNTMA", "AudioManager");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var a = e("../utils/ClientData"),
      c = e("../zai/GlobalEvent"),
      s = cc._decorator,
      u = s.ccclass,
      l = (s.property, function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t._pauseMusic = !1, t._currentMusicClip = null, t._currentMusicUrl = null, t._currentAudioQuestClip = null, t._currentAudioQuestUrl = null, t._musicVolume = 1, t._sfxVolume = 1, t._vibrate = !0, t._audioCurrentTimeMap = new Map, t
        }
        var o;
        return i(t, e), o = t, Object.defineProperty(t, "instance", {
          get: function() {
            var e = cc.Canvas.instance.node.getComponent(o);
            return e || (e = cc.Canvas.instance.node.addComponent(o)), e
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "musicVolume", {
          get: function() {
            return this._musicVolume
          },
          set: function(e) {
            this._musicVolume = e, cc.log("musicVolume ", this._musicVolume), a.default.setNumber("music", e), this._validMusic() && cc.audioEngine.setVolume(this._currentMusicClip, .75 * e)
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "sfxVolume", {
          get: function() {
            return this._sfxVolume
          },
          set: function(e) {
            this._sfxVolume = e, a.default.setNumber("sfx", e)
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "vibrate", {
          get: function() {
            return this._vibrate
          },
          set: function(e) {
            this._vibrate = e, a.default.setBoolean("vibrate", e)
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype.onLoad = function() {
          if (this.node != cc.Canvas.instance.node) throw this.constructor.name + " must be a Canvas's comp";
          this._musicVolume = a.default.getNumber("music", 1), this._sfxVolume = a.default.getNumber("sfx", 1)
        }, t.prototype.playSfx = function(e, t) {
          if (void 0 === t && (t = 1), !(this.sfxVolume <= 0)) {
            var o = this;
            cc.loader.loadRes(e, cc.AudioClip, function(e, n) {
              !e && n && cc.audioEngine.play(n, !1, o.sfxVolume * t)
            })
          }
        }, t.prototype.pauseBgMusic = function() {
          this.pauseMusic()
        }, t.prototype.pauseMusic = function() {
          if (this._pauseMusic = !0, this._validMusic()) {
            var e = this._currentMusicUrl,
              t = this._currentMusicClip;
            this._audioCurrentTimeMap.set(e, cc.audioEngine.getCurrentTime(t)), cc.audioEngine.pause(t)
          }
        }, t.prototype.resumeMusic = function() {
          if (this._pauseMusic && (this._pauseMusic = !1, this._validMusic())) {
            var e = this._currentMusicClip;
            cc.audioEngine.resume(e)
          }
        }, t.prototype._validMusic = function() {
          return null != this._currentMusicClip && this._currentMusicClip >= 0
        }, t.prototype.playMusic = function(e) {
          if (this._currentMusicUrl != e) {
            this._currentMusicUrl = e;
            var t = this;
            cc.loader.loadRes(e, cc.AudioClip, function(o, n) {
              t._currentMusicUrl == e && (t.stopMusic(), t._currentMusicClip = cc.audioEngine.play(n, !0, t.musicVolume), t._audioCurrentTimeMap.has(t._currentMusicUrl) && cc.audioEngine.setCurrentTime(t._currentMusicClip, t._audioCurrentTimeMap.get(t._currentMusicUrl)), t._pauseMusic && t.pauseMusic())
            })
          }
        }, t.prototype.playAudioQuest = function(e, t, n, i) {
          var r = this;
          if (void 0 === n && (n = -1), void 0 === i && (i = !1), this._currentAudioQuestClip && cc.audioEngine.stop(this._currentAudioQuestClip), e instanceof cc.AudioClip) cc.log("replay......", e), this._currentAudioQuestClip = cc.audioEngine.play(e, i, n), t && t(e), this.onAudioStarted(), cc.audioEngine.setFinishCallback(this._currentAudioQuestClip, this.onAudioEnded);
          else {
            var a = this;
            this._currentAudioQuestUrl = e, cc.assetManager.loadRemote(e, function(c, s) {
              console.log("playAudioQuest:loadRemote repsone ", s), c ? o.instance.playAudioQuest(e, t, n, i) : a._currentAudioQuestUrl == e && (cc.audioEngine.stop(a._currentAudioQuestClip), a._currentAudioQuestClip = cc.audioEngine.play(s, i, n), t && t(s), r.onAudioStarted(), cc.audioEngine.setFinishCallback(a._currentAudioQuestClip, r.onAudioEnded))
            })
          }
        }, t.prototype.stopAudioQuest = function() {
          this._currentAudioQuestClip && (cc.audioEngine.stop(this._currentAudioQuestClip), this._currentAudioQuestClip = null)
        }, t.prototype.onAudioStarted = function() {
          cc.log("sound start"), c.default.instance.postEvent(c.GlobalEventName.AUDIO_QUEST_START, {})
        }, t.prototype.onAudioEnded = function() {
          cc.log("sound end"), c.default.instance.postEvent(c.GlobalEventName.AUDIO_QUEST_END, {})
        }, t.prototype.update = function() {}, t.prototype.stopMusic = function() {
          this._currentMusicClip && cc.audioEngine.stop(this._currentMusicClip)
        }, o = r([u], t)
      }(cc.Component));
    o.default = l, cc._RF.pop()
  }, {
    "../utils/ClientData": "ClientData",
    "../zai/GlobalEvent": "GlobalEvent"
  }],
  AuthenManager: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "7f095HjPvVMNqSIAcOO9Q7C", "AuthenManager");
    var n, i = this && this.__extends || (n = function(e, t) {
      return (n = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, t) {
          e.__proto__ = t
        } || function(e, t) {
          for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
        })(e, t)
    }, function(e, t) {
      function o() {
        this.constructor = e
      }
      n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
    });
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.eAuthenErrorCode = o.eAuthenMethod = void 0;
    var r, a = e("../config/ConfigLoader"),
      c = e("../network/HttpUtils"),
      s = e("../ui/UIPopup"),
      u = e("../ui/UIPopupManager"),
      l = e("../ui/UIScreenManager"),
      p = e("../utils/ClientData"),
      d = e("../utils/PlatformUtils"),
      f = e("../utils/StringUtils"),
      h = e("../utils/Utils"),
      g = e("../network/BOCmdDefine"),
      _ = e("../network/Connector"),
      y = e("../ui/UIWindowManager"),
      m = e("./UsernamePasswordLogin"),
      v = e("../ui/UIWaitingLayout"),
      b = cc._decorator;
    b.ccclass, b.property,
      function(e) {
        e.Username = "Username", e.Email = "Email", e.Phone = "Phone", e.Guest = "Guest", e.FacebookSDK = "FacebookSDK", e.FacebookInstant = "FacebookInstant", e.GooglePlayServices = "GooglePlayServices"
      }(o.eAuthenMethod || (o.eAuthenMethod = {})),
      function(e) {
        e[e.MAINTENANCE = 101] = "MAINTENANCE", e[e.INVALID_CLIENT_VERSION = 102] = "INVALID_CLIENT_VERSION", e[e.INVALID_ACCESS_TOKEN = 103] = "INVALID_ACCESS_TOKEN", e[e.INTERNAL_ERROR = 104] = "INTERNAL_ERROR"
      }(r = o.eAuthenErrorCode || (o.eAuthenErrorCode = {}));
    var C = function(e) {
      function t() {
        var t = e.call(this) || this;
        return t._token = null, t._taskCb = null, t.loggedIn = !1, t.loggingIn = !1, t._reconnecting = !1, t
      }
      return i(t, e), Object.defineProperty(t, "instance", {
        get: function() {
          return null === t.m_instance && (t.m_instance = new t), t.m_instance
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "token", {
        get: function() {
          if (!this._token) {
            var e = p.default.getString(p.ClientDataKey.ACCESS_TOKEN, "");
            if ("" != e) try {
              var t = JSON.parse(e);
              this._token = t.token
            } catch (b) {}
          }
          return this._token
        },
        set: function(e) {
          this._token = e, p.default.setString(p.ClientDataKey.ACCESS_TOKEN, e ? JSON.stringify({
            token: e
          }) : "")
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "isLoggedIn", {
        get: function() {
          return this.loggedIn
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "isLoggingIn", {
        get: function() {
          return this.loggingIn
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.onConnectionLost = function(e) {
        e != _.eDisconnectReason.LOGOUT && e != _.eDisconnectReason.UNEXPECTED && e != _.eDisconnectReason.KICK && e != _.eDisconnectReason.BAN || (l.default.instance.popToRootScreen(), u.default.instance.removeAllPopups(), y.default.instance.removeAllWindows()), this.loggedIn = !1, this.loggingIn = !1, this.emit(t.EVENT_LOGIN, !1), _.default.instance.disconnect(e)
      }, t.prototype.reconnect = function() {
        t.instance.isLoggedIn || t.instance.isLoggingIn || _.default.instance.isConnected || _.default.instance.isConnecting || !this.token || this.reconnecting || (cc.log("execute reconnect"), this.tryReconnect())
      }, t.prototype.onAuthen = function(e) {
        this.loggedIn = !0, v.default.hideWaiting("authen"), this._taskCb && this._taskCb(!0, e), this._taskCb = null, this.emit(t.EVENT_LOGIN, !0)
      }, t.prototype.onLogout = function(e) {
        this.token = null, _.default.instance.disconnect(_.eDisconnectReason.LOGOUT), this.loggedIn = !1, this.loggingIn = !1, v.default.hideWaiting("logout"), this._taskCb && this._taskCb(!0, e), this._taskCb = null, this.emit(t.EVENT_LOGIN, !1)
      }, t.prototype.onAuthenError = function(e) {
        v.default.hideWaiting("authen"), _.default.instance.disconnect(_.eDisconnectReason.LOGIN_ERROR), this.loggedIn = !1, this.loggingIn = !1, this._taskCb && this._taskCb(!1, e), this._taskCb = null, this.emit(t.EVENT_LOGIN, !1)
      }, t.prototype.authen = function(e, t) {
        void 0 === t && (t = null), this.loggingIn = !0, this._taskCb = t, v.default.showWaiting("authen")
      }, t.prototype.logout = function() {
        t.instance.isLoggedIn && v.default.showWaiting("logout")
      }, Object.defineProperty(t.prototype, "reconnecting", {
        get: function() {
          return this._reconnecting
        },
        set: function(e) {
          this._reconnecting != e && (this._reconnecting = e, e ? v.default.showWaiting("reconnect", a.default.CFS("msg_reconnecting"), 0) : v.default.hideWaiting("reconnect"))
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.tryReconnect = function() {
        if (this.token) {
          var e = this.token;
          this.reconnecting = !0, this.connect(e)
        }
      }, t.prototype.checkForceUpdate = function() {
        return cc.sys.os == cc.sys.OS_IOS && f.default.versionCompare(d.default.appVersion, p.default.getString(p.ClientDataKey.FORCE_UPDATE_VERSION_IOS, "0.0"), null) < 0 ? (u.default.instance.showSystemDialog(a.default.CFS("msg_new_ios_version"), [s.PopupAction.make(a.default.CFS("act_update"), function() {}, !1)]), !1) : !(cc.sys.os == cc.sys.OS_ANDROID && f.default.versionCompare(d.default.appVersion, p.default.getString(p.ClientDataKey.FORCE_UPDATE_VERSION_ANDROID, "0.0"), null) < 0 && (u.default.instance.showSystemDialog(a.default.CFS("msg_new_android_version"), [s.PopupAction.make(a.default.CFS("act_update"), function() {}, !1)]), 1))
      }, t.prototype.connect = function(e, o) {
        void 0 === o && (o = null);
        var n = this;
        _.default.instance.isConnected || _.default.instance.isConnecting || t.instance.isLoggedIn || t.instance.isLoggingIn || (cc.log("connect socket"), _.default.instance.connect(function(i, c) {
          i ? (cc.log("authen session"), t.instance.authen(e, function(i, c) {
            i ? (n.reconnecting = !1, t.instance.token != e && (t.instance.token = e)) : (n.token = null, o && o(!1, c), n.reconnecting || (c && c.errorCode ? c.errorCode == r.MAINTENANCE ? s.default.show(a.default.CFS("msg_maintenance")) : c.errorCode == r.INVALID_CLIENT_VERSION ? s.default.show(a.default.CFS("msg_invalid_client_version")) : c.errorCode == r.INVALID_ACCESS_TOKEN ? s.default.show(a.default.CFS("msg_invalid_access_token")) : c.errorCode == r.INTERNAL_ERROR ? s.default.show(a.default.CFS("msg_internal_server_error")) : s.default.show("Error authen " + c.errorCode) : s.default.show((c && c.errorCode, c.errorCode))), n.reconnecting = !1)
          })) : o && o(!1, c)
        }))
      }, t.prototype.doAuthen = function(e, t) {
        if (void 0 === t && (t = null), _.default.instance.isConnected && _.default.instance.disconnect(_.eDisconnectReason.LOGIN_ERROR), !_.default.instance.isConnected) {
          var o = this;
          e.bundle = d.default.getBundleId(), c.default.postApi(g.BOCmdDefine.LOGIN, e, function(e) {
            if (e.success && e.data) {
              var n = e.data;
              o.connect(n, t)
            } else h.default.handleError(e), t && t(!1, e)
          })
        }
      }, t.prototype.showAuthen = function() {
        u.default.instance.has(m.default)
      }, t.prototype.showCreateName = function() {
        cc.log("chuc nang ko lam`")
      }, t.EVENT_LOGIN = "EVENT_LOGIN", t.m_instance = null, t
    }(cc.EventTarget);
    o.default = C, cc._RF.pop()
  }, {
    "../config/ConfigLoader": "ConfigLoader",
    "../network/BOCmdDefine": "BOCmdDefine",
    "../network/Connector": "Connector",
    "../network/HttpUtils": "HttpUtils",
    "../ui/UIPopup": "UIPopup",
    "../ui/UIPopupManager": "UIPopupManager",
    "../ui/UIScreenManager": "UIScreenManager",
    "../ui/UIWaitingLayout": "UIWaitingLayout",
    "../ui/UIWindowManager": "UIWindowManager",
    "../utils/ClientData": "ClientData",
    "../utils/PlatformUtils": "PlatformUtils",
    "../utils/StringUtils": "StringUtils",
    "../utils/Utils": "Utils",
    "./UsernamePasswordLogin": "UsernamePasswordLogin"
  }],
  BOCmdDefine: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "c0bcbb4X7VIiqOkf9MnhhS9", "BOCmdDefine"), Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.BOCmdDefine = void 0,
      function(e) {
        e.CREATE_NAME = "CREATE_NAME", e.UPDATE_PHONE = "UPDATE_PHONE", e.CREATE_PHONE = "CREATE_PHONE", e.CHANGE_PASSWORD = "CHANGE_PASSWORD", e.RESET_PASSWORD = "RESET_PASSWORD", e.REMOVE_PHONE = "REMOVE_PHONE", e.CREATE_REF_CODE = "CREATE_REF_CODE", e.LOGIN = "LOGIN", e.VERIFY_EMAIL = "VERIFY_EMAIL", e.REGISTER = "REGISTER", e.RESEND_EMAIL = "RESEND_EMAIL", e.FORGOT_PASSWORD = "FORGOT_PASSWORD", e.LINK_SOCIAL = "LINK_SOCIAL", e.CHAT = "CHAT", e.CHAT_HISTORY = "CHAT_HISTORY", e.INTERACTION = "INTERACTION", e.TRANSFER = "TRANSFER", e.TAKE_FROM_BOX = "TAKE_FROM_BOX", e.SAVE_TO_BOX = "SAVE_TO_BOX", e.USER_FROM_NAME = "USER_FROM_NAME", e.GET_CAPTCHA = "GET_CAPTCHA", e.MAIL_NEW = "MAIL_NEW", e.MAIL_DELETE = "MAIL_DELETE", e.MAIL_READ = "MAIL_READ", e.USER_BALANCE_HISTORY = "USER_BALANCE_HISTORY", e.TELEGRAM_ID = "TELEGRAM_ID", e.UPDATE_TELEGRAM_ID = "UPDATE_TELEGRAM_ID", e.START_UP = "START_UP"
      }(o.BOCmdDefine || (o.BOCmdDefine = {})), cc._RF.pop()
  }, {}],
  BOError: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "1398cerqLpJGrJaa6cFQd6c", "BOError"), Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var n = e("./eErrorCode"),
      i = function() {
        function e() {
          this.code = n.eErrorCode.SUCCESS, this.msg = ""
        }
        return e.INVALID_PARAMS = function(t) {
          return e.create(n.eErrorCode.INVALID_PARAMS, t)
        }, e.VALIDATION_FAIL = function(t) {
          return e.create(n.eErrorCode.VALIDATION_FAIL, t)
        }, e.INTERNAL_ERROR = function(t) {
          return e.create(n.eErrorCode.INTERNAL_ERROR, t)
        }, e.create = function(t, o) {
          var n = new e;
          return n.code = t, n.msg = o, n
        }, e.prototype.getCode = function() {
          return this.code
        }, e.prototype.getMsg = function() {
          return this.msg
        }, e.fromJSON = function(t) {
          var o = new e;
          return null != t.code && (o.code = t.code), null != t.message && (o.msg = t.message), o
        }, e.SUCCESS = e.create(n.eErrorCode.SUCCESS, ""), e
      }();
    o.default = i, cc._RF.pop()
  }, {
    "./eErrorCode": "eErrorCode"
  }],
  BaseConfig: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "52118TWxgNAs5i5ZM14yNBK", "BaseConfig"), Object.defineProperty(o, "__esModule", {
      value: !0
    });
    o.default = function() {}, cc._RF.pop()
  }, {}],
  BaseData: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "61b15aPA9VByJ4PzFoA0Wtx", "BaseData");
    var n, i = this && this.__extends || (n = function(e, t) {
      return (n = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, t) {
          e.__proto__ = t
        } || function(e, t) {
          for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
        })(e, t)
    }, function(e, t) {
      function o() {
        this.constructor = e
      }
      n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
    });
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var r = function(e) {
      function t(o, n, i) {
        void 0 === i && (i = !0);
        var r = e.call(this) || this;
        return r._key = "", r._parent = null, r._parent = o, r._key = o ? o._key + "." + r.getClazzName() + (null != n && null != n ? "_" + n : "") : r.getClazzName(), i && t.dataCacheByKey.set(r._key, r), r
      }
      return i(t, e), t.prototype.cast = function(e, t) {
        this[e] = t, cc.game.emit(this._key + "." + e, t)
      }, Object.defineProperty(t.prototype, "key", {
        get: function() {
          return this._key
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "parent", {
        get: function() {
          return this._parent
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.getParent = function() {
        return this._parent
      }, t.dataCacheByKey = new Map, t
    }(cc.EventTarget);
    o.default = r, cc._RF.pop()
  }, {}],
  BaseFeatureButton: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "18793EFfBxAapXekBIAuCMV", "BaseFeatureButton");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.eGamIdType = o.GameType = void 0;
    var a = e("./UIFeatureNavigator"),
      c = cc._decorator,
      s = c.ccclass;
    c.property,
      function(e) {
        e[e.MINI_GAME = 1] = "MINI_GAME", e[e.KART_GAME = 2] = "KART_GAME"
      }(o.GameType || (o.GameType = {})),
      function(e) {
        e[e.NONE = 0] = "NONE", e[e.GAME_1 = 1] = "GAME_1", e[e.GAME_2 = 2] = "GAME_2", e[e.GAME_3 = 3] = "GAME_3"
      }(o.eGamIdType || (o.eGamIdType = {}));
    var u = function(e) {
      function t() {
        return null !== e && e.apply(this, arguments) || this
      }
      return i(t, e), t.prototype.onFeatureStart = function() {
        this.onStartGame ? this.onStartGame() : e.prototype.onFeatureStart.call(this)
      }, t.prototype.onDestroy = function() {}, r([s], t)
    }(a.default);
    o.default = u, cc._RF.pop()
  }, {
    "./UIFeatureNavigator": "UIFeatureNavigator"
  }],
  BaseImageHelper: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "bb133v7KtdI+LP4oQHhAShE", "BaseImageHelper");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var a = e("./UIImageLoader"),
      c = cc._decorator,
      s = c.ccclass,
      u = c.property,
      l = function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.loadingUrl = "", t.completeCallback = null, t
        }
        return i(t, e), t.prototype.onEnable = function() {
          this.addPendingImageIfNeeded()
        }, t.prototype.onDisable = function() {
          this.removePendingImageIfNeeded()
        }, t.prototype.addPendingImageIfNeeded = function() {
          this.loadingUrl && this.loadingUrl.length && a.default.instance.addPendingImage(this, this.loadingUrl)
        }, t.prototype.removePendingImageIfNeeded = function() {
          this.loadingUrl && this.loadingUrl.length && a.default.instance.removePendingImage(this), this.loadingUrl = ""
        }, r([u], t.prototype, "loadingUrl", void 0), r([s], t)
      }(cc.Component);
    o.default = l, cc._RF.pop()
  }, {
    "./UIImageLoader": "UIImageLoader"
  }],
  BaseReceive: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "f523cnvvwNJBInvLJOfa/9o", "BaseReceive"), Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var n = e("./BOError"),
      i = e("./eErrorCode"),
      r = e("../utils/PlatformUtils"),
      a = function() {
        function e() {
          this._params = null, this._error = n.default.SUCCESS
        }
        return Object.defineProperty(e.prototype, "cmd", {
          get: function() {
            return this._cmd
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(e.prototype, "params", {
          get: function() {
            return this._params
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(e.prototype, "error", {
          get: function() {
            return this._error
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(e.prototype, "hasError", {
          get: function() {
            return this._error.getCode() != i.eErrorCode.SUCCESS
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(e.prototype, "success", {
          get: function() {
            return this._error.getCode() == i.eErrorCode.SUCCESS
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(e.prototype, "hasValidation", {
          get: function() {
            return this._error.getCode() == i.eErrorCode.VALIDATION_FAIL
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(e.prototype, "validationId", {
          get: function() {
            return this._error.getValidationId()
          },
          enumerable: !1,
          configurable: !0
        }), e.prototype.parse = function(e, t) {
          this._params = t, this._cmd = e, t.get("error") ? (this._error = n.default.fromSFSObject(t.get("error")), this._error.getCode() == i.eErrorCode.VALIDATION_FAIL ? this.handleValidation(this._error.getValidationId()) : r.default.isTestMode) : (this.unpack(t), this.execute())
        }, e.prototype.unpack = function() {}, e.prototype.execute = function() {}, e.prototype.handleValidation = function() {}, e
      }();
    o.default = a, cc._RF.pop()
  }, {
    "../utils/PlatformUtils": "PlatformUtils",
    "./BOError": "BOError",
    "./eErrorCode": "eErrorCode"
  }],
  BaseRefConfig: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "9086axPkFpLWoyYc4Eo6853", "BaseRefConfig");
    var n, i = this && this.__extends || (n = function(e, t) {
      return (n = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, t) {
          e.__proto__ = t
        } || function(e, t) {
          for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
        })(e, t)
    }, function(e, t) {
      function o() {
        this.constructor = e
      }
      n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
    });
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var r = function(e) {
      function t() {
        return null !== e && e.apply(this, arguments) || this
      }
      return i(t, e), t.prototype.parseConfig = function(e) {
        for (var t = 0, o = Object.keys(e); t < o.length; t++) {
          var n = o[t];
          this[n] = e[n]
        }
      }, t
    }(e("./BaseConfig").default);
    o.default = r, cc._RF.pop()
  }, {
    "./BaseConfig": "BaseConfig"
  }],
  BaseSend: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "09534Cyi8dDy4enBcYrNGR6", "BaseSend"), Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var n = function() {
      function e() {}
      return e.prototype.toSFSObject = function() {
        return new SFS2X.SFSObject
      }, e.prototype.send = function() {
        window.jtdConnector.send(this)
      }, e
    }();
    o.default = n, cc._RF.pop()
  }, {}],
  BaseUserModuleData: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "28f5agDJKhPVqxMnI46nKZy", "BaseUserModuleData");
    var n, i = this && this.__extends || (n = function(e, t) {
      return (n = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, t) {
          e.__proto__ = t
        } || function(e, t) {
          for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
        })(e, t)
    }, function(e, t) {
      function o() {
        this.constructor = e
      }
      n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
    });
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var r = function(e) {
      function t() {
        return null !== e && e.apply(this, arguments) || this
      }
      return i(t, e), t.prototype.update = function() {}, t
    }(e("./BaseData").default);
    o.default = r, cc._RF.pop()
  }, {
    "./BaseData": "BaseData"
  }],
  BoxConfig: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "b4f511e9dhAsb4Vddj0aB8f", "BoxConfig");
    var n, i = this && this.__extends || (n = function(e, t) {
      return (n = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, t) {
          e.__proto__ = t
        } || function(e, t) {
          for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
        })(e, t)
    }, function(e, t) {
      function o() {
        this.constructor = e
      }
      n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
    });
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.OneSignalConfig = o.FacebookConfig = void 0;
    var r = e("./BaseConfig"),
      a = function() {
        function e() {}
        return e.prototype.getPlainString = function() {
          var e = {
            url_scheme: this.url_scheme,
            facebook_id: this.facebook_id
          };
          return JSON.stringify(e)
        }, e.prototype.parseConfig = function(e) {
          this.url_scheme = e.url_scheme, this.facebook_id = e.facebook_id
        }, e
      }();
    o.FacebookConfig = a;
    var c = function() {
      function e() {}
      return e.prototype.getPlainString = function() {
        var e = {
          sound: this.sound,
          vibrate: this.vibrate,
          project_number: this.project_number,
          appId: this.appId
        };
        return JSON.stringify(e)
      }, e.prototype.parseConfig = function(e) {
        this.sound = e.sound, this.vibrate = e.vibrate, this.project_number = e.project_number, this.appId = e.appId
      }, e
    }();
    o.OneSignalConfig = c;
    var s = function(e) {
      function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.Facebook = new a, t.OneSignal = new c, t
      }
      return i(t, e), t.prototype.parseConfig = function(e) {
        var t = null;
        if (cc.sys.isMobile && cc.sys.isNative) {
          var o = e[PlatformUtils.getBundleId()];
          o || (o = e.default), o && (cc.sys.os == cc.sys.OS_ANDROID ? t = o.android : cc.sys.os == cc.sys.OS_IOS && (t = o.ios))
        }
        if (t) {
          try {
            this.Facebook.parseConfig(t.Facebook)
          } catch (n) {}
          try {
            this.OneSignal.parseConfig(t.OneSignal)
          } catch (n) {}
        }
      }, t
    }(r.default);
    o.default = s, cc._RF.pop()
  }, {
    "./BaseConfig": "BaseConfig"
  }],
  CheckPoint: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "1331fmcx3JMBJMT4Ehw+g9T", "CheckPoint");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.CheckPoint = void 0;
    var a = e("../../../framework/zai/GlobalEvent"),
      c = e("../../config/ioe_config"),
      s = cc._decorator,
      u = s.ccclass,
      l = s.property,
      p = function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.nCheckPoints = [], t.veloc = cc.v2(0, 0), t.speed = 550, t.curIdx = 0, t.isGameRun = !1, t.gameEnd = !1, t
        }
        return i(t, e), t.prototype.onLoad = function() {
          this.hideAll(), this.curIdx = 0, this.curPoint = this.nCheckPoints[this.curIdx], this.curPoint.active = !0, this.curPoint.setPosition(new cc.Vec3(456, 75, 0)), cc.Vec2.subtract(this.veloc, this.startPoint, this.endPoint), this.veloc = this.veloc.normalize(), console.log("this.veloc ", this.veloc), a.default.instance.addListener(a.GlobalEventName.IOE_CLIMB_NEXT_CHECKPOINT, this.resumeMoving, this)
        }, t.prototype.resumeMoving = function() {
          this.beginPlay()
        }, t.prototype.onDestroy = function() {
          a.default.instance.removeListener(this)
        }, t.prototype.hideAll = function() {
          for (var e = 0; e < this.nCheckPoints.length; e++) this.nCheckPoints[e].active = !1
        }, t.prototype.hideIfNotInScreen = function() {
          for (var e = 0; e < this.nCheckPoints.length; e++) {
            var t = this.nCheckPoints[e];
            t.active && t.x < -Math.max(c.IOE.GAME_VIEW.x / 2 + 400, cc.view.getVisibleOrigin().x / 2) && (t.active = !1)
          }
        }, t.prototype.moveAllVisibleCheckPoint = function(e) {
          for (var t = 0; t < this.nCheckPoints.length; t++) {
            var o = this.nCheckPoints[t];
            o.active && (o.x += this.veloc.x * e * this.speed, o.y += this.veloc.y * e * this.speed)
          }
        }, t.prototype.beginPlay = function() {
          this.isGameRun = !0, cc.log("1111 beginPlay")
        }, t.prototype.endPlay = function() {
          this.isGameRun = !1, this.gameEnd = !0
        }, t.prototype.showFanfisifanOnly = function() {
          var e = this.nCheckPoints[this.nCheckPoints.length - 1];
          e.active = !0, e.setPosition(new cc.Vec3(this.fansipanPos.x, this.fansipanPos.y, 0))
        }, t.prototype.update = function(e) {
          this.isGameRun && !this.gameEnd && (this.hidePointIfNeed(), this.moveAllVisibleCheckPoint(e), this.hideIfNotInScreen())
        }, t.prototype.hidePointIfNeed = function() {
          this.curPoint.x < this.startPoint.x && (this.curIdx >= this.nCheckPoints.length - 1 ? (this.isGameRun = !1, console.log("fansifang checkpoint  pass"), a.default.instance.postEvent(a.GlobalEventName.IOE_CLIMB_TO_FANSIPAN, {})) : (this.isGameRun = !1, cc.log("showNextPoint..................."), this.showNextPoint()))
        }, t.prototype.showNextPoint = function() {
          if (this.curIdx++, this.curIdx == this.nCheckPoints.length) return cc.log("fansipan..................."), void setTimeout(function() {
            a.default.instance.postEvent(a.GlobalEventName.IOE_CALL_ENDGAME, {})
          }, 1e3 * c.IOE.TIME_TO_NEXT_QUEST);
          this.curIdx = Math.min(this.curIdx, this.nCheckPoints.length - 1), this.curPoint = this.nCheckPoints[this.curIdx], this.curPoint.active = !0, this.curPoint.setPosition(this.endPoint.x, this.endPoint.y), this.isGameRun = !1, a.default.instance.postEvent(a.GlobalEventName.IOE_SHOW_QUEST, {})
        }, r([l({
          type: cc.Node
        })], t.prototype, "nCheckPoints", void 0), r([l({
          type: cc.Vec2
        })], t.prototype, "startPoint", void 0), r([l({
          type: cc.Vec2
        })], t.prototype, "endPoint", void 0), r([l({
          type: cc.Vec2
        })], t.prototype, "fansipanPos", void 0), r([u], t)
      }(cc.Component);
    o.CheckPoint = p, cc._RF.pop()
  }, {
    "../../../framework/zai/GlobalEvent": "GlobalEvent",
    "../../config/ioe_config": "ioe_config"
  }],
  ClientData: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "8cebcaUbYNC8KQCTR4m3aS9", "ClientData"), Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.SpinePlayer = o.ClientDataKey = void 0;
    var n, i = e("../config/eLocale"),
      r = e("../ui/ControlEvent"),
      a = e("../zai/GlobalEvent");
    (function(e) {
      e.GAME_NAME = "LEO_NUI", e.KEY_ENCRYPT = "BiToNe_sEa_2234", e.GUEST_ID = "_guest_id", e.DEVICE_ID = "_device_id", e.PASSWORD = "_password", e.USER_ID = "_user_id", e.OPEN_ID = "_open_id", e.USER_NAME = "_user_name", e.SESSION_KEY = "_session_key", e.SESSION_TOKEN = "session_token", e.ACCESS_TOKEN = "_access_token", e.SAVE_TOKEN = "SAVE_TOKEN", e.OAUTHEN_CODE = "_oauth_code", e.LOGIN_METHOD = "login_method", e.LOCALE = "LOCALE", e.FORCE_UPDATE_VERSION_IOS = "FORCE_UPDATE_VERSION_IOS", e.FORCE_UPDATE_VERSION_ANDROID = "FORCE_UPDATE_VERSION_ANDROID"
    })(n = o.ClientDataKey || (o.ClientDataKey = {}));
    var c = function() {
      function e() {}
      return e.PlayerMeId = 1, e.TimeFastRunWhenAnswerInCorrect = 2, e
    }();
    o.SpinePlayer = c;
    var s = function() {
      function e() {}
      return Object.defineProperty(e, "locale", {
        get: function() {
          return this._locale
        },
        set: function(t) {
          this._locale = t, e.setNumber(n.LOCALE, t), cc.game.emit(r.default.LocaleChanged)
        },
        enumerable: !1,
        configurable: !0
      }), e.GetSetting = function(e, t) {
        var o = cc.sys.localStorage.getItem(n.GAME_NAME + e);
        return null == o ? t : o
      }, e.SetSetting = function(e, t) {
        cc.sys.localStorage.setItem(n.GAME_NAME + e, t)
      }, e.getString = function(e, t) {
        var o = cc.sys.localStorage.getItem(n.GAME_NAME + e);
        return null == o ? t : o
      }, e.setString = function(e, t) {
        cc.sys.localStorage.setItem(n.GAME_NAME + e, t)
      }, e.getNumber = function(e, t) {
        var o = cc.sys.localStorage.getItem(n.GAME_NAME + e);
        return null == o ? t : Number(o).valueOf()
      }, e.setNumber = function(e, t) {
        cc.sys.localStorage.setItem(n.GAME_NAME + e, t.toString())
      }, e.getBoolean = function(e, t) {
        var o = cc.sys.localStorage.getItem(n.GAME_NAME + e);
        return null == o ? t : "true" == o
      }, e.setBoolean = function(e, t) {
        var o = t ? 1 : 0;
        cc.sys.localStorage.setItem(n.GAME_NAME + e, o.toString())
      }, e.setStringCrypt = function(e, t) {
        try {
          var o = CryptoJS.AES.encrypt(t, n.KEY_ENCRYPT);
          cc.sys.localStorage.setItem(n.GAME_NAME + e, o.toString())
        } catch (i) {}
      }, e.getStringCrypt = function(e, t) {
        void 0 === t && (t = null);
        var o = cc.sys.localStorage.getItem(n.GAME_NAME + e);
        return null == o ? t : CryptoJS.AES.decrypt(o, n.KEY_ENCRYPT).toString(CryptoJS.enc.Utf8)
      }, e.API_KEY = "gameioe", e.SERVICE_CODE = "IOE", e.TokenMD5orTokenFull = "", e.LevelFromUrl = -1, e.RoundFromUrl = -1, e.redirectUrl = "https://ioe.vn", e.IpClient = "", e.DeviceId = "", e.ans = [], e.score = 0, e.level = 1, e.wrongAnsTotal = 10, e.correctPercent = 0, e.totalQuest = null == e.AppModel ? 0 : e.AppModel.game.questionArr.length, e._locale = e.getNumber(n.LOCALE, i.eLocale.VN), e.callUpdateScoreForAllTarget = function(e) {
        a.default.instance.postEvent(a.GlobalEventName.IOE_NEW_SCORE, e)
      }, e.callUpdateAnswerStateForAllTarget = function(e, t) {
        a.default.instance.postEvent(a.GlobalEventName.IOE_NEW_STATE_BTN, {
          str: e,
          isCorrect: t
        })
      }, e.callUpdatePlayerMeStateForAllTarget = function(e, t, o) {
        a.default.instance.postEvent(a.GlobalEventName.IOE_PLAYER_ME_STATE, {
          playerId: e,
          isCorrect: t,
          time: o
        })
      }, e.callUpdateBotSpeedForAllTarget = function(e, t) {
        a.default.instance.postEvent(a.GlobalEventName.IOE_BOT_PLAYER_SPEED, {
          playerId: t,
          time: e
        })
      }, e
    }();
    o.default = s, cc._RF.pop()
  }, {
    "../config/eLocale": "eLocale",
    "../ui/ControlEvent": "ControlEvent",
    "../zai/GlobalEvent": "GlobalEvent"
  }],
  ConfigLoader: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "e513evgJZJJs7dYXU2DDhkF", "ConfigLoader"), Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.ConfigRefObj = o.MANIFEST_KEY_FILE = void 0;
    var n = e("./StringConfig"),
      i = e("../utils/ClientData"),
      r = e("../network/HttpUtils"),
      a = e("./eLocale");
    o.MANIFEST_KEY_FILE = "ConfigManifest";
    var c = function(e, t, o) {
        if (t === o) return e;
        for (var n = e, i = n.indexOf(t); - 1 != i;) i = (n = n.replace(t, o)).indexOf(t);
        return n
      },
      s = function(e, t) {
        this.clazz = e, this.key = t
      };
    o.ConfigRefObj = s;
    var u = function() {
      function e() {
        this.arrConfigRef = [new s(n.default, "stringConfig")], this.serverCachedConfigByName = new Map, this._manifest = null, this._configByType = new Map
      }
      return e.prototype.defineConfigRefs = function(e) {
        for (var t = 0, o = e; t < o.length; t++) {
          var n = o[t];
          this.arrConfigRef.push(n)
        }
      }, e.prototype.existChecksumKey = function(e) {
        for (var t = 0, o = this.arrConfigRef; t < o.length; t++)
          if (o[t].key == e) return !0;
        return !1
      }, Object.defineProperty(e, "instance", {
        get: function() {
          return e._instance || (e._instance = new e), e._instance
        },
        enumerable: !1,
        configurable: !0
      }), e.CFS = function(t) {
        var o = a.eLocale[i.default.locale + ""].toLowerCase(),
          r = e.instance.getConfig(n.default).stringMap.get(t);
        if (r && r[o]) {
          var s = r[o];
          return s = c(s, "\\n", "\n"), s = c(s, "\\t", "\t"), s = c(s, "\b", ""), c(s, "\\b", "")
        }
        return t
      }, e.prototype.getConfig = function(e) {
        if (this._configByType.has(e)) return this._configByType.get(e);
        cc.warn("config not init yet " + e.prototype.constructor.name);
        var t = e,
          o = new t;
        return this._configByType.set(t, o), o
      }, e.prototype.initConfigs = function(e) {
        var t = 0,
          o = this;
        o.arrConfigRef.length || e && e();
        for (var n = 0; n < o.arrConfigRef.length; n++) {
          var i = o.arrConfigRef[n];
          o.loadConfig(i.key, i.clazz, function() {
            ++t == o.arrConfigRef.length && e && e()
          })
        }
      }, Object.defineProperty(e.prototype, "manifest", {
        get: function() {
          if (!this._manifest)
            if (this._manifest = new Map, cc.sys.isBrowser);
            else if (cc.sys.isNative) {
            var e = jsb.fileUtils.getWritablePath() + o.MANIFEST_KEY_FILE;
            if (jsb.fileUtils.isFileExist(e)) {
              var t = jsb.fileUtils.getStringFromFile(e),
                n = JSON.parse(t);
              for (var i in n) {
                var r = n[i];
                this._manifest.set(i, r)
              }
            }
          }
          return this._manifest
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.saveMd5Manifest = function(e, t) {
        this.manifest.set(e, t);
        for (var n = {}, i = 0, r = Array.from(this.manifest.entries()); i < r.length; i++) {
          var a = r[i];
          n[a[0]] = a[1]
        }
        var c = JSON.stringify(n);
        if (cc.sys.isBrowser);
        else if (cc.sys.isNative) {
          var s = jsb.fileUtils.getWritablePath() + o.MANIFEST_KEY_FILE;
          jsb.fileUtils.isFileExist(s) && jsb.fileUtils.removeFile(s), jsb.fileUtils.writeStringToFile(c, s)
        }
      }, e.prototype.loadConfig = function(e, t, o, n) {
        void 0 === n && (n = null);
        var i = this;
        if (n) {
          var a = n + "/configs/" + e + "?t=" + (new Date).getTime().toString();
          r.default.get(a, function(n) {
            if (n) try {
              var r = new t;
              r.parseConfig(n), i._configByType.set(t, r), o && o(!0)
            } catch (a) {
              i.loadConfig(e, t, o)
            } else i.loadConfig(e, t, o)
          })
        } else {
          var c, s = "configs/" + e,
            u = i.serverCachedConfigByName.get(e);
          if (cc.sys.isNative && !u) {
            var l = jsb.fileUtils.getWritablePath() + e;
            jsb.fileUtils.isFileExist(l) && (u = jsb.fileUtils.getStringFromFile(l))
          }
          if (u)
            if (CryptoJS.MD5(u).toString() == i.manifest.get(e)) try {
                var p = JSON.parse(u);
                (f = new t).parseConfig(p), i._configByType.set(t, f), o && o(!0)
              } catch (h) {
                o && o(!1)
              } else if (c = cc.loader.getRes(s, cc.TextAsset)) try {
                var d = c.text ? c.text : c;
                i.saveMd5Manifest(e, CryptoJS.MD5(d).toString()), p = JSON.parse(d), (f = new t).parseConfig(p), i._configByType.set(t, f), o && o(!0)
              } catch (g) {
                o && o(!1)
              } else cc.loader.loadRes(s, cc.TextAsset, function(n, r) {
                if (r && !n) try {
                  var a = r.text ? r.text : r;
                  i.saveMd5Manifest(e, CryptoJS.MD5(a).toString());
                  var c = JSON.parse(a),
                    s = new t;
                  s.parseConfig(c), i._configByType.set(t, s), o && o(!0)
                } catch (h) {
                  o && o(!1)
                } else o && o(!1)
              });
              else if (c = cc.loader.getRes(s, cc.TextAsset)) try {
            var f;
            d = c.text ? c.text : c, p = JSON.parse(d), (f = new t).parseConfig(p), i._configByType.set(t, f), o && o(!0)
          } catch (_) {
            o && o(!1)
          } else cc.loader.loadRes(s, cc.TextAsset, function(e, n) {
            if (n && !e) try {
              var r = n.text ? n.text : n,
                a = JSON.parse(r),
                c = new t;
              c.parseConfig(a), i._configByType.set(t, c), o && o(!0)
            } catch (s) {
              console.log(s), o && o(!1)
            } else o && o(!1)
          })
        }
      }, e.prototype.requestChecksumConfig = function(e, t) {
        t && t()
      }, e.prototype.loadMd5FromAsset = function(e, t) {
        var o = "configs/" + e,
          n = this;
        cc.loader.loadRes(o, cc.TextAsset, function(o, i) {
          if (i && !o) {
            var r = CryptoJS.MD5(i.text).toString();
            n.serverCachedConfigByName.set(e, i.text), n.saveMd5Manifest(e, r), t && t(r)
          } else t && t(null)
        })
      }, e.prototype.checksum = function(e, t, o) {
        var n = [],
          i = 0,
          r = this,
          a = function() {
            i >= e.length && r.handleBreakedConfigs(n, t, o)
          };
        if (e.length)
          for (var c = function(e) {
              e.collected = 0;
              var t = cc.path.mainFileName(e.name),
                o = r.manifest.get(t);
              o ? (e.md5 != o && n.push(e), i++, a()) : r.loadMd5FromAsset(t, function(t) {
                e.md5 != t && n.push(e), i++, a()
              })
            }, s = 0, u = e; s < u.length; s++) c(u[s]);
        else a()
      }, e.prototype.destroy = function() {
        this._manifest.clear(), this._configByType.clear()
      }, e.prototype.handleBreakedConfigs = function(e, t, o) {
        o && o()
      }, e._instance = null, e
    }();
    o.default = u, cc._RF.pop()
  }, {
    "../network/HttpUtils": "HttpUtils",
    "../utils/ClientData": "ClientData",
    "./StringConfig": "StringConfig",
    "./eLocale": "eLocale"
  }],
  Connector: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "7bc01Kwy/ZM7r1sEGCcKt7Y", "Connector"), Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.eDisconnectReason = o.ResponseObj = void 0;
    var n, i, r = e("../utils/PlatformUtils"),
      a = e("./BaseReceive"),
      c = e("../ui/UIWaitingLayout"),
      s = [],
      u = function() {
        function e(e, t) {
          this.cb = e, this.createdTime = (new Date).getTime(), this.cmds = t
        }
        return e.prototype.isAvailable = function() {
          return this.createdTime + 12e4 > (new Date).getTime()
        }, e
      }();
    o.ResponseObj = u,
      function(e) {
        e[e.UNEXPECTED = 0] = "UNEXPECTED", e[e.LOGIN_ERROR = 1] = "LOGIN_ERROR", e[e.LOGOUT = 2] = "LOGOUT", e[e.KICK = 3] = "KICK", e[e.BAN = 4] = "BAN"
      }(n = o.eDisconnectReason || (o.eDisconnectReason = {})),
      function(e) {
        e[e.TEST = 0] = "TEST", e[e.LOCAL_HOST = 1] = "LOCAL_HOST", e[e.LIVE = 2] = "LIVE"
      }(i || (i = {}));
    var l = function() {
      function e() {
        this.m_sfs = null, this._cmdListenerList = {}, this._responseFuncs = {}, this._cmdHandlers = new Map, this._disconnectedReason = n.UNEXPECTED
      }
      return Object.defineProperty(e.prototype, "config", {
        get: function() {
          return e.MODE != i.LIVE ? {
            host: e.MODE == i.LOCAL_HOST ? "localhost" : "13.212.147.198",
            port: 8080,
            useSSL: !1,
            zone: "BitOne",
            debug: !1
          } : {
            host: "abc.socketweb",
            port: null,
            useSSL: !0,
            zone: "abc",
            debug: !1
          }
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "API_URL", {
        get: function() {
          return e.apiUrl ? e.apiUrl : e.MODE != i.LIVE ? (e.MODE, i.LOCAL_HOST, "https://dev-api-edu.go.vn/demo-service") : "https://api-edu.go.vn/service"
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "API_PATH", {
        get: function() {
          return e.apiPath ? e.apiPath : e.MODE != i.LIVE ? (e.MODE, i.LOCAL_HOST, "/v2/demogame") : "/v2/game"
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.registerPacketHandler = function(e, t) {
        this._cmdHandlers.set(t, e)
      }, Object.defineProperty(e, "instance", {
        get: function() {
          return null === e.m_instance && (e.m_instance = new e, e.m_instance.init(), window.jtdConnector = e.m_instance), e.m_instance
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.init = function() {}, e.prototype._onExtensionResponse = function(t) {
        var o = t.cmd,
          n = null;
        s.indexOf(o) < 0 && (t.params, cc.log("<<<<:..." + t.cmd));
        var i = this._cmdHandlers.get(o);
        if (i)
          if (n = new i, r.default.isTestMode) n.parse(o, t.params);
          else try {
            n.parse(o, t.params)
          } catch (w) {
            cc.error(w)
          } else(n = new a.default).parse(o, t.params);
        var u = e.instance._cmdListenerList[o];
        if (u && Array.isArray(u)) {
          for (var l = [], p = 0, d = u; p < d.length; p++) {
            var f = d[p];
            l.push(f)
          }
          for (var h = l.length - 1; h >= 0; h--) {
            var g = l[h];
            if (r.default.isTestMode) g.func.call(g.obj, n);
            else try {
              g.func.call(g.obj, n)
            } catch (w) {
              cc.error(w)
            }
          }
        }
        var _ = e.instance._responseFuncs[o],
          y = [];
        if (_ && Array.isArray(_))
          for (h = _.length - 1; h >= 0; h--) {
            if ((I = _[h]) && I.cb)
              if (1 == I.cmds.length)
                if (r.default.isTestMode) I.cb && I.cb(n);
                else try {
                  I.cb && I.cb(n)
                } catch (w) {
                  cc.error(w)
                } else if (I.cmds.length > 1)
                  if (r.default.isTestMode) I.cb && I.cb(n);
                  else try {
                    I.cb && I.cb(n)
                  } catch (w) {
                    cc.error(w)
                  }
            _.splice(h, 1);
            for (var m = 0, v = I.cmds; m < v.length; m++) {
              var b = v[m];
              b != o && y.push({
                cmd: b,
                obj: I
              })
            }
            I.showWaiting && c.default.hideWaiting("cmd: " + o)
          }
        for (var C = 0, O = y; C < O.length; C++) {
          var S = O[C],
            P = e.instance._responseFuncs[S.cmd];
          if (P && Array.isArray(P))
            for (h = P.length - 1; h >= 0; h--) {
              var I;
              (I = P[h]) == S.obj && P.splice(h, 1)
            }
        }
      }, e.prototype._onConnection = function(t) {
        cc.log(t), e.instance._responseFuncs = {}, t.success ? (this._connectCb && this._connectCb(!0, t), this._connectCb = null) : (cc.log("EventHandler._onConnection failed"), this._connectCb && this._connectCb(!1, t), this._connectCb = null), this._disconnectedReason = n.UNEXPECTED, c.default.hideWaiting("connect")
      }, e.prototype._onConnectionLost = function(t) {
        switch (cc.log("EventHandler._onConnectionLost " + JSON.stringify(t)), t.reason) {
          case "kick":
            this._disconnectedReason = n.KICK;
            break;
          case "ban":
            this._disconnectedReason = n.BAN
        }
        this._connectCb && this._connectCb(!1, t), this._connectCb = null, e.instance._responseFuncs = {}, c.default.hideWaiting("connect"), this.disconnect(n.UNEXPECTED)
      }, e.prototype.connect = function() {
        this.init(), cc.log("Pending... Connector Connecting to server " + this.config.host + ":" + this.config.port + ":" + this.config.zone)
      }, Object.defineProperty(e.prototype, "isConnected", {
        get: function() {
          return !1
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "isConnecting", {
        get: function() {
          return !1
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.getSfs = function() {
        return this.m_sfs
      }, e.prototype.sendRequest = function(e, t, o, n) {
        void 0 === t && (t = null), void 0 === o && (o = null), void 0 === n && (n = !0), n && s.indexOf(e) < 0 && cc.log(">>>>:..." + e)
      }, e.prototype.send = function(e, t, o) {
        void 0 === t && (t = null), void 0 === o && (o = !0)
      }, e.prototype.addEventListener = function() {}, e.prototype.removeEventListener = function() {}, e.prototype.addCmdListener = function(t, o, n) {
        e.instance._cmdListenerList[t] || (e.instance._cmdListenerList[t] = []), e.instance._cmdListenerList[t].push({
          func: o,
          obj: n
        })
      }, e.prototype.removeCmdListener = function(t, o) {
        if (void 0 === o && (o = null), null != o) {
          if ((a = e.instance._cmdListenerList[o]) && Array.isArray(a))
            for (var n = a.length - 1; n >= 0; n--) a[n].obj == t && a.splice(n, 1)
        } else
          for (var i = 0, r = Object.keys(e.instance._cmdListenerList); i < r.length; i++) {
            var a, c = r[i];
            if ((a = e.instance._cmdListenerList[c]) && Array.isArray(a))
              for (n = a.length - 1; n >= 0; n--) a[n].obj == t && a.splice(n, 1)
          }
      }, e.prototype.requestPacket = function(t, o, n) {
        if (void 0 === n && (n = !0), t.send(), o) {
          n && c.default.showWaiting("cmd: " + t.getCmd());
          var i = e.instance._responseFuncs[t.getCmd()];
          i || (i = e.instance._responseFuncs[t.getCmd()] = []);
          var r = new u(o, [t.getCmd()]);
          i.push(r), r.showWaiting = n
        }
      }, e.prototype.requestPacketWithResponseCmd = function(t, o, n, i) {
        if (void 0 === i && (i = !0), t.send(), n) {
          i && c.default.showWaiting("cmd: " + t.getCmd());
          var r = e.instance._responseFuncs[o];
          r || (r = e.instance._responseFuncs[o] = []);
          var a = new u(n, [o]);
          r.push(a), a.showWaiting = i
        }
      }, e.prototype.requestPacketWithResponseCmds = function(t, o, n, i) {
        if (void 0 === i && (i = !0), t.send(), n) {
          i && c.default.showWaiting("cmd: " + t.getCmd());
          for (var r = new u(n, o), a = 0, s = o; a < s.length; a++) {
            var l = s[a],
              p = e.instance._responseFuncs[l];
            p || (p = e.instance._responseFuncs[l] = []), p.push(r)
          }
          r.showWaiting = i
        }
      }, e.prototype.requestCmd = function(t, o, n, i) {
        if (void 0 === n && (n = new Map), void 0 === i && (i = !0), e.instance.send(t, n), o) {
          i && c.default.showWaiting("cmd: " + t);
          var r = e.instance._responseFuncs[t];
          r || (r = e.instance._responseFuncs[t] = []);
          var a = new u(o, [t]);
          r.push(a), a.showWaiting = i
        }
      }, e.prototype.requestCmdWithResponseCmd = function(t, o, n, i, r) {
        if (void 0 === i && (i = new Map), void 0 === r && (r = !0), e.instance.send(t, i), n) {
          r && c.default.showWaiting("cmd: " + t);
          var a = e.instance._responseFuncs[o];
          a || (a = e.instance._responseFuncs[o] = []);
          var s = new u(n, [o]);
          a.push(s), s.showWaiting = r
        }
      }, e.prototype.requestCmdWithResponseCmds = function(t, o, n, i, r) {
        if (void 0 === i && (i = new Map), void 0 === r && (r = !0), e.instance.send(t, i), n) {
          r && c.default.showWaiting("cmd: " + t);
          for (var a = new u(n, o), s = 0, l = o; s < l.length; s++) {
            var p = l[s],
              d = e.instance._responseFuncs[p];
            d || (d = e.instance._responseFuncs[p] = []), d.push(a)
          }
          a.showWaiting = r
        }
      }, e.prototype.disconnect = function(e) {
        this._disconnectedReason = e
      }, e.apiUrl = "", e.apiPath = "", e.MODE = i.TEST, e.m_instance = null, e
    }();
    o.default = l, cc._RF.pop()
  }, {
    "../ui/UIWaitingLayout": "UIWaitingLayout",
    "../utils/PlatformUtils": "PlatformUtils",
    "./BaseReceive": "BaseReceive"
  }],
  ContentComponent: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "ac295DF3cBJSLTzKa1rD1tr", "ContentComponent");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.eContentType = void 0;
    var a, c = e("../../../../framework/network/HttpUtils"),
      s = e("../../../../framework/ui/UIPopup"),
      u = e("../../../../framework/ui/UIPopupManager"),
      l = e("../../../../framework/utils/ClientData"),
      p = e("../../../../framework/zai/GlobalEvent"),
      d = e("../../../config/ioe_config"),
      f = e("../../../network/ApiDefine"),
      h = e("../../answer/AnswerButton"),
      g = cc._decorator,
      _ = g.ccclass,
      y = g.property;
    (function(e) {
      e[e.Text = 0] = "Text", e[e.Image = 1] = "Image", e[e.Audio = 2] = "Audio", e[e.Video = 3] = "Video", e[e.LongText = 4] = "LongText", e[e.SplitText = 5] = "SplitText", e[e.TrueOrFalse = 6] = "TrueOrFalse"
    })(a = o.eContentType || (o.eContentType = {}));
    var m = function(e) {
      function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.contentType = a.Text, t.isConversation = !1, t.timeStartQuest = 0, t.canClick = !0, t.inputTxt = "", t.lastKeyCode = -1, t
      }
      return i(t, e), t.prototype.onLoad = function() {
        var e = this;
        this.eventLstener = function(t) {
          return e.onKeyDown(t)
        }, cc.game.canvas.addEventListener("keydown", this.eventLstener)
      }, t.prototype.onDestroy = function() {
        cc.game.canvas.removeEventListener("keydown", this.eventLstener)
      }, t.prototype.onKeyDown = function(e) {
        if (0 != this.node.active) {
          switch (cc.log("press " + e.key, this.node), e.key) {
            case "Enter":
              this.onKeyEnterPress()
          }
          cc.log("inputTxt= " + this.inputTxt), this.updateQuestContent()
        }
      }, t.prototype.updateQuestContent = function() {
        cc.log("need overidden ...")
      }, t.prototype.onButtonClick = function(e) {
        if (this.canClick) {
          var t = e.currentTarget.getComponent(h.AnswerButton);
          this.curAnswerButton = t;
          var o = t.btnIdx;
          console.log("onButtonClick::btnContent", o, e.currentTarget, e), this.idBtnClick = o;
          var n = "";
          switch (o) {
            case 0:
              n = "False", t.node.opacity = 127;
              break;
            case 1:
              n = "True", t.node.opacity = 127;
              break;
            case 6:
              if (0 == this.validateInput(this.questionModel.questionContent)) return void u.default.instance.showPopup("ioe-string-Vui l\xf2ng nh\u1eadp \u0111\u1ee7 s\u1ed1 k\xfd t\u1ef1");
              n = this.inputTxt, t.node.opacity = 127;
              break;
            default:
              n = t.btnTxt
          }
          this.callApiAnswer(n)
        }
      }, t.prototype.onKeyEnterPress = function() {
        if (this.canClick && !u.default.instance.isHavePopup)
          if (0 != this.validateInput(this.questionModel.questionContent)) {
            var e = this.inputTxt;
            this.callApiAnswer(e)
          } else u.default.instance.showPopup("Vui l\xf2ng nh\u1eadp \u0111\u1ee7 s\u1ed1 k\xfd t\u1ef1")
      }, t.prototype.callApiAnswer = function(e) {
        var t = this,
          o = {
            api_key: l.default.API_KEY,
            serviceCode: l.default.SERVICE_CODE,
            token: l.default.AppModel.token,
            examKey: l.default.AppModel.game.examKey,
            ans: {
              questId: this.questionModel.questionId,
              point: this.questionModel.questionPoint,
              ans: e
            },
            IPClient: l.default.IpClient,
            deviceId: l.default.DeviceId
          };
        this.canClick = !1, this.requestAnsCheck(o, e, function() {
          t.canClick = !0, t.curAnswerButton && (t.curAnswerButton.node.opacity = 255)
        })
      }, t.prototype.parseAnswerCheckResponse = function(e, t) {
        var o = e.data.point,
          n = !1;
        l.default.ans.push({
          questId: this.questionModel.questionId,
          point: this.questionModel.questionPoint,
          ans: t
        }), null != o && o > 0 && (l.default.score += o, l.default.callUpdateScoreForAllTarget(l.default.score), n = !0, l.default.wrongAnsTotal -= 1), p.default.instance.postEvent(p.GlobalEventName.IOE_ANSWER_RESULT, {
          playerId: l.SpinePlayer.PlayerMeId,
          isCorrect: n,
          questNum: this.currentQuestionNumber
        }), cc.log("answer is ", n);
        var i = Date.now() / 1e3 - this.timeStartQuest,
          r = d.IOE.caculateTimeAnswear(i);
        l.default.callUpdatePlayerMeStateForAllTarget(l.SpinePlayer.PlayerMeId, n, r.timeRun);
        var a = n ? -r.timeRun : l.SpinePlayer.TimeFastRunWhenAnswerInCorrect;
        l.default.callUpdateBotSpeedForAllTarget(a), this.stopSoundIfNeed()
      }, t.prototype.requestAnsCheck = function(e, t, o) {
        var n = this;
        c.default.postApi(f.ApiDefine.ANSWEAR_CHECK, e, function(e) {
          if (cc.log("ANSWEAR_CHECK data res", e, e.data), e && e.success && e.data) {
            var i = e.data;
            n.parseAnswerCheckResponse(i, t)
          } else {
            o && o(e);
            var r = e.error && e.error.msg ? e.error.msg : JSON.stringify(e.data);
            u.default.instance.showPopup(r, [s.PopupAction.make("", function() {
              e.data && e.data.redirectUrl ? window.location.href = e.data.redirectUrl : e.tokenExpire && (window.location.href = l.default.redirectUrl)
            }, !0)])
          }
        }, !1)
      }, t.prototype.updateTxtInAllBtn = function(e) {
        for (var t = 0; t < e.length; t++) {
          var o = e[t];
          if (t < this.questionModel.answearArr.length) {
            o.node.active = !0;
            var n = this.questionModel.answearArr[t].content;
            o.setBtnTxt(n, this.gameFont)
          } else o.node.active = !1
        }
      }, t.prototype.updateUrlImgInAllBtn = function(e) {
        if (e)
          for (var t = 0; t < e.length; t++) {
            var o = e[t];
            if (t < this.questionModel.answearArr.length) {
              o.node.active = !0;
              var n = this.questionModel.answearArr[t];
              cc.log("TextContent:updateUrlImgInAllBtn " + n.hasImage, n), n.hasImage ? o.setImageContent(n.content) : console.log("answerImgBtn has not imgUrl")
            } else o.node.active = !1
          }
      }, t.prototype.centerContentInBox = function(e, t, o, n) {
        if (!e || !o) return null;
        if (o) {
          e.string = n;
          var i = e.node.getContentSize(),
            r = o.node.getContentSize();
          return i.height > r.height ? (t.string = n, t.node.active = !0, e.node.active = !1, t) : (e.node.active = !0, t.node.active = !1, e)
        }
      }, t.prototype.validateInput = function(e) {
        var t = e.maxInput;
        return cc.log("requireChar", t, "inputTxt", this.inputTxt), !(!this.inputTxt || t != this.inputTxt.length)
      }, r([y({
        type: cc.Enum(a)
      })], t.prototype, "contentType", void 0), r([y({
        type: cc.TTFFont
      })], t.prototype, "gameFont", void 0), r([y], t.prototype, "isConversation", void 0), r([_], t)
    }(cc.Component);
    o.default = m, cc._RF.pop()
  }, {
    "../../../../framework/network/HttpUtils": "HttpUtils",
    "../../../../framework/ui/UIPopup": "UIPopup",
    "../../../../framework/ui/UIPopupManager": "UIPopupManager",
    "../../../../framework/utils/ClientData": "ClientData",
    "../../../../framework/zai/GlobalEvent": "GlobalEvent",
    "../../../config/ioe_config": "ioe_config",
    "../../../network/ApiDefine": "ApiDefine",
    "../../answer/AnswerButton": "AnswerButton"
  }],
  ControlEvent: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "4ff572dBD1O8Lftt4UC4C+9", "ControlEvent");
    var n = this && this.__decorate || function(e, t, o, n) {
      var i, r = arguments.length,
        a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
      else
        for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
      return r > 3 && a && Object.defineProperty(t, o, a), a
    };
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.UICancelInteractionType = void 0;
    var i = cc._decorator,
      r = i.ccclass;
    i.property,
      function(e) {
        e[e.OnTouchDown = 1] = "OnTouchDown", e[e.OnTouchUp = 2] = "OnTouchUp", e[e.OnMoveFromTarget = 4] = "OnMoveFromTarget", e[e.OnTouchDownOrTouchUp = 3] = "OnTouchDownOrTouchUp", e[e.OnTouchDownOrMoveFromTarget = 5] = "OnTouchDownOrMoveFromTarget", e[e.OnTouchUpOrMoveFromTarget = 6] = "OnTouchUpOrMoveFromTarget", e[e.Invalid = 0] = "Invalid"
      }(o.UICancelInteractionType || (o.UICancelInteractionType = {}));
    var a = function() {
      function e() {}
      return e.PositionChanged = "position-changed", e.SizeChanged = "size-changed", e.ScaleChanged = "scale-changed", e.Click = "click", e.Switch = "switch", e.ShowTooltip = "show-tooltip", e.LongClick = "long-click", e.TouchDown = "touch-down", e.TouchDragInside = "touch-drag-inside", e.TouchDragOutside = "touch-drag-outside", e.TouchDragEnter = "touch-drag-enter", e.TouchDragExit = "touch-drag-exit", e.TouchUpInside = "touch-up-inside", e.TouchUpOutside = "touch-up-outside", e.TouchCancel = "touch-cancel", e.DragBegan = "drag-began", e.DragMoved = "drag-moved", e.DragEnded = "drag-ended", e.DragCancelled = "drag-cancelled", e.CanvasCancel = "canvas-cancelled", e.TutorialNextStep = "tutorial-next-step", e.TutorialNextConversation = "tutorial-next-conversation", e.TutorialFinishConversation = "tutorial-finish-conversation", e.TutorialStartConversation = "tutorial-start-conversation", e.TutorialFinished = "tutorial-finished", e.TabbarItemSelected = "tabbar-item-selected", e.ScreenWillAppear = "ScreenWillAppear", e.ScreenDidAppear = "ScreenDidAppear", e.ScreenWillDisappear = "ScreenWillDisappear", e.ScreenDidDisappear = "ScreenDidDisappear", e.PopupWillAppear = "PopupWillAppear", e.PopupDidAppear = "PopupDidAppear", e.PopupWillDisappear = "PopupWillDisappear", e.PopupDidDisappear = "PopupDidDisappear", e.WindowWillAppear = "WindowWillAppear", e.WindowDidAppear = "WindowDidAppear", e.WindowWillDisappear = "WindowWillDisappear", e.WindowDidDisappear = "WindowDidDisappear", e.ScreenDidPush = "ScreenDidPush", e.ScreenDidPop = "ScreenDidPop", e.ProductResponse = "ProductResponse", e.TransitionStarted = "TransitionStarted", e.TransitionFinished = "TransitionFinished", e.RadioButtonSelected = "radio-button-selected", e.MenuShow = "on-menu-show", e.MenuHide = "on-menu-hide", e.LocaleChanged = "LocaleChanged", n([r], e)
    }();
    o.default = a, cc._RF.pop()
  }, {}],
  CountDown: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "b3497vyMOxGFr3w4a/vvzxK", "CountDown");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.CountDown = void 0;
    var a = e("../../../../framework/ui/UIForegroundComponent"),
      c = cc._decorator,
      s = c.ccclass,
      u = (c.property, function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.remainTime = 0, t.enableTimer = !1, t
        }
        return i(t, e), t.prototype.update = function(e) {
          this.enableTimer && this.isGameActive && (this.remainTime -= e, this.remainTime < 0 && (this.remainTime = 0), this.cbUpdate && this.cbUpdate(this.remainTime.toFixed(1)), this.remainTime <= 0 && (this.cbFinish && this.cbFinish(), this.enableTimer = !1))
        }, t.prototype.onPauseUI = function() {}, t.prototype.onResumeUI = function(e) {
          this.remainTime -= e
        }, t.prototype.setTimeRemain = function(e, t, o, n) {
          this.cbFinish = n, this.cbUpdate = o, null == t && (t = !1), this.remainTime = Math.ceil(e), this.enableTimer = this.remainTime > 0, this.enableTimer || n && (n(), this.cbFinish = void 0)
        }, t.prototype.stopTimeRemain = function() {
          this.enableTimer = !1
        }, r([s], t)
      }(a.UIForegroundComponent));
    o.CountDown = u, cc._RF.pop()
  }, {
    "../../../../framework/ui/UIForegroundComponent": "UIForegroundComponent"
  }],
  CustomAction: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "180975QP0ZKC4xUZ13/D5dd", "CustomAction");
    var n, i = this && this.__extends || (n = function(e, t) {
      return (n = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, t) {
          e.__proto__ = t
        } || function(e, t) {
          for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
        })(e, t)
    }, function(e, t) {
      function o() {
        this.constructor = e
      }
      n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
    });
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.zai = void 0;
    var r = cc.ActionInterval,
      a = e("../global/Global");
    (function(e) {
      var t = function(e) {
        function t() {
          var t = e.call(this) || this;
          return t.name = "CustomAction", t
        }
        return i(t, e), t.prototype.initWithDuration = function(t) {
          return !!e.prototype.initWithDuration.call(this, t) || (this.setDuration(t), !0)
        }, t.prototype.stop = function() {
          e.prototype.stop.call(this), this.onStop && this.onStop()
        }, t.prototype.update = function(e) {
          this.onUpdate && this.onUpdate(e)
        }, t.prototype.startWithTarget = function(t) {
          e.prototype.startWithTarget.call(this, t), this.onStartWithTarget && this.onStartWithTarget(t)
        }, t.prototype.step = function(t) {
          e.prototype.step.call(this, t), this.onStep && this.onStep(t)
        }, t.prototype.onStartWithTarget = function() {}, t.prototype.onStep = function() {}, t.prototype.onStop = function() {}, t.prototype.onUpdate = function() {}, t
      }(r);
      e.CustomAction = t;
      var o = function(e) {
        function t(t, o, n) {
          void 0 === n && (n = "");
          var i = e.call(this) || this;
          return i._startNumber = 0, i._targetNumber = 0, i._currentNumber = 0, i.prefix = "", i._label = null, i._startNumber = 0, i._targetNumber = o, i.initWithDuration(t), n && (i.prefix = n), i
        }
        return i(t, e), t.prototype._updateValue = function() {
          this.prefix ? this._label.string = "+" + a.ZaiGlobal.NumberFormat1(this._currentNumber) : this._label.string = a.ZaiGlobal.NumberFormat1(this._currentNumber)
        }, t.prototype.onUpdate = function(e) {
          var t = Math.floor((this._targetNumber - this._startNumber) * e + this._startNumber);
          this._currentNumber !== t && (this._currentNumber = t, this._updateValue())
        }, t.prototype.onStartWithTarget = function(e) {
          this._target = e;
          var t = this._target.getComponent(cc.Label).string.replace(/[.,+-]/g, "");
          t && t.length > 0 && (this._startNumber = parseInt(t)), this._currentNumber = this._startNumber, this._label = this._target.getComponent(cc.Label)
        }, t
      }(t);
      e.ActionNumber = o;
      var n = function(e) {
        function t(t, o, n, i, r) {
          void 0 === n && (n = [0, 1, 2]), void 0 === i && (i = 1 / 60), void 0 === r && (r = "");
          var a = e.call(this) || this;
          return a._startNumber = 0, a._targetNumber = 0, a._arrayRandom = [], a._currentNumber = 0, a._randomNumber = -1, a._frameTime = 1 / 60, a._timeStepRandom = 0, a.prefix = "", a._label = null, a._startNumber = 0, a._targetNumber = o, a._arrayRandom = n, a._frameTime = i, a.initWithDuration(t), r && (a.prefix = r), a
        }
        return i(t, e), t.prototype._updateValue = function() {
          this.prefix ? this._label.string = "" + this.prefix + a.ZaiGlobal.NumberFormatWithPadding(this._currentNumber, 2) : this._label.string = a.ZaiGlobal.NumberFormatWithPadding(this._currentNumber, 2)
        }, t.prototype.onUpdate = function(e) {
          if (!(this._timeStepRandom < this._frameTime)) {
            if (this._timeStepRandom -= this._frameTime, e >= 1) this._randomNumber = this._targetNumber;
            else
              do {
                var t = Math.floor(Math.random() * this._arrayRandom.length);
                this._randomNumber = this._arrayRandom[t]
              } while (this._randomNumber == this._currentNumber);
            this._currentNumber = this._randomNumber, this._updateValue()
          }
        }, t.prototype.onStep = function(e) {
          this._timeStepRandom += e
        }, t.prototype.onStartWithTarget = function(e) {
          this._target = e;
          var t = this._target.getComponent(cc.Label).string.replace(/[.,+-]/g, "");
          t && t.length > 0 && (this._startNumber = parseInt(t)), this._currentNumber = this._startNumber, this._label = this._target.getComponent(cc.Label)
        }, t
      }(t);
      e.RandomNumber = n
    })(o.zai || (o.zai = {})), cc._RF.pop()
  }, {
    "../global/Global": "Global"
  }],
  DateUtils: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "f0fe97fyBFKKozL1vEqJuj8", "DateUtils"), Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var n = function() {
      function e() {}
      return e.secondsToDateTime = function(t) {
        var o = Math.floor(t / 86400),
          n = Math.floor(t % 86400 / 3600),
          i = t % 3600,
          r = Math.floor(i / 60),
          a = i % 60;
        return o > 0 ? e.NumberFormatWithPadding(o, 2) + "D " + e.NumberFormatWithPadding(n, 2) + ":" + e.NumberFormatWithPadding(r, 2) : n > 0 ? e.NumberFormatWithPadding(n, 2) + ":" + e.NumberFormatWithPadding(r, 2) + ":" + e.NumberFormatWithPadding(a, 2) : e.NumberFormatWithPadding(r, 2) + ":" + e.NumberFormatWithPadding(a, 2)
      }, e.NumberFormatWithPadding = function(e, t) {
        if (null == t && (t = 2), e < 0) return e.toString();
        for (var o = e.toString(); o.length < t;) o = "0" + o;
        return o
      }, e
    }();
    o.default = n, cc._RF.pop()
  }, {}],
  DienDoanVan: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "f7fa5U9vxdGAre0TyY6rwqT", "DienDoanVan");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var a = cc._decorator,
      c = a.ccclass,
      s = a.property,
      u = function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.txtQuestion = null, t.contentAnswer = null, t.itemAnswer = null, t
        }
        return i(t, e), t.prototype.onLoad = function() {
          this.data = null, this.questData = null, this.results = [], this.listQuest = [], this.selectIndex = -1
        }, t.prototype.getFirstEditBox = function() {
          return 0 == this.results.length ? null : this.results[0].getComponent(cc.EditBox)
        }, t.prototype.setData = function(e) {
          if (null == e) return console.log("txt is empty");
          if (this.data = e, this.results && this.results.length)
            for (var t = this.results.length - 1; t >= 0; t--) this.results[t].removeFromParent();
          this.results = [], this.listQuest = [], this.txtQuestion.games = this, this.selectIndex = -1, this.questData = e, this.contentAnswer.removeAllChildren(), this.setQuestData(this.questData, this.selectIndex)
        }, t.prototype.reset = function() {
          this.setData(this.data)
        }, t.prototype.getSubmit = function() {
          return this.results.map(function(e) {
            return e.getComponent(cc.EditBox).string
          })
        }, t.prototype.splitData = function(e) {
          if (0 == e.length) return [];
          if (1 == e.length) return [e];
          for (var t = e.length, o = [], n = 0, i = "_" == e[n], r = e[n], a = 1; a < t; a++) i ? "_" == e[a] ? r += e[a] : (o.push(r), i = "_" == e[n = a], r = e[n]) : "_" == e[a] ? (o.push(r), i = "_" == e[n = a], r = e[n]) : r += e[a], a == t - 1 && r.length > 0 && (o.push(r), r = "");
          return cc.log("data dien tu", o), o
        }, t.prototype.setQuestData = function(e, t) {
          var o = "",
            n = [];
          this.listQuest = this.splitData(e), this.selectIndex = t, this.txtQuestion.string = "";
          for (var i = 0; i < this.listQuest.length; i++) {
            for (var r = this.listQuest[i], a = 0, c = r.length; a < c;) {
              var s = r.indexOf(">", a),
                u = r.indexOf("<", a);
              if (-1 == s) break;
              s >= 0 && -1 == u || s < u ? (r = r.substring(0, s) + "&gt;" + r.substring(s + 1), a = s + 1) : a = s + 1
            } - 1 !== r.indexOf("_") ? (o += "<bColor=#00ff0001>" + r + "</bColor>", n.push(r)) : o += r
          }
          this.txtQuestion.string = o;
          var l = this.txtQuestion.getListBackColor();
          for (i = 0; i < l.length; i++) {
            var p = l[i],
              d = cc.instantiate(this.itemAnswer),
              f = n[i].length;
            d.x = p.parent.width / 2, d.y = p.parent.height / 2 - 1, d.height = this.txtQuestion.lineHeight, d.width = f * this.txtQuestion.fontSize, d.x = d.width / 2 - 1, d.getComponent(cc.EditBox).maxLength = f, d.getChildByName("TEXT_LABEL").width = d.width, this.results.push(d), p.parent.addChild(d)
          }
        }, r([s(cc.RichText)], t.prototype, "txtQuestion", void 0), r([s(cc.Node)], t.prototype, "contentAnswer", void 0), r([s(cc.Node)], t.prototype, "itemAnswer", void 0), r([c], t)
      }(cc.Component);
    o.default = u, cc._RF.pop()
  }, {}],
  DienTuQuestion: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "60f30xRQBxG7KmFIHuRX3Tf", "DienTuQuestion");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var a = e("./QuestionComponent"),
      c = cc._decorator,
      s = c.ccclass,
      u = (c.property, function(e) {
        function t() {
          return null !== e && e.apply(this, arguments) || this
        }
        return i(t, e), t.prototype.showWithQuestion = function(e, t) {
          if (this.questType == e.questionType) {
            this.node.active = !0, cc.log("DienTu show question", e), this.questionModel = e, this.startQuestTime = Date.now() / 1e3;
            var o = this.questionModel.questionDescription.hasText,
              n = this.questionModel.questionContent.hasText,
              i = o && n;
            if (cc.log("isConversation ", i), this.contentComs.length) {
              cc.log("contentComs ", this.contentComs.length);
              for (var r = 0; r < this.contentComs.length; r++) {
                var a = this.contentComs[r];
                a.timeStartQuest = this.startQuestTime, a.updateWithQuestion(this.questionModel, t, i)
              }
            }
          } else this.node.active = !1
        }, r([s], t)
      }(a.default));
    o.default = u, cc._RF.pop()
  }, {
    "./QuestionComponent": "QuestionComponent"
  }],
  EaseUtils: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "fad56xK0bdIwb3lx1AwrmT4", "EaseUtils");
    var n, i = this && this.__extends || (n = function(e, t) {
      return (n = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, t) {
          e.__proto__ = t
        } || function(e, t) {
          for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
        })(e, t)
    }, function(e, t) {
      function o() {
        this.constructor = e
      }
      n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
    });
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var r = function(e) {
      function t() {
        return null !== e && e.apply(this, arguments) || this
      }
      return i(t, e), t.bezierAt = function(e, t, o, n, i) {
        return Math.pow(1 - i, 3) * e + 3 * i * Math.pow(1 - i, 2) * t + 3 * Math.pow(i, 2) * (1 - i) * o + Math.pow(i, 3) * n
      }, t.easeIn = function(e, t) {
        return Math.pow(e, t)
      }, t.easeOut = function(e, t) {
        return Math.pow(e, 1 / t)
      }, t.easeInOut = function(e, t) {
        return (e *= 2) < 1 ? .5 * Math.pow(e, t) : 1 - .5 * Math.pow(2 - e, t)
      }, t.easeExponentialIn = function(e) {
        return 0 === e ? 0 : Math.pow(2, 10 * (e - 1))
      }, t.easeExponentialOut = function(e) {
        return 1 === e ? 1 : 1 - Math.pow(2, -10 * e)
      }, t.easeExponentialInOut = function(e) {
        return 1 !== e && 0 !== e && (e = (e *= 2) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * (e - 1)))), e
      }, t.easeSineIn = function(e) {
        return 0 === e || 1 === e ? e : -1 * Math.cos(e * Math.PI / 2) + 1
      }, t.easeSineOut = function(e) {
        return 0 === e || 1 === e ? e : Math.sin(e * Math.PI / 2)
      }, t.easeSineInOut = function(e) {
        return 0 === e || 1 === e ? e : -.5 * (Math.cos(Math.PI * e) - 1)
      }, t.easeElasticIn = function(e, t) {
        var o = 0;
        if (0 === e || 1 === e) o = e;
        else {
          var n = t / 4;
          e -= 1, o = -Math.pow(2, 10 * e) * Math.sin((e - n) * Math.PI * 2 / t)
        }
        return o
      }, t.easeElasticOut = function(e, t) {
        var o = 0;
        if (0 === e || 1 === e) o = e;
        else {
          var n = t / 4;
          o = Math.pow(2, -10 * e) * Math.sin((e - n) * Math.PI * 2 / t) + 1
        }
        return o
      }, t.easeElasticInOut = function(e, t) {
        var o = 0,
          n = t;
        if (0 === e || 1 === e) o = e;
        else {
          e *= 2, n || (n = t = .3 * 1.5);
          var i = n / 4;
          o = (e -= 1) < 0 ? -.5 * Math.pow(2, 10 * e) * Math.sin((e - i) * Math.PI * 2 / n) : Math.pow(2, -10 * e) * Math.sin((e - i) * Math.PI * 2 / n) * .5 + 1
        }
        return o
      }, t.easeQuadraticActionIn = function(e) {
        return Math.pow(e, 2)
      }, t.easeQuadraticActionOut = function(e) {
        return -e * (e - 2)
      }, t.easeQuadraticActionInOut = function(e) {
        return (e *= 2) < 1 ? e * e * .5 : -.5 * (--e * (e - 2) - 1)
      }, t.easeQuarticActionIn = function(e) {
        return e * e * e * e
      }, t.easeQuarticActionOut = function(e) {
        return -((e -= 1) * e * e * e - 1)
      }, t.easeQuarticActionInOut = function(e) {
        return (e *= 2) < 1 ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2)
      }, t.easeQuinticActionIn = function(e) {
        return e * e * e * e * e
      }, t.easeQuinticActionOut = function(e) {
        return (e -= 1) * e * e * e * e + 1
      }, t.easeQuinticActionInOut = function(e) {
        return (e *= 2) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2)
      }, t.easeCircleActionIn = function(e) {
        return -1 * (Math.sqrt(1 - e * e) - 1)
      }, t.easeCircleActionOut = function(e) {
        return e -= 1, Math.sqrt(1 - e * e)
      }, t.easeCircleActionInOut = function(e) {
        return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : (e -= 2, .5 * (Math.sqrt(1 - e * e) + 1))
      }, t.easeCubicActionIn = function(e) {
        return e * e * e
      }, t.easeCubicActionOut = function(e) {
        return (e -= 1) * e * e + 1
      }, t.easeCubicActionInOut = function(e) {
        return (e *= 2) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2)
      }, t.easeBackIn = function(e) {
        return 0 === e || 1 === e ? e : e * e * (2.70158 * e - 1.70158)
      }, t.easeBackOut = function(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1
      }, t.easeBackInOut = function(e) {
        return (e *= 2) < 1 ? e * e * (3.5949095 * e - 2.5949095) / 2 : (e -= 2) * e * (3.5949095 * e + 2.5949095) / 2 + 1
      }, t
    }(cc.Component);
    o.default = r, cc._RF.pop()
  }, {}],
  EffectForShaderToy: [function(e, t) {
    "use strict";
    cc._RF.push(t, "33936qnYnxELanv6y0ZDLoZ", "EffectForShaderToy");
    var o = e("./ccShader_Default_Vert.js"),
      n = e("./ccShader_Default_Vert_noMVP.js");
    cc.Class({
      extends: cc.Component,
      properties: {
        glassFactor: 1,
        flagShader: "",
        frag_glsl: {
          default: "",
          visible: !1
        }
      },
      onLoad: function() {
        var e = this,
          t = new Date;
        this.parameters = {
          startTime: Date.now(),
          time: 0,
          mouse: {
            x: 0,
            y: 0,
            z: 0,
            w: 0
          },
          resolution: {
            x: 0,
            y: 0,
            z: 1
          },
          date: {
            x: t.getYear(),
            y: t.getMonth(),
            z: t.getDate(),
            w: t.getTime() + t.getMilliseconds() / 1e3
          },
          isMouseDown: !1
        }, this.node.on(cc.Node.EventType.MOUSE_DOWN, function() {
          this.parameters.isMouseDown = !0
        }, this), this.node.on(cc.Node.EventType.MOUSE_UP, function() {
          this.parameters.isMouseDown = !1
        }, this), this.node.on(cc.Node.EventType.MOUSE_LEAVE, function() {
          this.parameters.isMouseDown = !1
        }, this), this.node.on(cc.Node.EventType.TOUCH_START, function() {
          this.parameters.isMouseDown = !0
        }, this), this.node.on(cc.Node.EventType.TOUCH_END, function() {
          this.parameters.isMouseDown = !1
        }, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, function() {
          this.parameters.isMouseDown = !1
        }, this), this.node.on(cc.Node.EventType.MOUSE_MOVE, function(e) {
          this.parameters.isMouseDown && (this.parameters.mouse.x = e.getLocationX(), this.parameters.mouse.y = e.getLocationY())
        }, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
          this.parameters.isMouseDown && (this.parameters.mouse.x = e.getLocationX(), this.parameters.mouse.y = e.getLocationY())
        }, this), cc.loader.loadRes(e.flagShader, function(t, o) {
          t ? cc.log(t) : (e.frag_glsl = o, e._use())
        })
      },
      update: function(e) {
        if (this.glassFactor >= 40 && (this.glassFactor = 0), this.glassFactor += 3 * e, this._program)
          if (this._program.use(), this.updateGLParameters(), cc.sys.isNative) {
            var t = cc.GLProgramState.getOrCreateWithGLProgram(this._program);
            t.setUniformVec3("iResolution", this.parameters.resolution), t.setUniformFloat("iGlobalTime", this.parameters.time), t.setUniformVec4("iMouse", this.parameters.mouse), t.setUniformVec4("iDate", this.parameters.date)
          } else this._program.setUniformLocationWith3f(this._resolution, this.parameters.resolution.x, this.parameters.resolution.y, this.parameters.resolution.z), this._program.setUniformLocationWith1f(this._time, this.parameters.time), this._program.setUniformLocationWith4f(this._mouse, this.parameters.mouse.x, this.parameters.mouse.y, this.parameters.mouse.z, this.parameters.mouse.w), this._program.setUniformLocationWith4f(this._date, this.parameters.date.x, this.parameters.date.y, this.parameters.date.z, this.parameters.date.w)
      },
      updateGLParameters: function() {
        this.parameters.time = (Date.now() - this.parameters.startTime) / 1e3, this.parameters.resolution.x = this.node.getContentSize().width, this.parameters.resolution.y = this.node.getContentSize().height;
        var e = new Date;
        this.parameters.date = {
          x: e.getYear(),
          y: e.getMonth(),
          z: e.getDate(),
          w: e.getTime() + e.getMilliseconds() / 1e3
        }
      },
      _use: function() {
        if (cc.sys.isNative ? (cc.log("use native GLProgram"), this._program = new cc.GLProgram, this._program.initWithString(n, this.frag_glsl), this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_POSITION, cc.macro.VERTEX_ATTRIB_POSITION), this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_COLOR, cc.macro.VERTEX_ATTRIB_COLOR), this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_TEX_COORD, cc.macro.VERTEX_ATTRIB_TEX_COORDS), this._program.link(), this._program.updateUniforms(), this.updateGLParameters()) : (this._program = new cc.GLProgram, this._program.initWithVertexShaderByteArray(o, this.frag_glsl), this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_POSITION, cc.macro.VERTEX_ATTRIB_POSITION), this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_COLOR, cc.macro.VERTEX_ATTRIB_COLOR), this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_TEX_COORD, cc.macro.VERTEX_ATTRIB_TEX_COORDS), this._program.link(), this._program.updateUniforms(), this._program.use(), this.updateGLParameters(), this._program.setUniformLocationWith3f(this._program.getUniformLocationForName("iResolution"), this.parameters.resolution.x, this.parameters.resolution.y, this.parameters.resolution.z), this._program.setUniformLocationWith1f(this._program.getUniformLocationForName("iGlobalTime"), this.parameters.time), this._program.setUniformLocationWith4f(this._program.getUniformLocationForName("iMouse"), this.parameters.mouse.x, this.parameters.mouse.y, this.parameters.mouse.z, this.parameters.mouse.w), this._program.setUniformLocationWith4f(this._program.getUniformLocationForName("iDate"), this.parameters.date.x, this.parameters.date.y, this.parameters.date.z, this.parameters.date.w)), cc.sys.isNative) {
          var e = cc.GLProgramState.getOrCreateWithGLProgram(this._program);
          e.setUniformVec3("iResolution", this.parameters.resolution), e.setUniformFloat("iGlobalTime", this.parameters.time), e.setUniformVec4("iMouse", this.parameters.mouse)
        } else this._resolution = this._program.getUniformLocationForName("iResolution"), this._time = this._program.getUniformLocationForName("iGlobalTime"), this._mouse = this._program.getUniformLocationForName("iMouse"), this._program.setUniformLocationWith3f(this._resolution, this.parameters.resolution.x, this.parameters.resolution.y, this.parameters.resolution.z), this._program.setUniformLocationWith1f(this._time, this.parameters.time), this._program.setUniformLocationWith4f(this._mouse, this.parameters.mouse.x, this.parameters.mouse.y, this.parameters.mouse.z, this.parameters.mouse.w), this._program.setUniformLocationWith4f(this._date, this.parameters.date.x, this.parameters.date.y, this.parameters.date.z, this.parameters.date.w);
        this.setProgram(this.node._sgNode, this._program)
      },
      setProgram: function(e, t) {
        if (cc.sys.isNative) {
          var o = cc.GLProgramState.getOrCreateWithGLProgram(t);
          e.setGLProgramState(o)
        } else e.setShaderProgram(t);
        var n = e.children;
        if (n)
          for (var i = 0; i < n.length; i++) this.setProgram(n[i], t)
      }
    }), cc._RF.pop()
  }, {
    "./ccShader_Default_Vert.js": "ccShader_Default_Vert",
    "./ccShader_Default_Vert_noMVP.js": "ccShader_Default_Vert_noMVP"
  }],
  GameConfig: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "613201hKz1Mo6n8k1CXUefW", "GameConfig");
    var n, i = this && this.__extends || (n = function(e, t) {
      return (n = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, t) {
          e.__proto__ = t
        } || function(e, t) {
          for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
        })(e, t)
    }, function(e, t) {
      function o() {
        this.constructor = e
      }
      n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
    });
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var r = function(e) {
      function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.version = "1.0", t.url_api = "https://gameapi.com", t.url_apiPath = "/v2/demogame", t.warning_msg_start_scene = "", t.message_dontgiveup = [], t.message_tryagain = [], t.message_goodjob = [], t
      }
      return i(t, e), t.prototype.parseConfig = function(e) {
        var t;
        e.version && (this.version = e.version), e.url_api && (this.url_api = e.url_api), e.url_apiPath && (this.url_apiPath = e.url_apiPath), e.warning_msg_start_scene && (this.warning_msg_start_scene = null !== (t = e.warning_msg_start_scene) && void 0 !== t ? t : ""), e.message_dontgiveup && (this.message_dontgiveup = e.message_dontgiveup), e.message_tryagain && (this.message_tryagain = e.message_tryagain), e.message_goodjob && (this.message_goodjob = e.message_goodjob)
      }, t
    }(e("./BaseConfig").default);
    o.default = r, cc._RF.pop()
  }, {
    "./BaseConfig": "BaseConfig"
  }],
  GamePlay: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "b7bd3PMyXVP+YDdy7mhi+wT", "GamePlay");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.GamePlay = void 0;
    var a = e("../../framework/audio/AudioManager"),
      c = e("../../framework/audio/eSoundDefine"),
      s = e("../../framework/ePrefabDefine"),
      u = e("../../framework/network/HttpUtils"),
      l = e("../../framework/ui/UIPopup"),
      p = e("../../framework/ui/UIPopupManager"),
      d = e("../../framework/ui/UIScreen"),
      f = e("../../framework/ui/UIScreenManager"),
      h = e("../../framework/utils/ClientData"),
      g = e("../../framework/utils/PrefabUtils"),
      _ = e("../../framework/zai/GlobalEvent"),
      y = e("../config/ioe_config"),
      m = e("../network/ApiDefine"),
      v = e("./common/CheckPoint"),
      b = e("./common/TextDongVien"),
      C = e("./ui/QuestionComponent"),
      O = e("./ui/content/ContentComponent"),
      S = e("./ui/profile/Profile"),
      P = cc._decorator,
      I = P.ccclass,
      w = P.property,
      E = function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.questComs = [], t.currentQuestionId = 0, t.isEndGame = !1, t
        }
        return i(t, e), t.prototype.handleParams = function(e) {
          this.data = e
        }, t.prototype.start = function() {
          var e = this;
          this.playBgMusicIfHaveSoundQuest(), this.nProfile.startGame(function() {
            console.log("het gio lam bai ...."), e.isEndGame || e.endGame()
          }), this.spineClimb.setAnimation(0, "moving", !0), this.nCheckPoint.beginPlay()
        }, t.prototype.onLoad = function() {
          _.default.instance.addListener(_.GlobalEventName.IOE_SHOW_QUEST, this.onNextQuestion, this), _.default.instance.addListener(_.GlobalEventName.IOE_CLIMB_NEXT_CHECKPOINT, this.onClimbNextCheckPoint, this), _.default.instance.addListener(_.GlobalEventName.IOE_CLIMB_TO_FANSIPAN, this.onFansifanPass, this), _.default.instance.addListener(_.GlobalEventName.IOE_ANSWER_RESULT, this.onResultQuestion, this), _.default.instance.addListener(_.GlobalEventName.IOE_CALL_ENDGAME, this.onCallEnGame, this)
        }, t.prototype.onDestroy = function() {
          _.default.instance.removeListener(this)
        }, t.prototype.playBgMusicIfHaveSoundQuest = function() {
          var e = h.default.AppModel.game.questionArr || [];
          e && e.length && (e[this.currentQuestionId].questionDescription.contentType == O.eContentType.Audio ? a.default.instance.pauseBgMusic() : a.default.instance.resumeMusic())
        }, t.prototype.onNextQuestion = function() {
          this.showQuestion(), this.spineClimb.setAnimation(0, "sad", !1)
        }, t.prototype.onClimbNextCheckPoint = function() {
          var e = h.default.AppModel.game.questionArr || [];
          this.currentQuestionId >= e.length ? h.default.wrongAnsTotal <= 3 ? (0 == h.default.wrongAnsTotal ? this.spineClimb.setAnimation(0, "movingflag", !0) : this.spineClimb.setAnimation(0, "moving", !0), this.nCheckPoint.beginPlay(), console.log("onClimbNextCheckPoint wrongAnsTotal=", 0, " gameEnd= ", this.nCheckPoint.gameEnd, " isGameRun= ", this.nCheckPoint.isGameRun)) : (this.endGame(), this.nCheckPoint.showFanfisifanOnly()) : (this.spineClimb.setAnimation(0, "moving", !0), this.nCheckPoint.beginPlay()), this.hideAllQuest()
        }, t.prototype.onResultQuestion = function(e, t) {
          if (t.playerId == h.SpinePlayer.PlayerMeId) {
            console.log("test time data.isCorrect" + t.isCorrect);
            var o = t.isCorrect;
            this.spineClimb.setAnimation(0, t.isCorrect ? "happy" : "fall", !1), a.default.instance.playSfx(o ? c.eSoundDefine.correct : c.eSoundDefine.wrong), a.default.instance.stopAudioQuest()
          }
        }, t.prototype.onFansifanPass = function() {
          var e = this,
            t = 0 == h.default.wrongAnsTotal;
          this.spineClimb.node.active = !t, this.spineWin.node.active = t, t ? this.spineWin.setAnimation(0, "idle", !0) : this.spineClimb.setAnimation(0, "sad", !0), setTimeout(function() {
            e.endGame()
          }, 1e3 * y.IOE.TIME_TO_NEXT_QUEST)
        }, t.prototype.onCallEnGame = function() {
          var e = h.default.AppModel.game.questionArr || [];
          this.currentQuestionId >= e.length && this.endGame()
        }, t.prototype.showQuestion = function(e) {
          void 0 === e && (e = !1), e && this.resetStateAllView();
          var t = h.default.AppModel.game.questionArr || [];
          if (console.log("question arr ....currentQuestionId=", this.currentQuestionId, " totalQuest=", t.length), t.length) {
            if (!(this.currentQuestionId >= t.length)) {
              var o = t[this.currentQuestionId];
              this.currentQuestionId++;
              for (var n = 0; n < this.questComs.length; n++) this.questComs[n].showWithQuestion(o, this.currentQuestionId)
            }
          } else cc.log("question empty....")
        }, t.prototype.resetStateAllView = function() {}, t.prototype.endGame = function() {
          var e = this;
          if (console.log("endGame"), !this.isEndGame) {
            a.default.instance.stopAudioQuest(), this.nCheckPoint.endPlay();
            var t = {
              api_key: h.default.API_KEY,
              token: h.default.AppModel.token,
              serviceCode: h.default.SERVICE_CODE,
              examKey: h.default.AppModel.game.examKey,
              ans: h.default.ans,
              IPClient: h.default.IpClient,
              deviceId: h.default.DeviceId
            };
            u.default.postApi(m.ApiDefine.FINISH_GAME, t, function(t) {
              if (console.log("endGame res", t, !t.success, !t.data), t && t.success && t.data) {
                e.isEndGame = !0, a.default.instance.resumeMusic(), e.nProfile.stopCountDown();
                var o = t.data;
                console.log("endGame responseObj", o), e.showEndGameScene(o.data)
              } else {
                var n = t.error && t.error.msg ? t.error.msg : JSON.stringify(t.data);
                p.default.instance.showPopupError(n, !1, [l.PopupAction.make("", function() {
                  t.data && t.data.redirectUrl ? window.location.href = t.data.redirectUrl : t.tokenExpire && (window.location.href = h.default.redirectUrl)
                }, !0)])
              }
            }, !1)
          }
        }, t.prototype.showEndGameScene = function(e) {
          console.log("showEndGameScene ", e), h.default.correctPercent = e.point / (e.examScore || h.default.AppModel.game.totalPoint), 1 == h.default.correctPercent || (h.default.correctPercent, this.spineClimb.setAnimation(0, "sad", !0)), this.nTextDongVien.showWithResult(), a.default.instance.stopAudioQuest(), this.hideAllQuest(), cc.tween(this).delay(y.IOE.DELAY_SHOW_TEXT_END_GAME).call(function() {
            f.default.instance.replaceScreen(g.default.getPrefab(s.ePrefabDefine.POPUP_ENDGAME), function(t) {
              t.handleParams(e)
            })
          }).start()
        }, t.prototype.hideAllQuest = function() {
          for (var e = 0; e < this.questComs.length; e++) this.questComs[e].node.active = !1
        }, r([w(C.default)], t.prototype, "questComs", void 0), r([w(S.Profile)], t.prototype, "nProfile", void 0), r([w(b.TextDongVien)], t.prototype, "nTextDongVien", void 0), r([w(v.CheckPoint)], t.prototype, "nCheckPoint", void 0), r([w({
          type: sp.Skeleton
        })], t.prototype, "spineClimb", void 0), r([w({
          type: sp.Skeleton
        })], t.prototype, "spineWin", void 0), r([I], t)
      }(d.default);
    o.GamePlay = E, cc._RF.pop()
  }, {
    "../../framework/audio/AudioManager": "AudioManager",
    "../../framework/audio/eSoundDefine": "eSoundDefine",
    "../../framework/ePrefabDefine": "ePrefabDefine",
    "../../framework/network/HttpUtils": "HttpUtils",
    "../../framework/ui/UIPopup": "UIPopup",
    "../../framework/ui/UIPopupManager": "UIPopupManager",
    "../../framework/ui/UIScreen": "UIScreen",
    "../../framework/ui/UIScreenManager": "UIScreenManager",
    "../../framework/utils/ClientData": "ClientData",
    "../../framework/utils/PrefabUtils": "PrefabUtils",
    "../../framework/zai/GlobalEvent": "GlobalEvent",
    "../config/ioe_config": "ioe_config",
    "../network/ApiDefine": "ApiDefine",
    "./common/CheckPoint": "CheckPoint",
    "./common/TextDongVien": "TextDongVien",
    "./ui/QuestionComponent": "QuestionComponent",
    "./ui/content/ContentComponent": "ContentComponent",
    "./ui/profile/Profile": "Profile"
  }],
  GameScene: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "debb8Xq7oVOh49MiErBG9tl", "GameScene");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var a = e("../ePrefabDefine"),
      c = e("../utils/Utils"),
      s = e("../config/ConfigLoader"),
      u = e("../config/ReviewConfig"),
      l = e("../utils/PlatformUtils"),
      p = e("../utils/StringUtils"),
      d = e("../ui/UIScreenManager"),
      f = e("../utils/PrefabUtils"),
      h = e("../config/GameConfig"),
      g = e("../network/Connector"),
      _ = e("../zai/global/Global"),
      y = e("../utils/ClientData"),
      m = cc._decorator,
      v = m.ccclass,
      b = (m.property, function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t._isGameActive = !0, t._scheduler = null, t.hideTime = null, t
        }
        var o;
        return i(t, e), o = t, Object.defineProperty(t.prototype, "isGameActive", {
          set: function(e) {
            this._isGameActive = e
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype.onEnable = function() {
          cc.game.on(cc.game.EVENT_SHOW, this._onShowGame, this), cc.game.on(cc.game.EVENT_HIDE, this._onHideGame, this)
        }, t.prototype.onDisable = function() {
          cc.game.off(cc.game.EVENT_SHOW, this._onShowGame, this), cc.game.off(cc.game.EVENT_HIDE, this._onHideGame, this)
        }, t.prototype.updateOffline = function() {
          this._isGameActive || cc.sys.isBrowser
        }, t.prototype._onShowGame = function() {
          if (this._isGameActive = !0, cc.sys.isNative && cc.sys.isMobile && this.hideTime) {
            var e = (performance.now() - this.hideTime) / 1e3;
            console.log("update offline native mobile... " + e);
            for (var t = 0; t < e;) {
              var o = Math.min(.1, e - t);
              cc.director.getScheduler().update(o), t += o
            }
            this.hideTime = null
          }
        }, t.prototype._onHideGame = function() {
          this._isGameActive = !1, cc.sys.isNative && cc.sys.isMobile && (this.hideTime = performance.now())
        }, Object.defineProperty(t, "instance", {
          get: function() {
            return cc.Canvas.instance.getComponent(o)
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype.checkRv = function() {
          var e = s.default.instance.getConfig(u.default);
          if (e.rv_ing) return !1;
          for (var t = 0, o = e.al_loc; t < o.length; t++)
            if (o[t].toLowerCase() == l.default.getNation().toLowerCase()) return !0;
          return !1
        }, t.prototype.onLoad = function() {
          _.ZaiGlobal.hotFixCreator(), this._scheduler = window.setInterval(this.updateOffline.bind(this), 1e3 / 60), cc.sys.isNative && cc.sys.isMobile, cc.view.resizeWithBrowserSize(!0), cc.debug.setDisplayStats(!1), cc.director.getCollisionManager().enabled = !0, cc.log("getCanvasSize: " + cc.view.getCanvasSize()), cc.log("getFrameSize: " + cc.view.getFrameSize()), c.default.alignView()
        }, t.prototype.logTime = function(e) {
          var t = p.default.stampToString((new Date).getTime(), "\n");
          console.log("test time " + e + " ==> " + t)
        }, t.prototype.start = function() {
          var e = this;
          this.logTime("start");
          var t = [a.ePrefabDefine.LOADING_DIALOG, a.ePrefabDefine.HOT_UPDATE];
          cc.loader.loadResArray(t, cc.Prefab, function(t) {
            t && cc.error(t), e.loadIoeConfig()
          })
        }, t.prototype.loadIoeConfig = function() {
          var e = this;
          s.default.instance.loadConfig("gameConfig.json", h.default, function() {
            e.logTime("gameConfig done"), e.logTime("gameConfig...."), cc.log("gameConfig console");
            var t = s.default.instance.getConfig(h.default);
            y.default.GameConfig = t, cc.log("gameConfig config ", t), g.default.apiUrl = t.url_api, g.default.apiPath = t.url_apiPath, console.log("config ", t), 0 != g.default.apiUrl.startsWith("http") ? (0 == g.default.apiPath.startsWith("/") && (g.default.apiPath = "/" + g.default.apiPath), console.log("Connector.apiUrl ", g.default.apiUrl), console.log("Connector.apiPath ", g.default.apiPath), d.default.instance.initWithRootNode(f.default.createNode(a.ePrefabDefine.HOT_UPDATE))) : alert("apiUrl config without https")
          }, window.location.href.substring(0, window.location.href.lastIndexOf("/")))
        }, o = r([v], t)
      }(cc.Component));
    o.default = b, cc._RF.pop()
  }, {
    "../config/ConfigLoader": "ConfigLoader",
    "../config/GameConfig": "GameConfig",
    "../config/ReviewConfig": "ReviewConfig",
    "../ePrefabDefine": "ePrefabDefine",
    "../network/Connector": "Connector",
    "../ui/UIScreenManager": "UIScreenManager",
    "../utils/ClientData": "ClientData",
    "../utils/PlatformUtils": "PlatformUtils",
    "../utils/PrefabUtils": "PrefabUtils",
    "../utils/StringUtils": "StringUtils",
    "../utils/Utils": "Utils",
    "../zai/global/Global": "Global"
  }],
  GlobalEvent: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "a44f2ZydxFNtoW56IRyg1g8", "GlobalEvent"), Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.GlobalEventName = void 0;
    var n = function() {
      function e() {
        this.isBlocked = !1, this.allListener = null
      }
      return Object.defineProperty(e, "instance", {
        get: function() {
          return null === e.m_instance && (e.m_instance = new e, e.m_instance.init()), e.m_instance
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.init = function() {
        this.allListener = [], this.isBlocked = !1
      }, e.prototype.removeListener = function(e, t) {
        for (var o in void 0 === t && (t = null), this.allListener)
          if (this.allListener.hasOwnProperty(o))
            for (var n = this.allListener[o], i = 0; i < n.length;) {
              if (n[i] && n[i].target === e && (!t || n[i].listener === t)) {
                if (!this.isBlocked) {
                  n.splice(i, 1);
                  continue
                }
                n[i] = null
              }
              i++
            }
      }, e.prototype.addListener = function(e, t, o) {
        var n = this.allListener[e];
        n || (n = [], this.allListener[e] = n);
        for (var i = 0; i < n.length; i++)
          if (n[i] && n[i].target === o) return;
        n.push({
          listener: t,
          target: o
        })
      }, e.prototype.postEvent = function(e, t) {
        var o = this.allListener[e];
        if (o) {
          this.isBlocked = !0;
          for (var n = 0; n < o.length;) {
            var i = o[n];
            i ? (i.listener.apply(i.target, [e, t]), n++) : o.splice(n, 1)
          }
          this.isBlocked = !1
        }
      }, e.m_instance = null, e
    }();
    o.default = n;
    var i = function() {
      function e() {}
      return e.LOGIN_DONE = "LOGIN_DONE", e.ON_MUSIC_RESET = "onMusicReset", e.IOE_NEW_SCORE = "IOE_NEW_SCORE", e.IOE_ANSWER_RESULT = "IOE_ANSWER_RESULT", e.IOE_NEW_STATE_BTN = "IOE_NEW_STATE_BTN", e.IOE_PLAYER_ME_STATE = "IOE_PLAYER_ME_STATE", e.IOE_BOT_PLAYER_SPEED = "IOE_BOT_PLAYER_SPEED", e.IOE_CLIMB_NEXT_CHECKPOINT = "IOE_CLIMB_NEXT_CHECKPOINT", e.IOE_SHOW_QUEST = "IOE_SHOW_QUEST", e.IOE_CALL_ENDGAME = "IOE_CALL_ENDGAME", e.IOE_CLIMB_TO_FANSIPAN = "IOE_CLIMB_TO_FANSIPAN", e.AUDIO_QUEST_END = "AUDIO_QUEST_END", e.AUDIO_QUEST_START = "AUDIO_QUEST_START", e
    }();
    o.GlobalEventName = i, cc._RF.pop()
  }, {}],
  Global: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "74a2a0QQOtJ5rHOURECvazm", "Global"), Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.ZaiGlobal = void 0,
      function(e) {
        e.DEMO_MOBILE = !0;
        var t = ["", "K", "M", "B"];

        function o(e, t, o) {
          return e.substr(0, t) + o + e.substr(t)
        }

        function n(e) {
          if ("number" == typeof e) return !0;
          var t = e.replace(/[.,]/g, "");
          return new RegExp("^[0-9]+$").test(t)
        }
        e.insertAt = o, e.NumberFormat1 = function(e, t) {
          void 0 === t && (t = ".");
          var n = Math.abs(Math.floor(e)).toString();
          if (n.length > 3)
            for (var i = n.length - 3; i > 0; i -= 3) n = o(n, i, t);
          return e < 0 ? "-" + n : n
        }, e.NumberFormat2 = function(e, o) {
          for (var n = 0; e >= 1e3;) e = o ? parseFloat(Number(e / 1e3).toFixed(o)) : Math.floor(e / 1e3), n++;
          return e.toString() + t[n]
        }, e.NumberFormatWithPadding = function(e, t) {
          if (null == t && (t = 2), e < 0) return e.toString();
          for (var o = e.toString(); o.length < t;) o = "0" + o;
          return o
        }, e.NumberFromString = function(e) {
          var t = e.replace(/[.,]/g, "");
          return t && n(t) ? parseInt(t) : null
        }, e.IsNumber = n, e.isEnglishChar = function(e) {
          return /^[A-Za-z]*$/.test(e)
        }, e.hotFixCreator = function() {
          cc.textUtils.label_wordRex = /([a-zA-Z0-9\u0111\u0110\xc1\xe1\xc0\xe0\xc3\xe3\u1ea2\u1ea3\u1ea0\u1ea1\xc2\xe2\u1ea4\u1ea5\u1ea6\u1ea7\u1eaa\u1eab\u1ea8\u1ea9\u1eac\u1ead\u0102\u0103\u1eae\u1eaf\u1eb0\u1eb1\u1eb4\u1eb5\u1eb2\u1eb3\u1eb6\u1eb7\xc9\xe9\xc8\xe8\u1ebc\u1ebd\u1eba\u1ebb\u1eb8\u1eb9\xea\u1ebe\u1ebf\u1ec0\u1ec1\u1ec4\u1ec5\u1ec2\u1ec3\u1ec6\u1ec7\xcd\xed\xcc\xec\u0128\u0129\u1ec8\u1ec9\u1eca\u1ecb\xd3\xf3\xd2\xf2\xd5\xf5\u1ece\u1ecf\u1ecc\u1ecd\xd4\xf4\u1ed0\u1ed1\u1ed2\u1ed3\u1ed6\u1ed7\u1ed4\u1ed5\u1ed8\u1ed9\u01a0\u01a1\u1eda\u1edb\u1edc\u1edd\u1ee0\u1ee1\u1ede\u1edf\u1ee2\u1ee3\xda\xfa\xd9\xf9\u0168\u0169\u1ee6\u1ee7\u1ee4\u1ee5\u01af\u01b0\u1ee8\u1ee9\u1eea\u1eeb\u1eee\u1eef\u1eec\u1eed\u1ef0\u1ef1\xdd\xfd\u1ef2\u1ef3\u1ef8\u1ef9\u1ef6\u1ef7\u1ef4\u1ef5'_]+|\S)/, cc.textUtils.label_symbolRex = /^[!,.:;}\]%\?>\u3001\u2018\u201c\u300b\uff1f\u3002\uff0c\uff01]/, cc.textUtils.label_lastWordRex = /([a-zA-Z0-9\u0111\u0110\xc1\xe1\xc0\xe0\xc3\xe3\u1ea2\u1ea3\u1ea0\u1ea1\xc2\xe2\u1ea4\u1ea5\u1ea6\u1ea7\u1eaa\u1eab\u1ea8\u1ea9\u1eac\u1ead\u0102\u0103\u1eae\u1eaf\u1eb0\u1eb1\u1eb4\u1eb5\u1eb2\u1eb3\u1eb6\u1eb7\xc9\xe9\xc8\xe8\u1ebc\u1ebd\u1eba\u1ebb\u1eb8\u1eb9\xea\u1ebe\u1ebf\u1ec0\u1ec1\u1ec4\u1ec5\u1ec2\u1ec3\u1ec6\u1ec7\xcd\xed\xcc\xec\u0128\u0129\u1ec8\u1ec9\u1eca\u1ecb\xd3\xf3\xd2\xf2\xd5\xf5\u1ece\u1ecf\u1ecc\u1ecd\xd4\xf4\u1ed0\u1ed1\u1ed2\u1ed3\u1ed6\u1ed7\u1ed4\u1ed5\u1ed8\u1ed9\u01a0\u01a1\u1eda\u1edb\u1edc\u1edd\u1ee0\u1ee1\u1ede\u1edf\u1ee2\u1ee3\xda\xfa\xd9\xf9\u0168\u0169\u1ee6\u1ee7\u1ee4\u1ee5\u01af\u01b0\u1ee8\u1ee9\u1eea\u1eeb\u1eee\u1eef\u1eec\u1eed\u1ef0\u1ef1\xdd\xfd\u1ef2\u1ef3\u1ef8\u1ef9\u1ef6\u1ef7\u1ef4\u1ef5'_]+|\S)$/, cc.textUtils.label_lastEnglish = /[a-zA-Z0-9\u0111\u0110\xc1\xe1\xc0\xe0\xc3\xe3\u1ea2\u1ea3\u1ea0\u1ea1\xc2\xe2\u1ea4\u1ea5\u1ea6\u1ea7\u1eaa\u1eab\u1ea8\u1ea9\u1eac\u1ead\u0102\u0103\u1eae\u1eaf\u1eb0\u1eb1\u1eb4\u1eb5\u1eb2\u1eb3\u1eb6\u1eb7\xc9\xe9\xc8\xe8\u1ebc\u1ebd\u1eba\u1ebb\u1eb8\u1eb9\xea\u1ebe\u1ebf\u1ec0\u1ec1\u1ec4\u1ec5\u1ec2\u1ec3\u1ec6\u1ec7\xcd\xed\xcc\xec\u0128\u0129\u1ec8\u1ec9\u1eca\u1ecb\xd3\xf3\xd2\xf2\xd5\xf5\u1ece\u1ecf\u1ecc\u1ecd\xd4\xf4\u1ed0\u1ed1\u1ed2\u1ed3\u1ed6\u1ed7\u1ed4\u1ed5\u1ed8\u1ed9\u01a0\u01a1\u1eda\u1edb\u1edc\u1edd\u1ee0\u1ee1\u1ede\u1edf\u1ee2\u1ee3\xda\xfa\xd9\xf9\u0168\u0169\u1ee6\u1ee7\u1ee4\u1ee5\u01af\u01b0\u1ee8\u1ee9\u1eea\u1eeb\u1eee\u1eef\u1eec\u1eed\u1ef0\u1ef1\xdd\xfd\u1ef2\u1ef3\u1ef8\u1ef9\u1ef6\u1ef7\u1ef4\u1ef5'_]+$/, cc.textUtils.label_firstEnglish = /^[a-zA-Z0-9\u0111\u0110\xc1\xe1\xc0\xe0\xc3\xe3\u1ea2\u1ea3\u1ea0\u1ea1\xc2\xe2\u1ea4\u1ea5\u1ea6\u1ea7\u1eaa\u1eab\u1ea8\u1ea9\u1eac\u1ead\u0102\u0103\u1eae\u1eaf\u1eb0\u1eb1\u1eb4\u1eb5\u1eb2\u1eb3\u1eb6\u1eb7\xc9\xe9\xc8\xe8\u1ebc\u1ebd\u1eba\u1ebb\u1eb8\u1eb9\xea\u1ebe\u1ebf\u1ec0\u1ec1\u1ec4\u1ec5\u1ec2\u1ec3\u1ec6\u1ec7\xcd\xed\xcc\xec\u0128\u0129\u1ec8\u1ec9\u1eca\u1ecb\xd3\xf3\xd2\xf2\xd5\xf5\u1ece\u1ecf\u1ecc\u1ecd\xd4\xf4\u1ed0\u1ed1\u1ed2\u1ed3\u1ed6\u1ed7\u1ed4\u1ed5\u1ed8\u1ed9\u01a0\u01a1\u1eda\u1edb\u1edc\u1edd\u1ee0\u1ee1\u1ede\u1edf\u1ee2\u1ee3\xda\xfa\xd9\xf9\u0168\u0169\u1ee6\u1ee7\u1ee4\u1ee5\u01af\u01b0\u1ee8\u1ee9\u1eea\u1eeb\u1eee\u1eef\u1eec\u1eed\u1ef0\u1ef1\xdd\xfd\u1ef2\u1ef3\u1ef8\u1ef9\u1ef6\u1ef7\u1ef4\u1ef5'_]/
        }
      }(o.ZaiGlobal || (o.ZaiGlobal = {})), cc._RF.pop()
  }, {}],
  HotUpdate: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "b1113a58ZFHBa20OkkCenhR", "HotUpdate");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var a = e("../loading/Loading"),
      c = e("../ui/UIPopupManager"),
      s = e("../ui/UIPopup"),
      u = e("../config/ConfigLoader"),
      l = e("../utils/StringUtils"),
      p = e("../utils/PlatformUtils"),
      d = e("../ePrefabDefine"),
      f = e("../utils/ClientData"),
      h = cc._decorator,
      g = h.ccclass,
      _ = h.property,
      y = function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.lbVersion = null, t.checkConfig = !1, t.hotUpdate = !0, t._storagePath = "", t.aesKey = "M7fNnsg1yGvaDHJm", t.arrUrl = ["https://abccfg.ap-south-1.linodeobjects.com/cfg", "https://abccfg2.ap-south-1.linodeobjects.com/cfg"], t.requestCounter = 0, t
        }
        var o;
        return i(t, e), o = t, t.prototype.checkReview = function(e) {
          if (e.inReview) return !1;
          for (var t = 0, o = e.arrLocation; t < o.length; t++)
            if (o[t].toLowerCase() == p.default.getNation().toLowerCase()) return !0;
          return !1
        }, t.prototype.requestGet = function(e, t) {
          if (0 === e.search("http://") || 0 === e.search("https://")) {
            var o = new XMLHttpRequest;
            o.onload = function() {
              t && t(o.responseText)
            }, o.onerror = function() {
              t && t(null)
            }, o.timeout = 3e4, o.open("GET", e), o.setRequestHeader("Content-Type", "application/json"), o.send()
          }
        }, t.prototype.updateCallback = function(e) {
          switch (cc.log("updateCallback -- " + e.getEventCode()), e.getEventCode()) {
            case jsb.EventAssetsManager.UPDATE_PROGRESSION:
              var t = u.default.CFS("msg_updating_version") + e.getDownloadedFiles() + " / " + e.getTotalFiles(),
                o = e.getMessage();
              o && (t += "\n" + o), this.lbLoading && (this.lbLoading.string = t), this.pgLoading && (this.pgLoading.progress = e.getPercent());
              break;
            case jsb.EventAssetsManager.UPDATE_FINISHED:
              this.lbLoading && (this.lbLoading.string = u.default.CFS("msg_update_version_finished")), this.restartGame();
              break;
            case jsb.EventAssetsManager.UPDATE_FAILED:
              this.lbLoading.string = u.default.CFS("msg_update_version_failed"), c.default.instance.showSystemDialog(u.default.CFS("msg_update_version_failed") + "\n" + e.getMessage(), [s.PopupAction.make(u.default.CFS("act_restart"), function() {
                this.restartGame()
              }, !1)]);
              break;
            case jsb.EventAssetsManager.ERROR_UPDATING:
              this.lbLoading && (this.lbLoading.string = u.default.CFS("msg_update_version_error") + "\n" + e.getAssetId() + "\n" + e.getMessage());
              break;
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
              cc.log("ERROR_NO_LOCAL_MANIFEST");
              break;
            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
              cc.log("ERROR_DOWNLOAD_MANIFEST");
              break;
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
              cc.log("ERROR_PARSE_MANIFEST");
              break;
            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
              this.lbLoading && (this.lbLoading.string = u.default.CFS("msg_latest_version")), this.onHotUpdateFinished();
              break;
            case jsb.EventAssetsManager.NEW_VERSION_FOUND:
              this.lbLoading && (this.lbLoading.string = u.default.CFS("msg_new_version")), this.pgLoading && (this.pgLoading.progress = 0), this.startHotUpdate();
              break;
            default:
              return
          }
        }, t.prototype.aes2 = function(e) {
          var t = {
              _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
              encode: function(e) {
                var o, n, i, r, a, c, s, u = "",
                  l = 0;
                for (e = t._utf8_encode(e); l < e.length;) r = (o = e.charCodeAt(l++)) >> 2, a = (3 & o) << 4 | (n = e.charCodeAt(l++)) >> 4, c = (15 & n) << 2 | (i = e.charCodeAt(l++)) >> 6, s = 63 & i, isNaN(n) ? c = s = 64 : isNaN(i) && (s = 64), u = u + this._keyStr.charAt(r) + this._keyStr.charAt(a) + this._keyStr.charAt(c) + this._keyStr.charAt(s);
                return u
              },
              decode: function(e) {
                var o, n, i, r, a, c, s = "",
                  u = 0;
                for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); u < e.length;) o = this._keyStr.indexOf(e.charAt(u++)) << 2 | (r = this._keyStr.indexOf(e.charAt(u++))) >> 4, n = (15 & r) << 4 | (a = this._keyStr.indexOf(e.charAt(u++))) >> 2, i = (3 & a) << 6 | (c = this._keyStr.indexOf(e.charAt(u++))), s += String.fromCharCode(o), 64 != a && (s += String.fromCharCode(n)), 64 != c && (s += String.fromCharCode(i));
                return t._utf8_decode(s)
              },
              _utf8_encode: function(e) {
                e = e.replace(/\r\n/g, "\n");
                for (var t = "", o = 0; o < e.length; o++) {
                  var n = e.charCodeAt(o);
                  n < 128 ? t += String.fromCharCode(n) : n > 127 && n < 2048 ? (t += String.fromCharCode(n >> 6 | 192), t += String.fromCharCode(63 & n | 128)) : (t += String.fromCharCode(n >> 12 | 224), t += String.fromCharCode(n >> 6 & 63 | 128), t += String.fromCharCode(63 & n | 128))
                }
                return t
              },
              _utf8_decode: function(e) {
                for (var t = "", o = 0, n = 0, i = 0, r = 0; o < e.length;)(n = e.charCodeAt(o)) < 128 ? (t += String.fromCharCode(n), o++) : n > 191 && n < 224 ? (i = e.charCodeAt(o + 1), t += String.fromCharCode((31 & n) << 6 | 63 & i), o += 2) : (i = e.charCodeAt(o + 1), r = e.charCodeAt(o + 2), t += String.fromCharCode((15 & n) << 12 | (63 & i) << 6 | 63 & r), o += 3);
                return t
              }
            },
            o = t.encode(this.aesKey),
            n = CryptoJS.enc.Base64.parse(o),
            i = CryptoJS.enc.Base64.parse(o),
            r = CryptoJS.enc.Base64.parse(e);
          return CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(r, n, {
            mode: CryptoJS.mode.CFB,
            padding: CryptoJS.pad.Pkcs7,
            iv: i
          }))
        }, t.prototype.loadLocalManifestIfNeeded = function() {
          this._am.getState() === jsb.AssetsManager.State.UNINITED && this._am.loadLocalManifest("assets/project.manifest")
        }, t.prototype.checkManifestUrl = function(e) {
          var t = this;
          if (this.loadLocalManifestIfNeeded(), !this._am.getLocalManifest() || !this._am.getLocalManifest().isLoaded()) return this.lbLoading && (this.lbLoading.string = u.default.CFS("msg_update_version_failed")), void this.onHotUpdateFinished();
          this.lbLoading && (this.lbLoading.string = u.default.CFS("msg_check_version")), this.requestGet(e, function(e) {
            try {
              var o = JSON.parse(e);
              if (o) {
                var n = new jsb.Manifest(JSON.stringify(o), t._storagePath);
                t._am.loadRemoteManifest(n)
              } else t.clearSearchPathAndRestart()
            } catch (i) {
              t.clearSearchPathAndRestart()
            }
          })
        }, t.prototype.startHotUpdate = function() {
          this._am && this._am.update()
        }, t.prototype.restartGame = function() {
          cc.log("re-start game"), cc.game.restart()
        }, t.prototype.startCheckConfig = function() {
          this.lbLoading && (this.lbLoading.string = u.default.CFS("msg_check_config")), this.scheduleOnce(this.checkRemoteConfig.bind(this))
        }, t.prototype.checkRemoteConfig = function() {
          var e = this;
          u.default.instance.requestChecksumConfig(function(t, o) {
            var n = u.default.CFS("msg_sync_config") + " " + l.default.humanFileSize(t) + "/" + l.default.humanFileSize(o) + "(" + l.default.percentString(t / o) + ")";
            e.lbLoading && (e.lbLoading.string = n), e.pgLoading && (e.pgLoading.progress = t / o)
          }, this.onConfigChecksumFinished.bind(this))
        }, t.prototype.onConfigChecksumFinished = function() {
          var e = this;
          this.lbLoading && (this.lbLoading.string = "\u0110ang t\u1ea3i d\u1eef li\u1ec7u"), this.logTime("begin load preloadPrefabCommon"), this.preloadPrefabCommon(function() {
            e.logTime("preloadPrefabCommon done"), u.default.instance.initConfigs(function() {
              e.loadResource(function() {
                e.logTime("show lobby done")
              })
            })
          })
        }, t.prototype.onHotUpdateFinished = function() {
          cc.log("onHotUpdateFinished"), this.checkConfig ? this.startCheckConfig() : this.onConfigChecksumFinished()
        }, t.prototype.preloadPrefabCommon = function(e) {
          var t = [];
          for (var o in d.ePrefabCommonLoad)
            if (!o.includes("/")) {
              var n = d.ePrefabCommonLoad[o];
              t.push(n)
            } cc.loader.loadResArray(t, cc.Prefab, function(t) {
            t && cc.error(t), e && e()
          })
        }, t.prototype.logTime = function(e) {
          var t = l.default.stampToString((new Date).getTime(), "\n");
          console.log("test time " + e + " ==> " + t)
        }, t.prototype.onLoad = function() {
          if (e.prototype.onLoad.call(this), cc.sys.isNative && cc.sys.isMobile, cc.sys.isNative && cc.sys.isMobile) {
            var t = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + "data-remote-asset";
            console.log("storagePath: " + t), this._storagePath = t, this._am = new jsb.AssetsManager("", t, this.versionCompareHandle), this._am.setEventCallback ? this._am.setEventCallback(this.updateCallback.bind(this)) : cc.log("old version detect------- ignore hotupdate"), cc.sys.os === cc.sys.OS_ANDROID || !cc.sys.isNative && cc.sys.isBrowser, this.lbVersion && (this.lbVersion.string = "v" + o.version)
          }
        }, t.prototype.onDestroy = function() {
          cc.sys.isNative && cc.sys.isMobile && this._am && !this._am.setEventCallback && cc.log("old version detect------- ignore hotupdate onDestroy")
        }, t.prototype.start = function() {
          f.default.setNumber("music", 1), this.checkHotUpdate()
        }, t.prototype.versionCompareHandle = function(e, t) {
          return cc.log("vCompare " + e + " " + t), o.version = t, this.lbVersion && (this.lbVersion.string = "v" + e.toString()), e == t ? (cc.log("versionCompareHandle no"), 0) : -1
        }, t.prototype.clearSearchPathAndRestart = function() {
          this.lbLoading && (this.lbLoading.string = u.default.CFS("msg_update_version_failed"))
        }, t.prototype.checkHotUpdate = function() {
          var e = this;
          if (cc.sys.isBrowser && (this.requestCounter = this.arrUrl.length), this.requestCounter < this.arrUrl.length) {
            var t = this.arrUrl[this.requestCounter] + "?t=" + (new Date).getTime();
            cc.log("request url " + t), this.requestGet(t, function(t) {
              try {
                var n = e.aes2(t),
                  i = JSON.parse(n);
                if (cc.log("res hotupdate ", i), i) {
                  for (var r = null, a = 0, c = i.arrBundle; a < c.length; a++)
                    if ((d = c[a]).bundle == p.default.getBundleId()) {
                      r = d;
                      break
                    } for (var s = null, u = 0, l = i.arrBundle; u < l.length; u++) {
                    var d;
                    if ("default" == (d = l[u]).bundle) {
                      s = d;
                      break
                    }
                  }
                  o.TargetBundle = r || s, cc.sys.isNative && cc.sys.isMobile && r && !r.inReview ? p.default.getNation(function() {
                    if (e.checkReview(r)) {
                      var t = r.manifest;
                      e.checkManifestUrl(t)
                    } else e.requestCounter = e.arrUrl.length, e.checkHotUpdate()
                  }) : (e.requestCounter = e.arrUrl.length, e.checkHotUpdate())
                } else e.requestCounter++, e.checkHotUpdate()
              } catch (f) {
                e.requestCounter++, e.checkHotUpdate()
              }
            })
          } else cc.sys.isBrowser ? this.onHotUpdateFinished() : this.clearSearchPathAndRestart()
        }, t.TargetBundle = null, t.version = "", r([_(cc.Label)], t.prototype, "lbVersion", void 0), r([_], t.prototype, "checkConfig", void 0), r([_], t.prototype, "hotUpdate", void 0), o = r([g], t)
      }(a.default);
    o.default = y, cc._RF.pop()
  }, {
    "../config/ConfigLoader": "ConfigLoader",
    "../ePrefabDefine": "ePrefabDefine",
    "../loading/Loading": "Loading",
    "../ui/UIPopup": "UIPopup",
    "../ui/UIPopupManager": "UIPopupManager",
    "../utils/ClientData": "ClientData",
    "../utils/PlatformUtils": "PlatformUtils",
    "../utils/StringUtils": "StringUtils"
  }],
  HttpUtils: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "ee5fcdzIhZKc5w7NXfVeBoo", "HttpUtils"), Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.ApiResponse = void 0;
    var n = e("../ui/UIWaitingLayout"),
      i = e("../utils/StringUtils"),
      r = e("../utils/Utils"),
      a = e("./BOError"),
      c = e("./Connector"),
      s = e("./eErrorCode"),
      u = function() {
        function e(e, t) {
          this._cmd = e, this._error = a.default.fromJSON(t), this._data = t
        }
        return Object.defineProperty(e.prototype, "data", {
          get: function() {
            return this._data
          },
          set: function(e) {
            this._data = e
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(e.prototype, "error", {
          get: function() {
            return this._error
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(e.prototype, "cmd", {
          get: function() {
            return this._cmd
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(e.prototype, "success", {
          get: function() {
            return this._error.code == s.eErrorCode.SUCCESS
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(e.prototype, "internetError", {
          get: function() {
            return this._error.code == s.eErrorCode.INTERNAL_ERROR
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(e.prototype, "tokenExpire", {
          get: function() {
            return this._error.code == s.eErrorCode.TOKEN_EXPIRE
          },
          enumerable: !1,
          configurable: !0
        }), e
      }();
    o.ApiResponse = u;
    var l = function() {
      function e() {}
      return e.get = function(e, t, o) {
        if (void 0 === o && (o = !0), 0 === e.search("http://") || 0 === e.search("https://")) {
          var i = new XMLHttpRequest;
          o && n.default.showWaiting("http request: " + e), i.onload = function() {
            var r = null;
            try {
              r = JSON.parse(i.responseText)
            } catch (a) {}
            t && t(r), o && n.default.hideWaiting("http request: " + e)
          }, i.onerror = function() {
            t && t(null), o && n.default.hideWaiting("http request: " + e)
          }, i.timeout = 3e4, i.open("GET", e), i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), i.send()
        }
      }, e.postApi = function(e, t, o, a) {
        void 0 === a && (a = !0), e = e.toLowerCase();
        var l = c.default.instance.API_URL + c.default.instance.API_PATH + e,
          p = t ? l : l + "?" + i.default.paramsToQueryString(t),
          d = new XMLHttpRequest;
        a && n.default.showWaiting("http request: " + p), d.onload = function() {
          try {
            var t = JSON.parse(d.responseText);
            o && o(new u(e, t))
          } catch (i) {
            o && o(new u(e, {
              code: s.eErrorCode.INTERNAL_ERROR,
              message: r.default.isEmptyString(d.responseText) ? "M\u1ea1ng kh\xf4ng \u1ed5n \u0111\u1ecbnh.\nVui l\xf2ng th\u1eed l\u1ea1i" : d.responseText
            })), cc.error(d.responseText)
          }
          a && n.default.hideWaiting("http request: " + p)
        }, d.onerror = function() {
          o && o(new u(e, {
            code: s.eErrorCode.INTERNAL_ERROR,
            message: r.default.isEmptyString(d.responseText) ? "M\u1ea1ng kh\xf4ng \u1ed5n \u0111\u1ecbnh.\nVui l\xf2ng th\u1eed l\u1ea1i" : d.responseText
          })), a && n.default.hideWaiting("http request: " + p)
        }, d.timeout = 3e4, d.ontimeout = function() {
          o && o(new u(e, {
            code: s.eErrorCode.TIME_OUT,
            message: r.default.isEmptyString(d.responseText) ? "M\u1ea1ng kh\xf4ng \u1ed5n \u0111\u1ecbnh.\nVui l\xf2ng th\u1eed l\u1ea1i" : d.responseText
          })), a && n.default.hideWaiting("http request: " + p)
        }, d.open("POST", p, !0), d.setRequestHeader("Content-Type", "application/json"), cc.log("params post " + p, t), d.send(JSON.stringify(t))
      }, e.getApi = function(e, t, o, r) {
        void 0 === r && (r = !0);
        var a = c.default.instance.API_URL + c.default.instance.API_PATH + e,
          l = t ? a : a + "?" + i.default.paramsToQueryString(t),
          p = new XMLHttpRequest;
        r && n.default.showWaiting("http request: " + l), p.onload = function() {
          var t;
          try {
            var i = JSON.parse(p.responseText);
            console.log("responseText data ", i), o && o(new u(e, i))
          } catch (a) {
            o && o(new u(e, {
              code: s.eErrorCode.INTERNAL_ERROR,
              message: null !== (t = p.responseText) && void 0 !== t ? t : "INTERNAL_ERROR"
            })), cc.error(p.responseText)
          }
          r && n.default.hideWaiting("http request: " + l)
        }, p.onerror = function() {
          var t;
          o && o(new u(e, {
            code: s.eErrorCode.INTERNAL_ERROR,
            message: null !== (t = p.responseText) && void 0 !== t ? t : "INTERNAL_ERROR"
          })), r && n.default.hideWaiting("http request: " + l)
        }, p.timeout = 3e4, p.open("GET", l), p.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), p.send()
      }, e
    }();
    o.default = l, cc._RF.pop()
  }, {
    "../ui/UIWaitingLayout": "UIWaitingLayout",
    "../utils/StringUtils": "StringUtils",
    "../utils/Utils": "Utils",
    "./BOError": "BOError",
    "./Connector": "Connector",
    "./eErrorCode": "eErrorCode"
  }],
  IConfig: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "2e4a1DXWmlOCJkAhEfrLPLV", "IConfig"), Object.defineProperty(o, "__esModule", {
      value: !0
    }), cc._RF.pop()
  }, {}],
  ISFSReceiveData: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "7e9c2ovn+5PF756fg4lEXKG", "ISFSReceiveData"), Object.defineProperty(o, "__esModule", {
      value: !0
    }), cc._RF.pop()
  }, {}],
  ISFSSendData: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "53e6dCDlTxMxbtQo5sTyfkS", "ISFSSendData"), Object.defineProperty(o, "__esModule", {
      value: !0
    }), cc._RF.pop()
  }, {}],
  ImageContent: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "40ad8IkELFHHZknJtCUtTkF", "ImageContent");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var a = e("../../../../framework/ePrefabDefine"),
      c = e("../../../../framework/ui/ScrollToTop"),
      s = e("../../../../framework/ui/UIPopupManager"),
      u = e("../../../../framework/ui/UISpriteHelper"),
      l = e("../../../../framework/utils/ClientData"),
      p = e("../../../../framework/utils/PrefabUtils"),
      d = e("../../../../framework/utils/StringUtils"),
      f = e("../../../../framework/zai/GlobalEvent"),
      h = e("../../../config/ioe_config"),
      g = e("../../answer/AnswerButton"),
      _ = e("../../common/DienDoanVan"),
      y = e("./ContentComponent"),
      m = cc._decorator,
      v = m.ccclass,
      b = m.property,
      C = function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.scrollViewContent = null, t.scrollViewArr = [], t.buttons = [], t.imageUrl = "", t
        }
        return i(t, e), t.prototype.stopSoundIfNeed = function() {}, t.prototype.updateWithQuestion = function(e, t) {
          if (this.node.active = this.contentType == e.questionDescription.contentType, this.node.active && (this.inputTxt = "", this.questionModel = e, this.currentQuestionNumber = t, this.questNumberLbl.string = "" + t, cc.log(this.contentType + "ImageContent  " + e.questionDescription.contentType), this.totalQuestNumberLbl && (this.totalQuestNumberLbl.string = "" + l.default.AppModel.game.questionArr.length), this.updateQuestContent(), this.node.active)) {
            this.canClick = !0, this.updateStateButtons(!0), this.questionModel.questionType != h.IOE.QuestionType.TrueOrFalse && this.updateTxtInAllBtn(this.buttons), this.scrollViewArr.forEach(function(e) {
              e.onNewQuest()
            });
            var o = e.questionDescription.content;
            this.imageUrl = o, console.log(this.questionModel.questionDescription.hasImage + " fixUrl", this.imageUrl), this.questionModel.questionDescription.hasImage && this.setImageContent(o)
          }
        }, t.prototype.setImageContent = function(e, t) {
          var o = this;
          void 0 === t && (t = !0), this.spriteImage && u.default.setImageFromURL(this.spriteImage, e, void 0, function(n) {
            cc.log("AnswerImgButton::load image done"), "string" == typeof n && "error" == n && setTimeout(function() {
              o.setImageContent(e, t)
            }, 100)
          })
        }, t.prototype.updateQuestContent = function() {
          var e = this.questionModel.questionContent.content || "";
          if (e = d.default.getContentWithUserInput(e, this.inputTxt), this.descriptionLbl) {
            var t = e,
              o = this.centerContentInBox(this.noScrolldescriptionLbl, this.descriptionLbl, this.scrollViewContent, t);
            if (o && this.questionModel.questionType == h.IOE.QuestionType.DienTuVaoChoTrong) {
              var n = o.getComponent(_.default);
              n && (n.setData(t), this.dienDoanVan = n, this.dienDoanVan.getFirstEditBox().focus())
            }
          }
        }, t.prototype.onZoomImage = function() {
          console.log("zoom........... ", this.imageUrl);
          var e = this.imageUrl;
          s.default.instance.showPopupFromNode(p.default.createNode(a.ePrefabDefine.POPUP_ZOOM_IMG), function(t) {
            t.moveAble = !0;
            var o = t.getComponent("UIPopupZoom");
            console.log("showUIPopupZoom doneeee ", e), o.loadImageUrl(e)
          })
        }, t.prototype.parseAnswerCheckResponse = function(t, o) {
          e.prototype.parseAnswerCheckResponse.call(this, t, o);
          var n = !1,
            i = t.data.point;
          null != i && i > 0 && (n = !0), this.updateStateButtons(!1), this.updateStateCorrectButtons(n);
          var r = cc.delayTime(h.IOE.TIME_TO_NEXT_QUEST),
            a = cc.callFunc(function() {
              f.default.instance.postEvent(f.GlobalEventName.IOE_CLIMB_NEXT_CHECKPOINT, {})
            }),
            c = cc.sequence(r, a);
          this.node.runAction(c)
        }, t.prototype.updateStateButtons = function(e) {
          for (var t = 0; t < this.buttons.length; t++) {
            var o = this.buttons[t];
            o.enabled = e, o.interactable = e, e && (o.resetStateWwithAnswer(), o.node.opacity = 255, o.node.active = !0, cc.log("updateStateButtons " + o.node.name, o.node.x, o.node.y))
          }
        }, t.prototype.updateStateCorrectButtons = function(e) {
          for (var t = 0; t < this.buttons.length; t++) {
            var o = this.buttons[t];
            this.idBtnClick == o.btnIdx && (cc.log("updateStateCorrectButtons this.idBtnClick=" + this.idBtnClick + " btnIdx=" + o.btnIdx + " to  " + !e), o.changeStateWwithAnswer(e))
          }
        }, t.prototype.onKeyDown = function(e) {
          if (0 != this.node.active) switch (cc.log("press " + e.keyCode, this.node), e.keyCode) {
            case cc.macro.KEY.enter:
              this.onKeyEnterPress()
          }
        }, t.prototype.onEditReturn = function() {
          console.log("onEditReturn"), this.onKeyEnterPress()
        }, t.prototype.onEditTextChange = function(e) {
          console.log("onEditTextChange", e), this.inputTxt = e
        }, t.prototype.onKeyEnterPress = function() {
          if (this.node.active && this.questionModel.questionType == h.IOE.QuestionType.DienTuVaoChoTrong && this.canClick && !s.default.instance.isHavePopup)
            if (0 != this.validateInput(this.questionModel.questionContent)) {
              var e = this.inputTxt;
              this.callApiAnswer(e)
            } else s.default.instance.showPopup("Vui l\xf2ng nh\u1eadp \u0111\u1ee7 s\u1ed1 k\xfd t\u1ef1")
        }, r([b({
          type: cc.RichText
        })], t.prototype, "askLbl", void 0), r([b({
          type: cc.RichText
        })], t.prototype, "descriptionLbl", void 0), r([b({
          type: cc.RichText
        })], t.prototype, "noScrolldescriptionLbl", void 0), r([b({
          type: cc.Label
        })], t.prototype, "questNumberLbl", void 0), r([b({
          type: cc.Label
        })], t.prototype, "totalQuestNumberLbl", void 0), r([b({
          type: cc.Sprite
        })], t.prototype, "spriteImage", void 0), r([b({
          type: cc.SpriteFrame
        })], t.prototype, "spriteDefault", void 0), r([b(cc.ScrollView)], t.prototype, "scrollViewContent", void 0), r([b({
          type: c.default
        })], t.prototype, "scrollViewArr", void 0), r([b({
          type: g.AnswerButton
        })], t.prototype, "buttons", void 0), r([v], t)
      }(y.default);
    o.default = C, cc._RF.pop()
  }, {
    "../../../../framework/ePrefabDefine": "ePrefabDefine",
    "../../../../framework/ui/ScrollToTop": "ScrollToTop",
    "../../../../framework/ui/UIPopupManager": "UIPopupManager",
    "../../../../framework/ui/UISpriteHelper": "UISpriteHelper",
    "../../../../framework/utils/ClientData": "ClientData",
    "../../../../framework/utils/PrefabUtils": "PrefabUtils",
    "../../../../framework/utils/StringUtils": "StringUtils",
    "../../../../framework/zai/GlobalEvent": "GlobalEvent",
    "../../../config/ioe_config": "ioe_config",
    "../../answer/AnswerButton": "AnswerButton",
    "../../common/DienDoanVan": "DienDoanVan",
    "./ContentComponent": "ContentComponent"
  }],
  Instruction: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "86e7ffcFJNKGbgz6pTk6+iW", "Instruction");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.Instruction = void 0;
    var a = e("../../../framework/utils/Utils"),
      c = cc._decorator,
      s = c.ccclass,
      u = c.property,
      l = function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.scrollViewContent = null, t
        }
        return i(t, e), t.prototype.setDescription = function(e) {
          if (this.descriptionLbl && this.descriptionLblInScrollView && this.scrollViewContent) {
            var t = e;
            a.default.centerContentInBox(this.descriptionLbl, this.descriptionLblInScrollView, this.scrollViewContent, t)
          }
        }, r([u({
          type: cc.RichText
        })], t.prototype, "descriptionLbl", void 0), r([u({
          type: cc.RichText
        })], t.prototype, "descriptionLblInScrollView", void 0), r([u(cc.ScrollView)], t.prototype, "scrollViewContent", void 0), r([s], t)
      }(cc.Component);
    o.Instruction = l, cc._RF.pop()
  }, {
    "../../../framework/utils/Utils": "Utils"
  }],
  JSVersionLabel: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "beee7gT2ZZPjrCHZw+UGXvM", "JSVersionLabel");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var a = e("./HotUpdate"),
      c = cc._decorator,
      s = c.ccclass,
      u = (c.property, function(e) {
        function t() {
          return null !== e && e.apply(this, arguments) || this
        }
        return i(t, e), Object.defineProperty(t.prototype, "label", {
          get: function() {
            return this.getComponent(cc.Label)
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype.start = function() {
          this.label.string = "v" + a.default.version
        }, r([s], t)
      }(cc.Component));
    o.default = u, cc._RF.pop()
  }, {
    "./HotUpdate": "HotUpdate"
  }],
  LoadingManager: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "02837qtfgBEOqGGZSYG8Je8", "LoadingManager");
    var n = this && this.__decorate || function(e, t, o, n) {
      var i, r = arguments.length,
        a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
      else
        for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
      return r > 3 && a && Object.defineProperty(t, o, a), a
    };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var i = cc._decorator,
      r = i.ccclass,
      a = (i.property, function() {
        function e() {
          this._loadedCount = 0, this._totalCount = 0
        }
        return Object.defineProperty(e.prototype, "loadedCount", {
          get: function() {
            return this._loadedCount
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(e.prototype, "totalCount", {
          get: function() {
            return this._totalCount
          },
          enumerable: !1,
          configurable: !0
        }), e.prototype.init = function() {
          for (var e = 0, t = 0, o = this.items; t < o.length; t++) {
            var n = o[t];
            e += cc.loader.getDependsRecursively(n).length
          }
          this._totalCount = e, this._loadedCount = 0
        }, e.prototype.load = function() {
          var e = this,
            t = (new Map, e._loadedCount);
          cc.loader.loadResArray(e.items, function(o, n, i) {
            e._loadedCount += t + Math.floor(e._totalCount * (o / n)), e.progressCallback && e.progressCallback(o, n, i)
          }, function(t, o) {
            e.completedCallback && e.completedCallback(t, o), c.instance.complete(e.id)
          })
        }, e
      }()),
      c = function() {
        function e() {
          this._sessions = new Map, this._sessionId = 0
        }
        var t;
        return t = e, Object.defineProperty(e, "instance", {
          get: function() {
            return t._instance || (t._instance = new t), t._instance
          },
          enumerable: !1,
          configurable: !0
        }), e.prototype.loadItems = function(e, t, o) {
          if (e && !(e.length <= 0)) {
            var n = new a;
            n.items = e, n.completedCallback = o, n.progressCallback = t, n.id = this._sessionId++, this._sessions.set(n.id, n), n.init(), n.load()
          }
        }, e.prototype.complete = function(e) {
          this._sessions.delete(e)
        }, e._instance = null, t = n([r], e)
      }();
    o.default = c, cc._RF.pop()
  }, {}],
  Loading: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "93646uzWjFCg4LNBteFwvRP", "Loading");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.eLoadingState = void 0;
    var a, c = e("../config/ConfigLoader"),
      s = e("../ui/UIScreenManager"),
      u = e("./LoadingManager"),
      l = cc._decorator,
      p = l.ccclass,
      d = l.property;
    (function(e) {
      e[e.NONE = 0] = "NONE", e[e.LOADING = 1] = "LOADING", e[e.LOADED = 2] = "LOADED"
    })(a = o.eLoadingState || (o.eLoadingState = {}));
    var f = function(e) {
      function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.pgLoading = null, t.lbLoading = null, t.reverse = !1, t.arrResUrl = [], t.urlNextScreen = "", t.paramsNextScreen = "", t.arrQueueCompleted = [], t._state = a.NONE, t
      }
      return i(t, e), Object.defineProperty(t.prototype, "state", {
        get: function() {
          return this._state
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.onLoad = function() {
        this.lbLoading && (this.lbLoading.string = ""), this.pgLoading && (this.pgLoading.progress = this.reverse ? 1 : 0)
      }, t.prototype.loadResource = function(e) {
        void 0 === e && (e = null), this.lbLoading && (this.lbLoading.string = "\u0110ang t\u1ea3i...");
        var t = [];
        this.urlNextScreen && this.urlNextScreen.length && t.push(this.urlNextScreen);
        for (var o = 0, n = this.arrResUrl; o < n.length; o++) {
          var i = n[o];
          i && t.push(i)
        }
        this._state = a.LOADING, cc.log("start load ... " + t.length), this._loadDoneCallback = e, u.default.instance.loadItems(t, this.progressCallback.bind(this), this.loadDone.bind(this))
      }, t.prototype.loadDone = function(e, t) {
        cc.log("loadDone::..." + e, this), cc.sys.isMobile && cc.sys.isNative, this._state = a.LOADED;
        var o = this;
        o._loadDoneCallback && o._loadDoneCallback(e, t), o._loadDoneCallback = null, o.urlNextScreen && o.urlNextScreen.length && s.default.instance.replaceScreen(cc.loader.getRes(this.urlNextScreen, cc.Prefab), function(e) {
          e.handleParams(o.paramsNextScreen)
        })
      }, t.prototype.progressCallback = function(e, t) {
        if (t > 0) {
          var o = 0 != t ? e / t : 1;
          this.pgLoading && (this.pgLoading.progress = this.reverse ? 1 - o : o), this.lbLoading && (this.lbLoading.string = c.default.CFS("msg_loading") + " (" + Math.floor(100 * o).toString() + "%)")
        }
      }, r([d(cc.ProgressBar)], t.prototype, "pgLoading", void 0), r([d(cc.Label)], t.prototype, "lbLoading", void 0), r([d], t.prototype, "reverse", void 0), r([d([cc.String])], t.prototype, "arrResUrl", void 0), r([d], t.prototype, "urlNextScreen", void 0), r([d], t.prototype, "paramsNextScreen", void 0), r([p], t)
    }(cc.Component);
    o.default = f, cc._RF.pop()
  }, {
    "../config/ConfigLoader": "ConfigLoader",
    "../ui/UIScreenManager": "UIScreenManager",
    "./LoadingManager": "LoadingManager"
  }],
  LobbyScene: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "c15ce+Y7+JNBaVUzfe9Oa+3", "LobbyScene");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.LobbyScene = void 0;
    var a = e("../../framework/ui/UIScreen"),
      c = e("../../framework/utils/ClientData"),
      s = e("../../framework/network/HttpUtils"),
      u = e("../network/ApiDefine"),
      l = e("../../framework/ui/UIPopupManager"),
      p = e("../../framework/ui/UIPopup"),
      d = e("../network/response/AppModel"),
      f = e("../config/ioe_config"),
      h = e("../../framework/audio/eSoundDefine"),
      g = e("../../framework/audio/AudioManager"),
      _ = e("../gameplay/common/Instruction"),
      y = cc._decorator,
      m = y.ccclass,
      v = y.property,
      b = function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t._isStarted = !1, t
        }
        return i(t, e), t.prototype.onLoad = function() {
          if (cc.log("LobbyScene::onLoad===="), g.default.instance.playMusic(h.eSoundDefine.bgMusic), cc.sys.isBrowser) {
            var e = window.decodeURIComponent(window.location.href),
              t = e.substring(e.indexOf("?") + 1).split("&");
            cc.log("query urlGame", t), !t || t.length <= 1 ? this.requestGameDemo(f.IOE.QuestionType.SelectAnswear, f.IOE.ClientId.TracNghiemImage) : this.parseInfoGame(window.location.href)
          }
        }, t.prototype.start = function() {}, t.prototype.parseInfoGame = function(e) {
          var t = {},
            o = (e = window.decodeURIComponent(e)).substring(e.indexOf("?") + 1).split("&"),
            n = !1;
          if (o) {
            for (var i = 0; i < o.length; i++)
              if (o[i]) {
                var r = o[i].split("=");
                cc.js.isNumber(r[1]) ? t[r[0]] = parseInt(r[1]) : t[r[0]] = r[1]
              } if (t.hasOwnProperty("token") && t.token) {
              var a = c.default.GetSetting("token5used", "");
              n = !(!a || a != t.token)
            }
          }
          var s;
          cc.log("IOE_API md5Used = ", n), s = n ? c.default.GetSetting("tokenFull", "") || t.token : t.token || c.default.GetSetting("tokenFull", "");
          var u = t.level,
            l = t.round;
          c.default.TokenMD5orTokenFull = s, c.default.LevelFromUrl = u, c.default.RoundFromUrl = l, c.default.redirectUrl = t.redirectUrl || "https://ioe.vn", cc.log("IOE_API queryParams = ", t), this.getInfoGame()
        }, t.prototype.getInfoGame = function() {
          var e = this,
            t = c.default.TokenMD5orTokenFull;
          cc.log("TokenMD5orTokenFull ", c.default.TokenMD5orTokenFull);
          var o = {
            api_key: c.default.API_KEY,
            serviceCode: c.default.SERVICE_CODE,
            token: c.default.TokenMD5orTokenFull,
            IPClient: "",
            deviceId: ""
          };
          s.default.postApi(u.ApiDefine.GET_INFO, o, function(o) {
            if (cc.log("data res", o, !o.success, !o.data), o && o.success && o.data) {
              var n = o.data;
              if (c.default.AppModel = new d.AppModel(n.data), cc.log("ClientData.AppModel.gameDesc ", c.default.AppModel.gameDesc), e.instruction && c.default.AppModel && c.default.AppModel.gameDesc) {
                var i;
                i = c.default.AppModel && c.default.AppModel.gameDesc ? c.default.AppModel.gameDesc : "There are 10 questions. You have 20 minutes to answear all of them. Choose the most suitable answear by selecting A, B, C, D.", e.instruction.setDescription(i)
              }
              cc.log("ClientData.AppModel done ", c.default.AppModel), 0 != c.default.AppModel.examTime ? (c.default.GameConfig && c.default.GameConfig.warning_msg_start_scene && l.default.instance.showPopup(c.default.GameConfig.warning_msg_start_scene, [p.PopupAction.make("", function() {}, !0)]), c.default.TokenMD5orTokenFull = n.data.token, cc.log("tokenUsed", t), t.length <= 50 && c.default.SetSetting("token5used", t), c.default.SetSetting("tokenFull", c.default.TokenMD5orTokenFull), e.preloadAllSoundAndImage()) : l.default.instance.showPopupError("\u0110\xe3 h\u1ebft th\u1eddi gian l\xe0m b\xe0i", !1, [p.PopupAction.make("", function() {
                o.data && o.data.redirectUrl && (window.location.href = o.data.redirectUrl)
              }, !0)])
            } else {
              var r = o.error && o.error.msg ? o.error.msg : JSON.stringify(o.data);
              l.default.instance.showPopupError(r, !1, [p.PopupAction.make("", function() {
                o.data && o.data.redirectUrl && (window.location.href = o.data.redirectUrl)
              }, !0)])
            }
          }, !0)
        }, t.prototype.requestGameDemo = function(e, t) {
          var o = window.location.href;
          o.endsWith("/") && (o = o.substring(0, o.length - 1));
          var n = {
            api_key: c.default.API_KEY,
            serviceCode: c.default.SERVICE_CODE,
            questType: e,
            urlgame: o,
            token: C,
            clientId: t || 1,
            IPClient: c.default.IpClient,
            deviceId: c.default.DeviceId,
            redirectUrl: "https://static.goplay.vn/demo"
          };
          s.default.postApi(u.ApiDefine.SET_INFO, n, function(e) {
            if (cc.log("data res", e, !e.success, !e.data), e && e.success && e.data) {
              cc.log("data ", e.data);
              var t = e.data.data.urlgame;
              cc.log("urlgame new https ", t), window.location.href = t
            } else {
              var o = e.error && e.error.msg ? e.error.msg : JSON.stringify(e.data);
              l.default.instance.showPopupError(o, !1, [p.PopupAction.make("", function() {
                e.data && e.data.redirectUrl && (window.location.href = e.data.redirectUrl)
              }, !0)])
            }
          }, !0)
        }, t.prototype.preloadAllSoundAndImage = function() {
          var e = c.default.AppModel.game.questionArr;
          if (e && e.length)
            for (var t = function(t) {
                var o = e[t];
                o.questionDescription.hasAudio ? cc.assetManager.loadRemote(o.questionDescription.content, function() {
                  cc.log("preload " + t + "=> " + o.questionDescription.content + " done")
                }) : o.questionDescription.hasImage && cc.assetManager.loadRemote(o.questionDescription.content, function(e, n) {
                  cc.log("preload " + t + "=> " + o.questionDescription.content + " done", n)
                })
              }, o = 0; o < e.length; o++) t(o)
        }, t.prototype.onDestroy = function() {}, t.prototype.onEnable = function() {}, t.prototype.onDisable = function() {}, r([v({
          type: _.Instruction
        })], t.prototype, "instruction", void 0), r([m], t)
      }(a.default);
    o.LobbyScene = b;
    var C = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2VkdS5nby52biIsInN1YiI6IndlYmNsaWVudCIsImF1ZCI6ImFjY2Vzc190b2tlbiIsImV4cCI6MTY2NjY4MDg3MCwic2lkIjowLCJhdGsiOiIiLCJhdHkiOjAsInVpZCI6MTI5NjcyMjg3MSwibmFtZSI6InRraHNmdGVjaCIsImR2SWQiOiJjYzAwMGI2Ni1hYTMyLTRjNGItYjRkYi1lNmFhOGQ1MmZmZmQiLCJvcyI6bnVsbCwiaXAiOiIxMC4yMi4yMi4yNDUiLCJJc0F1dGhlbnRpY2F0ZWQiOnRydWV9.yAUAMTwjIJEDnw3-_KQUgYOTLQvc7MHoBIceyT3Oun8";
    cc._RF.pop()
  }, {
    "../../framework/audio/AudioManager": "AudioManager",
    "../../framework/audio/eSoundDefine": "eSoundDefine",
    "../../framework/network/HttpUtils": "HttpUtils",
    "../../framework/ui/UIPopup": "UIPopup",
    "../../framework/ui/UIPopupManager": "UIPopupManager",
    "../../framework/ui/UIScreen": "UIScreen",
    "../../framework/utils/ClientData": "ClientData",
    "../config/ioe_config": "ioe_config",
    "../gameplay/common/Instruction": "Instruction",
    "../network/ApiDefine": "ApiDefine",
    "../network/response/AppModel": "AppModel"
  }],
  LoginRequireFeature: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "819a0ExAqNEZ5LyKF0jModt", "LoginRequireFeature");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var a = e("../ui/UIFeatureNavigator"),
      c = e("./AuthenManager"),
      s = cc._decorator,
      u = s.ccclass,
      l = (s.property, function(e) {
        function t() {
          return null !== e && e.apply(this, arguments) || this
        }
        return i(t, e), t.prototype._onClicked = function() {
          cc.log("LoginRequireFeature:CLICKKKKK"), c.default.instance.isLoggedIn ? e.prototype._onClicked.call(this) : (this.playSfx(), c.default.instance.showAuthen())
        }, r([u], t)
      }(a.default));
    o.default = l, cc._RF.pop()
  }, {
    "../ui/UIFeatureNavigator": "UIFeatureNavigator",
    "./AuthenManager": "AuthenManager"
  }],
  PlatformUtils: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "34c60HPWudMyq2fAIlc/i7s", "PlatformUtils"), Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.ConnectionType = void 0;
    var n, i = e("../zai/global/Global");
    (function(e) {
      e[e.INVALID = 0] = "INVALID", e[e.WIFI = 1] = "WIFI", e[e.MOBILE = 2] = "MOBILE"
    })(n = o.ConnectionType || (o.ConnectionType = {}));
    var r = function() {
      function e() {}
      return e.hasNetwork = function() {
        return e.connectionType != n.INVALID
      }, Object.defineProperty(e, "useBagato", {
        get: function() {
          var e = !1;
          try {
            bagato && (e = !0)
          } catch (t) {}
          return console.log("use bagato " + e), e
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e, "useSDKBox", {
        get: function() {
          var e = !1;
          try {
            sdkbox && (e = !0)
          } catch (t) {}
          return console.log("use sdkbox " + e), e
        },
        enumerable: !1,
        configurable: !0
      }), e.getNation = function(t) {
        if (void 0 === t && (t = null), e.NATION && "" != e.NATION) t && t();
        else if (cc.sys.isMobile && cc.sys.isNative || e.isWebFacebook() || e.isFBInstantGame() || cc.sys.isBrowser && window.location.protocol.includes("https")) {
          var o = new XMLHttpRequest;
          o.open("GET", "https://ipinfo.io/json", !0), o.onload = function() {
            200 == o.status && 4 == o.readyState ? (e.NATION = JSON.parse(o.responseText).country + "", cc.log("PlatformUtils::getNation", e.NATION, o.responseText), t && t()) : (cc.log("PlatformUtils.ts::getNation: ", o.status, o.readyState), t && t())
          }, o.onerror = function() {
            t && t()
          }, o.send()
        } else {
          var n = new XMLHttpRequest;
          n.open("GET", "http://ip-api.com/json", !0), n.onload = function() {
            200 == n.status && 4 == n.readyState ? (e.NATION = JSON.parse(n.responseText).countryCode + "", cc.log("PlatformUtils::getNation", e.NATION, n.responseText), t && t()) : t && t()
          }, n.onerror = function() {
            t && t()
          }, n.send()
        }
        return e.NATION ? e.NATION : ""
      }, Object.defineProperty(e, "deviceName", {
        get: function() {
          var t = "Unknown";
          return cc.sys.isNative ? cc.sys.os == cc.sys.OS_ANDROID ? t = jsb.reflection.callStaticMethod(e.JavaName, "getDeviceName", "()Ljava/lang/String;") : cc.sys.os == cc.sys.OS_IOS && (t = jsb.reflection.callStaticMethod(e.ObjCName, "getDeviceName")) : cc.sys.isBrowser && (t = cc.sys.browserType), t
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e, "OSVersion", {
        get: function() {
          var t = "Unknown";
          return cc.sys.isBrowser ? t = cc.sys.browserVersion : cc.sys.isNative && (cc.sys.os == cc.sys.OS_ANDROID ? t = jsb.reflection.callStaticMethod(e.JavaName, "getOSVersion", "()Ljava/lang/String;") : cc.sys.os == cc.sys.OS_IOS && (t = jsb.reflection.callStaticMethod(e.ObjCName, "getOSVersion"))), t
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e, "appVersion", {
        get: function() {
          var t = "Unknown";
          return cc.sys.isBrowser ? t = "WEB_VERSION" : cc.sys.isNative && (cc.sys.os == cc.sys.OS_ANDROID ? t = "" + jsb.reflection.callStaticMethod(e.JavaName, "getVersionName", "()Ljava/lang/String;") : cc.sys.os == cc.sys.OS_IOS && (t = jsb.reflection.callStaticMethod(e.ObjCName, "getVersionApp"))), t
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e, "buildVersion", {
        get: function() {
          var t = "Unknown";
          return cc.sys.isBrowser ? t = "WEB_VERSION" : cc.sys.isNative && (cc.sys.os == cc.sys.OS_ANDROID ? t = jsb.reflection.callStaticMethod(e.JavaName, "getVersionCode", "()Ljava/lang/String;") : cc.sys.os == cc.sys.OS_IOS && (t = jsb.reflection.callStaticMethod(e.ObjCName, "getBuildApp"))), t
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e, "bundleId", {
        get: function() {
          return e.getBundleId()
        },
        enumerable: !1,
        configurable: !0
      }), e.openSMS = function(t, o) {
        cc.sys.os == cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod(e.JavaName, "openSMS", "(Ljava/lang/String;Ljava/lang/String;)V", t, o) : cc.sys.os == cc.sys.OS_IOS && jsb.reflection.callStaticMethod(e.ObjCName, "openSMS:withContent:", t, o)
      }, e.openPhoneDialler = function(t) {
        cc.sys.os == cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod(e.JavaName, "phoneCall", "(Ljava/lang/String;)V", t) : cc.sys.os == cc.sys.OS_IOS && jsb.reflection.callStaticMethod(e.ObjCName, "openPhoneDialler:", t)
      }, e.scheduleNotification = function(t, o, n, i) {
        cc.sys.isNative && (cc.sys.os == cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod(e.JavaName, "scheduleNotification", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", t.toString(), o, n, i.toString()) : (cc.sys.os, cc.sys.OS_IOS))
      }, Object.defineProperty(e, "connectionType", {
        get: function() {
          return n.WIFI
        },
        enumerable: !1,
        configurable: !0
      }), e.isWebFacebook = function() {
        if (!cc.sys.isBrowser) return !1;
        var e = window.location.href.search("");
        return -1 == e && (e = window.location.href.search("fbinstant"), cc.log("PlatformUtils.ts::isWebFb: recheck isBrowser", cc.sys.isBrowser, "isMobile", cc.sys.isMobile)), cc.log("PlatformUtils.ts::isWebFb: ", window.location.href, e), -1 != e
      }, e.isFBInstantGame = function() {
        var e = !1;
        try {
          FBInstant && (e = !0)
        } catch (t) {}
        return e
      }, Object.defineProperty(e, "isRvApp", {
        get: function() {
          return cc.sys.isMobile && cc.sys.isNative && ("com.dg.popin-ios" == e.getBundleId() || "com.dg.bubble-pop.android" == e.getBundleId() || "com.dg.bubble_pop.android" == e.getBundleId() || "com.dg.bubble-pop.ios" == e.getBundleId())
        },
        enumerable: !1,
        configurable: !0
      }), e.allowCheat = function() {
        return !0
      }, e.getBundleId = function() {
        if (i.ZaiGlobal.DEMO_MOBILE) return "localhost";
        var t = "default";
        return e.isFBInstantGame() ? t = "FACEBOOK_INSTANT" : cc.sys.isBrowser && !t.includes("localhost") ? t = (t = location.hostname).replace("www.", "") : cc.sys.os == cc.sys.OS_ANDROID ? t = jsb.reflection.callStaticMethod(e.JavaName, "getPkgName", "()Ljava/lang/String;") : cc.sys.os == cc.sys.OS_IOS && (t = jsb.reflection.callStaticMethod(e.ObjCName, "getBundleId")), console.log("pkg name.." + t), t
      }, Object.defineProperty(e, "isTestMode", {
        get: function() {
          return e.allowCheat()
        },
        enumerable: !1,
        configurable: !0
      }), e.ObjCName = "NativeObjC", e.JavaName = "org/cocos2dx/javascript/AppActivity", e.NATION = "", e
    }();
    o.default = r, cc._RF.pop()
  }, {
    "../zai/global/Global": "Global"
  }],
  PopupEndGame: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "24478e7fjhDIY532Mf43Ixn", "PopupEndGame");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.PopupEndGame = void 0;
    var a = e("../../framework/utils/ClientData"),
      c = e("../../framework/ui/UIScreen"),
      s = e("../../framework/utils/DateUtils"),
      u = e("../../framework/audio/AudioManager"),
      l = cc._decorator,
      p = l.ccclass,
      d = l.property,
      f = function(e) {
        function t() {
          return null !== e && e.apply(this, arguments) || this
        }
        return i(t, e), t.prototype.start = function() {}, t.prototype.onClosePopup = function() {
          window.location.href = a.default.redirectUrl
        }, t.prototype.handleParams = function(e) {
          this.scoreLbl.string = "" + e.point, this.timeLbl.string = "" + s.default.secondsToDateTime(e.time), u.default.instance.resumeMusic(), 1 == a.default.correctPercent ? (this.spineAnim.node.active = !1, this.spineWin.node.active = !0, this.spineWin.setAnimation(0, "idle", !0)) : (this.spineAnim.node.active = !0, this.spineWin.node.active = !1, this.spineAnim.setAnimation(0, "sad", !0))
        }, r([d({
          type: cc.Label
        })], t.prototype, "scoreLbl", void 0), r([d({
          type: cc.Label
        })], t.prototype, "timeLbl", void 0), r([d({
          type: sp.Skeleton
        })], t.prototype, "spineAnim", void 0), r([d({
          type: sp.Skeleton
        })], t.prototype, "spineWin", void 0), r([p], t)
      }(c.default);
    o.PopupEndGame = f, cc._RF.pop()
  }, {
    "../../framework/audio/AudioManager": "AudioManager",
    "../../framework/ui/UIScreen": "UIScreen",
    "../../framework/utils/ClientData": "ClientData",
    "../../framework/utils/DateUtils": "DateUtils"
  }],
  PrefabUtils: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "68f67XEW05DZ4Dkn6w6KuCp", "PrefabUtils");
    var n, i = this && this.__extends || (n = function(e, t) {
      return (n = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, t) {
          e.__proto__ = t
        } || function(e, t) {
          for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
        })(e, t)
    }, function(e, t) {
      function o() {
        this.constructor = e
      }
      n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
    });
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var r = function(e) {
      function t() {
        return null !== e && e.apply(this, arguments) || this
      }
      return i(t, e), t.loadPrefab = function(e, t) {
        return cc.loader.loadRes(e, cc.Prefab, t)
      }, t.getPrefab = function(e) {
        return cc.loader.getRes(e, cc.Prefab)
      }, t.createNode = function(e) {
        return cc.instantiate(this.getPrefab(e))
      }, t
    }(cc.Component);
    o.default = r, cc._RF.pop()
  }, {}],
  Profile: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "c28dfJ+VmxPDa4kovhNnLaX", "Profile");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.Profile = void 0;
    var a = e("../../../../framework/audio/AudioManager"),
      c = e("../../../../framework/audio/eSoundDefine"),
      s = e("../../../../framework/ui/UIPopup"),
      u = e("../../../../framework/ui/UIPopupManager"),
      l = e("../../../../framework/utils/ClientData"),
      p = e("../../../../framework/utils/DateUtils"),
      d = e("../../../../framework/zai/GlobalEvent"),
      f = e("./CountDown"),
      h = cc._decorator,
      g = h.ccclass,
      _ = h.property,
      y = function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.currentScore = 0, t
        }
        return i(t, e), t.prototype.start = function() {
          this.nameLbl.string = l.default.AppModel.user.fullName, this.idLbl.string = "ID: " + l.default.AppModel.user.accountId, this.currentScore = l.default.AppModel.user.point || 0, this.scoreLbl.string = "" + this.currentScore, this.lvLbl.string = "Round: " + l.default.AppModel.user.round, this.nameLbl.string = l.default.AppModel.user.fullName
        }, t.prototype.startGame = function(e) {
          var t = this,
            o = l.default.AppModel.examTime - l.default.AppModel.timeDoing,
            n = this.timerLbl.getComponent(cc.Label);
          setTimeout(function() {
            e(), n.string = "00:00", t.stopCountDown()
          }, 1e3 * (o + 1)), this.timerLbl.setTimeRemain(o, !0, function(e) {
            n.string = p.default.secondsToDateTime(Math.round(e))
          }, function() {})
        }, t.prototype.stopCountDown = function() {
          this.timerLbl.stopTimeRemain()
        }, t.prototype.onLoad = function() {
          d.default.instance.addListener(d.GlobalEventName.IOE_NEW_SCORE, this.onNewScore, this)
        }, t.prototype.onDestroy = function() {}, t.prototype.onNewScore = function() {
          var e = this,
            t = l.default.score - this.currentScore;
          this.currentScore = l.default.score, this.scoreLbl.string = "" + l.default.score, l.default.AppModel.user.point = l.default.score, this.lbScoreFly.string = "+" + t;
          var o = this.lbScoreFly.node,
            n = this.scoreLbl.node.getPosition();
          o.setPosition(n.x + 50, n.y);
          var i = cc.callFunc(function() {
              e.lbScoreFly.string = ""
            }),
            r = cc.moveTo(2, cc.v2(n.x + 50, n.y + 200));
          o.runAction(cc.sequence(r, i))
        }, t.prototype.onClickQuit = function() {
          a.default.instance.playSfx(c.eSoundDefine.click), u.default.instance.showPopup("B\u1ea1n ch\u1eafc ch\u1eafn mu\u1ed1n d\u1eebng l\xe0m b\xe0i?", [s.PopupAction.make("", function() {
            window.location.href = l.default.redirectUrl
          }, !0)], "", !0)
        }, r([_({
          type: cc.Label
        })], t.prototype, "scoreLbl", void 0), r([_({
          type: f.CountDown
        })], t.prototype, "timerLbl", void 0), r([_({
          type: cc.Label
        })], t.prototype, "nameLbl", void 0), r([_({
          type: cc.Label
        })], t.prototype, "idLbl", void 0), r([_({
          type: cc.Label
        })], t.prototype, "lvLbl", void 0), r([_({
          type: cc.Font
        })], t.prototype, "fnt", void 0), r([_({
          type: cc.Label
        })], t.prototype, "lbScoreFly", void 0), r([g], t)
      }(cc.Component);
    o.Profile = y, cc._RF.pop()
  }, {
    "../../../../framework/audio/AudioManager": "AudioManager",
    "../../../../framework/audio/eSoundDefine": "eSoundDefine",
    "../../../../framework/ui/UIPopup": "UIPopup",
    "../../../../framework/ui/UIPopupManager": "UIPopupManager",
    "../../../../framework/utils/ClientData": "ClientData",
    "../../../../framework/utils/DateUtils": "DateUtils",
    "../../../../framework/zai/GlobalEvent": "GlobalEvent",
    "./CountDown": "CountDown"
  }],
  QuestionComponent: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "c6600o+i79JRLjz/WM1RDb2", "QuestionComponent");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.eQuestType = o.eGameType = void 0;
    var a, c, s = e("../../../framework/zai/GlobalEvent"),
      u = e("../../config/ioe_config"),
      l = e("./content/ContentComponent"),
      p = cc._decorator,
      d = p.ccclass,
      f = p.property;
    (function(e) {
      e[e.NONE = 0] = "NONE", e[e.TracNghiem = u.IOE.GameType.SelectCorrectAnswear] = "TracNghiem", e[e.LinkElement = u.IOE.GameType.CombineCouple] = "LinkElement"
    })(a = o.eGameType || (o.eGameType = {})),
    function(e) {
      e[e.NONE = 0] = "NONE", e[e.TrueOrFalse = u.IOE.QuestionType.TrueOrFalse] = "TrueOrFalse", e[e.DienTuVaoChoTrong = u.IOE.QuestionType.DienTuVaoChoTrong] = "DienTuVaoChoTrong", e[e.SapXep = 3] = "SapXep", e[e.FixWrongText = 4] = "FixWrongText", e[e.FixSentence = 5] = "FixSentence", e[e.FixDocument = 6] = "FixDocument", e[e.CombineCouple = 7] = "CombineCouple", e[e.SelectAnswear = u.IOE.QuestionType.SelectAnswear] = "SelectAnswear"
    }(c = o.eQuestType || (o.eQuestType = {}));
    var h = function(e) {
      function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.questType = c.NONE, t.gameType = a.NONE, t.startQuestTime = 0, t.contentComs = [], t
      }
      return i(t, e), t.prototype.hasAudioInQuestion = function(e) {
        var t = e.questionDescription && e.questionDescription.hasAudio,
          o = e.questionContent && e.questionContent.hasAudio;
        return t || o
      }, t.prototype.hasImageInQuestion = function(e) {
        var t = e.questionDescription && e.questionDescription.hasAudio,
          o = e.questionContent && e.questionContent.hasAudio;
        return t || o
      }, Object.defineProperty(t.prototype, "contentType", {
        get: function() {
          if (this.questionModel) return this.questionModel.questionContent ? this.questionModel.questionContent.contentType : void 0
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "descriptionType", {
        get: function() {
          if (this.questionModel) return this.questionModel.questionDescription ? this.questionModel.questionDescription.contentType : void 0
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.resetMusic = function() {
        s.default.instance.postEvent(s.GlobalEventName.ON_MUSIC_RESET, !1)
      }, t.prototype.onDestroy = function() {}, r([f({
        type: cc.Enum(c)
      })], t.prototype, "questType", void 0), r([f({
        type: cc.Enum(a)
      })], t.prototype, "gameType", void 0), r([f(l.default)], t.prototype, "contentComs", void 0), r([d], t)
    }(cc.Component);
    o.default = h, cc._RF.pop()
  }, {
    "../../../framework/zai/GlobalEvent": "GlobalEvent",
    "../../config/ioe_config": "ioe_config",
    "./content/ContentComponent": "ContentComponent"
  }],
  ReviewConfig: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "ba3f0u4wu9NxZMpE5rO43El", "ReviewConfig");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var a = e("./BaseConfig"),
      c = e("../utils/PlatformUtils"),
      s = cc._decorator,
      u = s.ccclass,
      l = (s.property, function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.al_loc = [], t.rv_ing = !0, t
        }
        return i(t, e), t.prototype.parseConfig = function(e) {
          cc.sys.isMobile && cc.sys.isNative && (cc.sys.os == cc.sys.OS_IOS && null != e.ios && null != e.ios[c.default.getBundleId()] ? (this.rv_ing = e.ios[c.default.getBundleId()].rv_ing, this.al_loc = e.ios[c.default.getBundleId()].al_loc) : cc.sys.os == cc.sys.OS_ANDROID && null != e.android && null != e.android[c.default.getBundleId()] && (this.rv_ing = e.android[c.default.getBundleId()].rv_ing, this.al_loc = e.android[c.default.getBundleId()].al_loc))
        }, r([u], t)
      }(a.default));
    o.default = l, cc._RF.pop()
  }, {
    "../utils/PlatformUtils": "PlatformUtils",
    "./BaseConfig": "BaseConfig"
  }],
  RewardUtil: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "3a73e35NIlEUKjgDNadKPuO", "RewardUtil"), Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var n = function() {
      function e() {}
      return e.registerRewardClazz = function(t, o) {
        e.rewardClazzMap.set(t, o)
      }, e.getRewardClazz = function(t) {
        return e.rewardClazzMap.get(t)
      }, e.generateReward = function(t) {
        var o = new(e.getRewardClazz(t.get("key")));
        return o.unpack(t), o
      }, e.generateRewardFromJson = function(t) {
        var o = new(e.getRewardClazz(t.key));
        return o.fromJson(t), o
      }, e.rewardClazzMap = new Map, e
    }();
    o.default = n, cc._RF.pop()
  }, {}],
  ScrollToTop: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "f107fFIg+tJ+LWKcwJ8gdpH", "ScrollToTop");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var a = cc._decorator,
      c = a.ccclass,
      s = a.property,
      u = function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.scrollView = null, t
        }
        return i(t, e), t.prototype.onEnable = function() {
          this.scrollView.scrollToTop()
        }, t.prototype.onNewQuest = function() {
          var e = this;
          this.scheduleOnce(function() {
            e.scrollView.scrollToTop()
          })
        }, r([s(cc.ScrollView)], t.prototype, "scrollView", void 0), r([c], t)
      }(cc.Component);
    o.default = u, cc._RF.pop()
  }, {}],
  StarGameButton: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "9fc7dwqXaxELb32DZyQ1e3R", "StarGameButton");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var a = e("../../framework/ui/BaseFeatureButton"),
      c = e("../../framework/ui/UIPopupManager"),
      s = e("../../framework/ui/UIScreenManager"),
      u = e("../../framework/utils/Utils"),
      l = e("../gameplay/GamePlay"),
      p = e("../../framework/network/HttpUtils"),
      d = e("../network/ApiDefine"),
      f = e("../../framework/utils/ClientData"),
      h = e("../../framework/ePrefabDefine"),
      g = e("../../framework/utils/PrefabUtils"),
      _ = cc._decorator,
      y = _.ccclass,
      m = (_.property, function(e) {
        function t() {
          return null !== e && e.apply(this, arguments) || this
        }
        return i(t, e), t.prototype.onStartGame = function() {
          var e = this;
          if (!s.default.instance.hasScreen(l.GamePlay)) {
            if (!f.default.AppModel) return console.log(" chua co du lieu AppModel"), void c.default.instance.showPopup("Ch\u01b0a c\xf3 d\u1eef li\u1ec7u b\xe0i thi");
            var t = {
              api_key: f.default.API_KEY,
              serviceCode: f.default.SERVICE_CODE,
              token: f.default.AppModel.token,
              gameId: f.default.AppModel.game.gameId,
              examKey: f.default.AppModel.game.examKey,
              deviceId: "",
              IPClient: ""
            };
            p.default.postApi(d.ApiDefine.START_GAME, t, function(t) {
              t.success ? s.default.instance.pushScreen(e.featurePrefab || g.default.getPrefab(h.ePrefabDefine.GAME_PLAY), function() {}) : u.default.handleErrorApi(t)
            }, !0)
          }
        }, r([y], t)
      }(a.default));
    o.default = m, cc._RF.pop()
  }, {
    "../../framework/ePrefabDefine": "ePrefabDefine",
    "../../framework/network/HttpUtils": "HttpUtils",
    "../../framework/ui/BaseFeatureButton": "BaseFeatureButton",
    "../../framework/ui/UIPopupManager": "UIPopupManager",
    "../../framework/ui/UIScreenManager": "UIScreenManager",
    "../../framework/utils/ClientData": "ClientData",
    "../../framework/utils/PrefabUtils": "PrefabUtils",
    "../../framework/utils/Utils": "Utils",
    "../gameplay/GamePlay": "GamePlay",
    "../network/ApiDefine": "ApiDefine"
  }],
  StringConfig: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "0cdd6/OCVJPD4nk7DsoHdpH", "StringConfig");
    var n, i = this && this.__extends || (n = function(e, t) {
      return (n = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, t) {
          e.__proto__ = t
        } || function(e, t) {
          for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
        })(e, t)
    }, function(e, t) {
      function o() {
        this.constructor = e
      }
      n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
    });
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var r = function(e) {
      function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.stringMap = new Map, t
      }
      return i(t, e), t.prototype.parseConfig = function(e) {
        for (var t = 0, o = e; t < o.length; t++) {
          var n = o[t],
            i = n.key;
          i && i.length && this.stringMap.set(i, n)
        }
      }, t
    }(e("./BaseConfig").default);
    o.default = r, cc._RF.pop()
  }, {
    "./BaseConfig": "BaseConfig"
  }],
  StringUtils: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "535b1GPBwZD/LzTHbGs9LRL", "StringUtils"), Object.defineProperty(o, "__esModule", {
      value: !0
    }), String.prototype.format || (String.prototype.format = function() {
      var e = arguments;
      return this.replace(/{(\d+)}/g, function(t, o) {
        return void 0 !== e[o] ? e[o] : t
      })
    });
    var n = function() {
      function e() {}
      return e.escapeRegExp = function(e) {
        return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
      }, e.isNullOrEmpty = function(e) {
        return "string" == typeof e && 0 === e.length || null === e
      }, e.getContentWithUserInput = function(e, t, o) {
        void 0 === o && (o = "_");
        for (var n = e, i = t.split(""); - 1 != n.indexOf(o) && i && i.length;) n = n.replace(o, "<u>" + i[0] + "</u>"), i.shift();
        return n
      }, e.percentString = function(e) {
        return Math.floor(100 * e).toString() + "%"
      }, e.formatAlignNumberWithK = function(e, t, o) {
        void 0 === e && (e = 0), void 0 === t && (t = ","), void 0 === o && (o = !1);
        var n = (e += .1) < 0,
          i = (e = Math.abs(Math.floor(e))).toString();
        if (o)
          for (var r = i.length - 3; r > 0;) i = i.insertAt(r, t), r -= 3;
        else {
          var a = "";
          if (i.length > 9 ? (i = (e / 1e9).toFixed(2), a = "B") : i.length > 6 ? (i = (e / 1e6).toFixed(2), a = "M") : i.length >= 4 ? (i = (e / 1e3).toFixed(1), a = "K") : i.length > 3 && (i = i.insertAt(1, t)), i.indexOf(".") > -1) {
            for (;
              "0" === i[i.length - 1];) i = i.slice(0, -1);
            "." === i[i.length - 1] && (i = i.slice(0, -1))
          }
          i += a
        }
        return n && (i = "-" + i), i
      }, e.formatNumber = function(t, o) {
        return void 0 === o && (o = 999999999), (t = Math.round(t)) < o ? e.formatNumberWithToken(t, ",") : e.formatAlignNumberWithK(t, ",")
      }, e.formatNumberWithSeparator = function(t, o, n) {
        return void 0 === o && (o = ","), void 0 === n && (n = 999999999), (t = Math.round(t)) < n ? e.formatNumberWithToken(t, o) : e.formatAlignNumberWithK(t, o)
      }, e.humanFileSize = function(e, t) {
        void 0 === t && (t = !1);
        var o = t ? 1e3 : 1024;
        if (Math.abs(e) < o) return e + " B";
        var n = t ? ["kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"] : ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"],
          i = -1;
        do {
          e /= o, ++i
        } while (Math.abs(e) >= o && i < n.length - 1);
        return e.toFixed(1) + " " + n[i]
      }, e.paramsToQueryString = function(e) {
        try {
          var t = [];
          for (var o in e) t.push(o + "=" + e[o]);
          return t.join("&")
        } catch (n) {
          cc.log("PackDataForRequest Error: " + n.message)
        }
        return ""
      }, e.queryStringToParams = function(e) {
        var t, o, n, i, r = e.indexOf("?") + 1,
          a = e.indexOf("#") + 1 || e.length + 1,
          c = e.slice(r, a - 1),
          s = c.replace(/\+/g, " ").split("&"),
          u = {};
        if (c !== e && "" !== c) {
          for (t = 0; t < s.length; t++) i = s[t].split("=", 2), o = decodeURIComponent(i[0]), n = decodeURIComponent(i[1]), u.hasOwnProperty(o) || (u[o] = []), u[o].push(2 === i.length ? n : null);
          return u
        }
      }, e.formatNumberWithToken = function(e, t) {
        return void 0 === t && (t = ","), 0 == (e = Math.floor(e)) ? "0" : e.toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, t)
      }, e.getQueryString = function(e, t) {
        var o = t || window.location.href,
          n = new RegExp("[?&]" + e + "=([^&#]*)", "i").exec(o);
        return n ? n[1] : null
      }, e.replaceAll = function(e, t, o) {
        if (!e) return e;
        if (!t) return e;
        if (null == o || null == o) return e;
        for (; - 1 != e.indexOf(t);) e = e.replace(t, o);
        return e
      }, e.ISOStringFromTime = function(t) {
        var o = Math.floor(t / 3600),
          n = Math.floor((t - 3600 * o) / 60),
          i = Math.floor(t - 3600 * o - 60 * n);
        return e.formatNumber(o, 2) + ":" + e.formatNumber(n, 2) + ":" + e.formatNumber(i, 2)
      }, e.stringFromShortTime = function(e) {
        var t = Math.floor(e / 3600),
          o = Math.floor((e - 3600 * t) / 60),
          n = Math.floor(e - 3600 * t - 60 * o),
          i = "";
        return t > 9 ? i = i + t + ":" : t > 0 ? i = i + "0" + t + ":" : i += "", o > 9 ? i = i + o + ":" : o > 0 ? i = i + "0" + o + ":" : i += "00:", n > 9 ? i += n : n > 0 ? i = i + "0" + n : i += "00", i
      }, e.stringFromRemainingTime = function(e, t) {
        void 0 === t && (t = 1);
        var o = e;
        if (0 == Math.floor(o)) return "0 gi\xe2y";
        var n = Math.floor(o / 86400),
          i = Math.floor((o - 86400 * n) / 3600),
          r = Math.floor((o - 86400 * n - 3600 * i) / 60),
          a = Math.floor(o - 86400 * n - 3600 * i - 60 * r),
          c = "",
          s = "",
          u = "",
          l = "",
          p = 0;
        return n > 0 && p < t && (c = n + " ng\xe0y", p++), i > 0 && p < t && (s = (0 == p ? "" : " ") + i + " gi\u1edd", p++), r > 0 && p < t && (u = (0 == p ? "" : " ") + r + " ph\xfat", p++), a > 0 && p < t && (l = (0 == p ? "" : " ") + a + " gi\xe2y", p++), c + s + u + l
      }, e.dateTimeFromTimeString = function(e) {
        var t = e.split(" ")[0],
          o = e.split(" ")[1],
          n = parseInt(t.split("-")[0]),
          i = parseInt(t.split("-")[1]),
          r = parseInt(t.split("-")[2]),
          a = parseInt(o.split(":")[0]),
          c = parseInt(o.split(":")[1]),
          s = parseInt(o.split(":")[2]),
          u = new Date;
        return u.setFullYear(n), u.setMonth(i - 1), u.setDate(r), u.setHours(a), u.setMinutes(c), u.setSeconds(s), u
      }, e.timestampToDateTimeString = function(e, t, o) {
        void 0 === t && (t = !0), void 0 === o && (o = "-");
        var n = new Date(e),
          i = ("0" + n.getDate()).slice(-2),
          r = ("0" + (n.getMonth() + 1)).slice(-2);
        return t ? n.getFullYear() + o + r + o + i : i + o + r + o + n.getFullYear()
      }, e.stampToString = function(e, t) {
        if (void 0 === t && (t = " "), null == e || 0 == e) return "";
        var o = new Date(e),
          n = o.getFullYear(),
          i = o.getDate(),
          r = o.getMonth() + 1,
          a = o.getMinutes(),
          c = o.getHours(),
          s = o.getSeconds(),
          u = n.toString(),
          l = ("0" + i).slice(-2),
          p = ("0" + r).slice(-2),
          d = ("0" + a).slice(-2);
        return l + "/" + p + "/" + u + t + ("0" + c).slice(-2) + ":" + d + ":" + ("0" + s).slice(-2)
      }, e.stampToDate = function(e) {
        if (null == e || 0 == e) return "";
        var t = new Date(e),
          o = t.getFullYear(),
          n = t.getDate(),
          i = t.getMonth() + 1,
          r = o.toString();
        return ("0" + n).slice(-2) + "/" + ("0" + i).slice(-2) + "/" + r
      }, e.versionCompare = function(e, t, o) {
        var n = o && o.lexicographical,
          i = o && o.zeroExtend,
          r = e.split("."),
          a = t.split(".");

        function c(e) {
          return (n ? /^\d+[A-Za-z]*$/ : /^\d+$/).test(e)
        }
        if (!r.every(c) || !a.every(c)) return NaN;
        if (i) {
          for (; r.length < a.length;) r.push("0");
          for (; a.length < r.length;) a.push("0")
        }
        n || (r = r.map(Number), a = a.map(Number));
        for (var s = 0; s < r.length; ++s) {
          if (a.length == s) return 1;
          if (r[s] != a[s]) return r[s] > a[s] ? 1 : -1
        }
        return r.length != a.length ? -1 : 0
      }, e
    }();
    o.default = n, cc._RF.pop()
  }, {}],
  TextContent: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "5fa3f7QvgdKKI5cSNSwFmhX", "TextContent");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var a = e("./ContentComponent"),
      c = e("../../../../framework/ui/UIPopupManager"),
      s = e("../../../../framework/utils/ClientData"),
      u = e("../../../config/ioe_config"),
      l = e("../../../../framework/ui/ScrollToTop"),
      p = e("../../answer/AnswerButton"),
      d = e("../../../../framework/utils/StringUtils"),
      f = e("../../../../framework/zai/GlobalEvent"),
      h = e("../../common/DienDoanVan"),
      g = cc._decorator,
      _ = g.ccclass,
      y = g.property,
      m = function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.scrollViewContent = null, t.scrollAskContent = null, t.scrollViewArr = [], t.buttons = [], t.desStrContent = "", t.askStrContent = "", t
        }
        return i(t, e), t.prototype.start = function() {}, t.prototype.stopSoundIfNeed = function() {}, t.prototype.updateWithQuestion = function(e, t, o) {
          this.node.active = this.contentType == e.questionDescription.contentType, cc.log("contentType ", this.contentType, " isConversation", this.isConversation, " = ", o), this.contentType == u.IOE.ContentType.Text && this.isConversation != o && (this.node.active = !1), this.node.active && (this.inputTxt = "", this.questionModel = e, this.currentQuestionNumber = t, this.questNumberLbl.string = "" + t, this.totalQuestNumberLbl && (this.totalQuestNumberLbl.string = "" + s.default.AppModel.game.questionArr.length), this.updateQuestContent(), this.node.active && (this.canClick = !0, this.updateStateButtons(!0), this.questionModel.questionType != u.IOE.QuestionType.TrueOrFalse && this.updateTxtInAllBtn(this.buttons), this.scrollViewArr.forEach(function(e) {
            e.onNewQuest()
          })))
        }, t.prototype.updateQuestContent = function() {
          var e = this.questionModel,
            t = e.questionDescription.content || "",
            o = e.questionContent.content || "";
          if (o = d.default.getContentWithUserInput(o, this.inputTxt), cc.log("new des " + o), this.askLbl) {
            if (o != this.askStrContent && (this.askStrContent = o, this.noScrollAskLbl.string = o, this.noScrollAskLbl.node.active = !0, this.noScrollAskLbl.node.opacity = 1), this.descriptionLbl) {
              var n = t;
              this.questionModel.questionType == u.IOE.QuestionType.DienTuVaoChoTrong ? (i = this.centerContentInBox(this.noScrolldescriptionLbl, this.descriptionLbl, this.scrollViewContent, n).getComponent(h.default)) && (i.setData(t), this.dienDoanVan = i, this.dienDoanVan.getFirstEditBox().focus()) : n != this.desStrContent && (this.desStrContent = n, this.noScrolldescriptionLbl.string = n, this.noScrolldescriptionLbl.node.active = !0, this.noScrolldescriptionLbl.node.opacity = 0)
            }
          } else if (this.descriptionLbl) {
            var i;
            n = o + ("" != t ? "\n" + t : ""), this.questionModel.questionType == u.IOE.QuestionType.DienTuVaoChoTrong ? (i = this.centerContentInBox(this.noScrolldescriptionLbl, this.descriptionLbl, this.scrollViewContent, n).getComponent(h.default)) && (i.setData(n), this.dienDoanVan = i, this.dienDoanVan.getFirstEditBox().focus()) : n != this.desStrContent && (this.desStrContent = n, this.noScrolldescriptionLbl.string = n, this.noScrolldescriptionLbl.node.opacity = 0)
          }
        }, t.prototype.onButtonClick = function(e) {
          if (this.canClick) {
            var t = e.currentTarget.getComponent(p.AnswerButton),
              o = t.btnIdx;
            console.log("onButtonClick::btnContent", o, e.currentTarget, e), this.idBtnClick = o;
            var n = "";
            switch (o) {
              case 0:
                n = "False", t.node.opacity = 127;
                break;
              case 1:
                n = "True", t.node.opacity = 127;
                break;
              case 6:
                if (0 == this.validateInput(this.questionModel.questionContent)) return void c.default.instance.showPopup("Vui l\xf2ng nh\u1eadp \u0111\u1ee7 s\u1ed1 k\xfd t\u1ef1");
                n = this.inputTxt, t.node.opacity = 127;
                break;
              default:
                n = t.btnTxt
            }
            this.callApiAnswer(n)
          }
        }, t.prototype.onKeyDown = function(e) {
          if (0 != this.node.active) switch (cc.log("press " + e.keyCode, this.node), e.keyCode) {
            case cc.macro.KEY.enter:
              this.onKeyEnterPress()
          }
        }, t.prototype.onEditReturn = function() {
          console.log("onEditReturn"), this.onKeyEnterPress()
        }, t.prototype.onEditTextChange = function(e) {
          console.log("onEditTextChange", e), this.inputTxt = e
        }, t.prototype.onKeyEnterPress = function() {
          if (this.node.active && this.questionModel.questionType == u.IOE.QuestionType.DienTuVaoChoTrong && this.canClick && !c.default.instance.isHavePopup)
            if (0 != this.validateInput(this.questionModel.questionContent)) {
              var e = this.inputTxt;
              this.callApiAnswer(e)
            } else c.default.instance.showPopup("Vui l\xf2ng nh\u1eadp \u0111\u1ee7 s\u1ed1 k\xfd t\u1ef1")
        }, t.prototype.callApiAnswer = function(e) {
          var t = this,
            o = {
              api_key: s.default.API_KEY,
              serviceCode: s.default.SERVICE_CODE,
              token: s.default.AppModel.token,
              examKey: s.default.AppModel.game.examKey,
              ans: {
                questId: this.questionModel.questionId,
                point: this.questionModel.questionPoint,
                ans: e
              },
              IPClient: s.default.IpClient,
              deviceId: s.default.DeviceId
            };
          this.canClick = !1, this.requestAnsCheck(o, e, function() {
            t.canClick = !0
          })
        }, t.prototype.parseAnswerCheckResponse = function(t, o) {
          e.prototype.parseAnswerCheckResponse.call(this, t, o);
          var n = !1,
            i = t.data.point;
          null != i && i > 0 && (n = !0), this.updateStateButtons(!1), this.updateStateCorrectButtons(n);
          var r = cc.delayTime(u.IOE.TIME_TO_NEXT_QUEST),
            a = cc.callFunc(function() {
              f.default.instance.postEvent(f.GlobalEventName.IOE_CLIMB_NEXT_CHECKPOINT, {})
            }),
            c = cc.sequence(r, a);
          this.node.runAction(c)
        }, t.prototype.updateStateButtons = function(e) {
          for (var t = 0; t < this.buttons.length; t++) {
            var o = this.buttons[t];
            o.enabled = e, o.interactable = e, o.resetStateWwithAnswer(), e && (o.node.opacity = 255)
          }
        }, t.prototype.updateStateCorrectButtons = function(e) {
          for (var t = 0; t < this.buttons.length; t++) {
            var o = this.buttons[t];
            this.idBtnClick == o.btnIdx && (cc.log("updateStateCorrectButtons this.idBtnClick=" + this.idBtnClick + " btnIdx=" + o.btnIdx + " to  " + !e), o.changeStateWwithAnswer(e))
          }
        }, t.prototype.onLoad = function() {
          null != this.noScrolldescriptionLbl && null != this.noScrolldescriptionLbl.node && this.noScrolldescriptionLbl.node.on("richtext-update-string", this.onRichTextChange, this), null != this.noScrollAskLbl && null != this.noScrollAskLbl.node && this.noScrollAskLbl.node.on("richtext-update-string", this.onRichTextAskChange, this)
        }, t.prototype.onDestroy = function() {
          null != this.noScrolldescriptionLbl && null != this.noScrolldescriptionLbl.node && this.noScrolldescriptionLbl.node.off("richtext-update-string", this.onRichTextChange, this), null != this.noScrollAskLbl && null != this.noScrollAskLbl.node && this.noScrollAskLbl.node.off("richtext-update-string", this.onRichTextAskChange, this)
        }, t.prototype.onRichTextChange = function() {
          var e = this;
          cc.log("onRichTextChange ....."), this.scheduleOnce(function() {
            return e.onSizeChange()
          })
        }, t.prototype.onRichTextAskChange = function() {
          var e = this;
          cc.log("onRichTextAskChange ....."), this.scheduleOnce(function() {
            return e.onAskLblSizeChange()
          })
        }, t.prototype.onSizeChange = function() {
          if (null != this.noScrolldescriptionLbl) {
            var e = this.noScrolldescriptionLbl.node.getContentSize(),
              t = this.scrollViewContent.node.getContentSize();
            e.height > t.height ? (this.scrollViewContent.node.getComponentInChildren(cc.Scrollbar).node.active = !0, this.descriptionLbl.node.active = !0, this.descriptionLbl.string = this.desStrContent, this.scrollViewContent.scrollToTop(), this.noScrolldescriptionLbl.node.active = !1) : (this.noScrolldescriptionLbl.node.opacity = 255, this.noScrolldescriptionLbl.node.active = !0, this.descriptionLbl.node.active = !1, this.scrollViewContent.node.getComponentInChildren(cc.Scrollbar).node.active = !1)
          }
        }, t.prototype.onAskLblSizeChange = function() {
          if (null != this.noScrollAskLbl) {
            var e = this.noScrollAskLbl.node.getContentSize(),
              t = this.scrollAskContent.node.getContentSize();
            e.height > t.height ? (this.scrollAskContent.node.getComponentInChildren(cc.Scrollbar).node.active = !0, this.askLbl.node.active = !0, this.askLbl.string = this.askStrContent, this.scrollAskContent.scrollToTop(), this.noScrollAskLbl.node.active = !1) : (this.noScrollAskLbl.node.opacity = 255, this.noScrollAskLbl.node.active = !0, this.askLbl.node.active = !1, this.scrollAskContent.node.getComponentInChildren(cc.Scrollbar).node.active = !1)
          }
        }, r([y({
          type: cc.RichText
        })], t.prototype, "askLbl", void 0), r([y({
          type: cc.RichText
        })], t.prototype, "noScrollAskLbl", void 0), r([y({
          type: cc.RichText
        })], t.prototype, "descriptionLbl", void 0), r([y({
          type: cc.RichText
        })], t.prototype, "noScrolldescriptionLbl", void 0), r([y({
          type: cc.Label
        })], t.prototype, "questNumberLbl", void 0), r([y({
          type: cc.Label
        })], t.prototype, "totalQuestNumberLbl", void 0), r([y(cc.ScrollView)], t.prototype, "scrollViewContent", void 0), r([y(cc.ScrollView)], t.prototype, "scrollAskContent", void 0), r([y({
          type: l.default
        })], t.prototype, "scrollViewArr", void 0), r([y({
          type: p.AnswerButton
        })], t.prototype, "buttons", void 0), r([_], t)
      }(a.default);
    o.default = m, cc._RF.pop()
  }, {
    "../../../../framework/ui/ScrollToTop": "ScrollToTop",
    "../../../../framework/ui/UIPopupManager": "UIPopupManager",
    "../../../../framework/utils/ClientData": "ClientData",
    "../../../../framework/utils/StringUtils": "StringUtils",
    "../../../../framework/zai/GlobalEvent": "GlobalEvent",
    "../../../config/ioe_config": "ioe_config",
    "../../answer/AnswerButton": "AnswerButton",
    "../../common/DienDoanVan": "DienDoanVan",
    "./ContentComponent": "ContentComponent"
  }],
  TextDongVien: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "1c270qIFmRI6Zxw/2+pUgZz", "TextDongVien");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.TextDongVien = void 0;
    var a = e("../../../framework/utils/ClientData"),
      c = cc._decorator,
      s = c.ccclass,
      u = c.property,
      l = function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.nNodes = [], t
        }
        return i(t, e), t.prototype.onLoad = function() {
          this.nNodes.push(this.nGoodJob), this.nNodes.push(this.nTryAgain), this.nNodes.push(this.nDontGiveUp)
        }, t.prototype.start = function() {}, t.prototype.showWithResult = function() {
          this.node.active = !0, this.hideAll(), 1 == a.default.correctPercent ? (this.nGoodJob.active = !0, cc.log("TextDongVien nGoodJob")) : a.default.correctPercent >= .7 ? (this.nTryAgain.active = !0, cc.log("TextDongVien nTryAgain")) : (this.nDontGiveUp.active = !0, cc.log("TextDongVien nDontGiveUp"))
        }, t.prototype.hideAll = function() {
          for (var e = 0; e < this.nNodes.length; e++) this.nNodes[e].active = !1
        }, r([u({
          type: cc.Node
        })], t.prototype, "nGoodJob", void 0), r([u({
          type: cc.Node
        })], t.prototype, "nTryAgain", void 0), r([u({
          type: cc.Node
        })], t.prototype, "nDontGiveUp", void 0), r([s], t)
      }(cc.Component);
    o.TextDongVien = l, cc._RF.pop()
  }, {
    "../../../framework/utils/ClientData": "ClientData"
  }],
  TracNghiemQuestion: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "ce588LpbpBHE4BNX6IaA/tl", "TracNghiemQuestion");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var a = e("./QuestionComponent"),
      c = cc._decorator,
      s = c.ccclass,
      u = (c.property, function(e) {
        function t() {
          return null !== e && e.apply(this, arguments) || this
        }
        return i(t, e), t.prototype.showWithQuestion = function(e, t) {
          if (cc.log("TracNghiemQuestion show question this.questType=", this.questType, " qModel.questionType=", e.questionType), this.questType == e.questionType) {
            this.node.active = !0, cc.log("TracNghiemQuestion show question", e), this.questionModel = e, this.resetMusic(), this.startQuestTime = Date.now() / 1e3, this.questionModel.questionType, this.descriptionType, this.contentType;
            var o = this.questionModel.questionDescription.hasText,
              n = this.questionModel.questionContent.hasText,
              i = o && n;
            if (cc.log("isConversation ", i), this.contentComs.length)
              for (var r = 0; r < this.contentComs.length; r++) {
                var a = this.contentComs[r];
                a.timeStartQuest = this.startQuestTime, a.updateWithQuestion(this.questionModel, t, i)
              }
          } else this.node.active = !1
        }, r([s], t)
      }(a.default));
    o.default = u, cc._RF.pop()
  }, {
    "./QuestionComponent": "QuestionComponent"
  }],
  TrueFalseQuestion: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "aadddQeWv9JhZb3FRdOnUVr", "TrueFalseQuestion");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var a = e("./QuestionComponent"),
      c = cc._decorator,
      s = c.ccclass,
      u = (c.property, function(e) {
        function t() {
          return null !== e && e.apply(this, arguments) || this
        }
        return i(t, e), t.prototype.showWithQuestion = function(e, t) {
          if (this.questType == e.questionType) {
            this.node.active = !0, cc.log("TrueFase show question", e), this.questionModel = e, this.resetMusic(), this.startQuestTime = Date.now() / 1e3, this.questionModel.questionType, this.descriptionType, this.contentType;
            var o = this.questionModel.questionDescription.hasText,
              n = this.questionModel.questionContent.hasText,
              i = o && n;
            if (cc.log("isConversation ", i), this.contentComs.length)
              for (var r = 0; r < this.contentComs.length; r++) {
                var a = this.contentComs[r];
                a.timeStartQuest = this.startQuestTime, a.updateWithQuestion(this.questionModel, t, i)
              }
          } else this.node.active = !1
        }, r([s], t)
      }(a.default));
    o.default = u, cc._RF.pop()
  }, {
    "./QuestionComponent": "QuestionComponent"
  }],
  UIAutoLayout: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "233bbhoir9NSbyeXBpeU3Yb", "UIAutoLayout");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.eAutoLayoutType = void 0;
    var a, c = e("./ControlEvent"),
      s = cc._decorator,
      u = s.ccclass,
      l = s.property;
    (function(e) {
      e[e.Raw = 0] = "Raw", e[e.Scale = 1] = "Scale", e[e.ScaleToFit = 2] = "ScaleToFit", e[e.ScaleToFill = 3] = "ScaleToFill"
    })(a = o.eAutoLayoutType || (o.eAutoLayoutType = {}));
    var p = function(e) {
      function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.type = a.Raw, t
      }
      return i(t, e), t.prototype.onEnable = function() {
        this.node.parent && this.node.parent.on(c.default.SizeChanged, this._onChangeFrame, this), this.node.on(c.default.SizeChanged, this._onChangeFrame, this), this._updateUI()
      }, t.prototype.onDisable = function() {
        this.node.parent && this.node.parent.off(c.default.SizeChanged, this._onChangeFrame, this), this.node.off(c.default.SizeChanged, this._onChangeFrame, this)
      }, t.prototype._onChangeFrame = function() {
        this._updateUI()
      }, t.prototype._updateUI = function() {
        if (this.node.parent) {
          var e = this.node.parent.getContentSize(),
            t = e.width / this.node.width,
            o = e.height / this.node.height;
          this.type == a.ScaleToFill ? this.node.scale = Math.max(t, o) : this.type == a.ScaleToFit ? this.node.scale = Math.min(t, o) : this.type == a.Scale && (this.node.scaleX = t, this.node.scaleY = o)
        }
      }, r([l(cc.Enum({
        type: cc.Enum(a)
      }))], t.prototype, "type", void 0), r([u], t)
    }(cc.Component);
    o.default = p, cc._RF.pop()
  }, {
    "./ControlEvent": "ControlEvent"
  }],
  UIButtonClosePopup: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "e7fadTiLblOg5m7ocrY8XEQ", "UIButtonClosePopup");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var a = e("./ControlEvent"),
      c = e("./UIPopup"),
      s = e("../audio/AudioManager"),
      u = e("./UIPopupManager"),
      l = e("../audio/eSoundDefine"),
      p = cc._decorator,
      d = p.ccclass,
      f = (p.property, function(e) {
        function t() {
          return null !== e && e.apply(this, arguments) || this
        }
        return i(t, e), t.prototype.onLoad = function() {
          var e = this.node.getComponent(cc.Button);
          e || (e = this.node.addComponent(cc.Button))
        }, t.prototype.onEnable = function() {
          this.node.on(a.default.Click, this._onCloseClicked, this)
        }, t.prototype.onDisable = function() {
          this.node.off(a.default.Click, this._onCloseClicked, this)
        }, t.prototype._onCloseClicked = function() {
          s.default.instance.playSfx(l.eSoundDefine.close_popup);
          for (var e = this.node; e;) {
            var t = e.getComponent(c.default);
            if (t) {
              u.default.instance.removePopup(t);
              break
            }
            e = e.parent
          }
        }, r([d], t)
      }(cc.Component));
    o.default = f, cc._RF.pop()
  }, {
    "../audio/AudioManager": "AudioManager",
    "../audio/eSoundDefine": "eSoundDefine",
    "./ControlEvent": "ControlEvent",
    "./UIPopup": "UIPopup",
    "./UIPopupManager": "UIPopupManager"
  }],
  UIButtonCloseWindow: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "a68e4gDBylIdoPalmSb974f", "UIButtonCloseWindow");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var a = e("../audio/AudioManager"),
      c = e("../audio/eSoundDefine"),
      s = e("./ControlEvent"),
      u = e("./UIWindow"),
      l = e("./UIWindowManager"),
      p = cc._decorator,
      d = p.ccclass,
      f = (p.property, function(e) {
        function t() {
          return null !== e && e.apply(this, arguments) || this
        }
        return i(t, e), t.prototype.onLoad = function() {
          var e = this.node.getComponent(cc.Button);
          e || (e = this.node.addComponent(cc.Button))
        }, t.prototype.onEnable = function() {
          this.node.on(s.default.Click, this._onCloseClicked, this)
        }, t.prototype.onDisable = function() {
          this.node.off(s.default.Click, this._onCloseClicked, this)
        }, t.prototype._onCloseClicked = function() {
          a.default.instance.playSfx(c.eSoundDefine.close_minigame);
          for (var e = this.node.parent; e;) {
            var t = e.getComponent(u.default);
            if (t) {
              l.default.instance.removeWindow(t);
              break
            }
            e = e.parent
          }
        }, r([d], t)
      }(cc.Component));
    o.default = f, cc._RF.pop()
  }, {
    "../audio/AudioManager": "AudioManager",
    "../audio/eSoundDefine": "eSoundDefine",
    "./ControlEvent": "ControlEvent",
    "./UIWindow": "UIWindow",
    "./UIWindowManager": "UIWindowManager"
  }],
  UIButtonCommon: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "c5d20Ldyo5ETpHUdbxJVPwv", "UIButtonCommon");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var a = cc._decorator,
      c = a.ccclass,
      s = a.property,
      u = function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.lbAction = null, t
        }
        return i(t, e), r([s(cc.Label)], t.prototype, "lbAction", void 0), r([c], t)
      }(cc.Component);
    o.default = u, cc._RF.pop()
  }, {}],
  UIButtonCopy: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "776aaOKe0JIu5Z1RHw8zD5Q", "UIButtonCopy");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var a = e("../audio/AudioManager"),
      c = e("../audio/eSoundDefine"),
      s = e("../utils/Utils"),
      u = e("./ControlEvent"),
      l = cc._decorator,
      p = l.ccclass,
      d = l.property,
      f = function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.label = null, t.editBox = null, t
        }
        return i(t, e), t.prototype.onLoad = function() {
          var e = this.node.getComponent(cc.Button);
          e || (e = this.node.addComponent(cc.Button))
        }, t.prototype.onEnable = function() {
          this.node.on(u.default.Click, this.onClicked, this)
        }, t.prototype.onDisable = function() {
          this.node.off(u.default.Click, this.onClicked, this)
        }, t.prototype.onClicked = function() {
          a.default.instance.playSfx(c.eSoundDefine.click), this.label ? s.default.copy(this.label.string) : this.editBox && s.default.copy(this.editBox.string)
        }, r([d(cc.Label)], t.prototype, "label", void 0), r([d(cc.Label)], t.prototype, "editBox", void 0), r([p], t)
      }(cc.Component);
    o.default = f, cc._RF.pop()
  }, {
    "../audio/AudioManager": "AudioManager",
    "../audio/eSoundDefine": "eSoundDefine",
    "../utils/Utils": "Utils",
    "./ControlEvent": "ControlEvent"
  }],
  UIButtonPopScreen: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "2e855MsLrlFXomFUWl//JOE", "UIButtonPopScreen");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var a = e("./ControlEvent"),
      c = e("../audio/AudioManager"),
      s = e("../audio/eSoundDefine"),
      u = e("./UIScreenManager"),
      l = cc._decorator,
      p = l.ccclass,
      d = l.property,
      f = function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.popToRoot = !1, t.manager = null, t
        }
        return i(t, e), t.prototype.onLoad = function() {
          var e = this.node.getComponent(cc.Button);
          e || (e = this.node.addComponent(cc.Button)), this.manager || (this.manager = u.default.instance)
        }, t.prototype.onEnable = function() {
          this.node.on(a.default.Click, this._onCloseClicked, this)
        }, t.prototype.onDisable = function() {
          this.node.off(a.default.Click, this._onCloseClicked, this)
        }, t.prototype._onCloseClicked = function() {
          c.default.instance.playSfx(s.eSoundDefine.click), this.popToRoot ? this.manager.popToRootScreen() : this.manager.popScreen()
        }, r([d], t.prototype, "popToRoot", void 0), r([d(u.default)], t.prototype, "manager", void 0), r([p], t)
      }(cc.Component);
    o.default = f, cc._RF.pop()
  }, {
    "../audio/AudioManager": "AudioManager",
    "../audio/eSoundDefine": "eSoundDefine",
    "./ControlEvent": "ControlEvent",
    "./UIScreenManager": "UIScreenManager"
  }],
  UIDefine: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "d2b71jdI6BIV6yFWbZkbQlA", "UIDefine"), Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.BankName = o.NetworkType = o.DeviceRotation = o.eGUIType = o.eZIndex = o.ANIMATE_TIME = o.ANIMATE_SCALE_MIN = void 0, o.ANIMATE_SCALE_MIN = .6, o.ANIMATE_TIME = .24,
      function(e) {
        e[e.SCREEN = 4] = "SCREEN", e[e.NAVIGATOR = 8] = "NAVIGATOR", e[e.WINDOW = 16] = "WINDOW", e[e.POPUP = 64] = "POPUP", e[e.EFFECT = 128] = "EFFECT", e[e.DIALOG = 256] = "DIALOG", e[e.Z_ORDER_MAX = 1024] = "Z_ORDER_MAX", e[e.LOADING = 4096] = "LOADING"
      }(o.eZIndex || (o.eZIndex = {})),
      function(e) {
        e[e.SCREEN = 0] = "SCREEN", e[e.POPUP = 1] = "POPUP", e[e.WINDOW = 2] = "WINDOW"
      }(o.eGUIType || (o.eGUIType = {})),
      function(e) {
        e[e._0 = 0] = "_0", e[e._90 = 1] = "_90", e[e._180 = 2] = "_180", e[e._270 = 3] = "_270"
      }(o.DeviceRotation || (o.DeviceRotation = {})),
      function(e) {
        e[e.NONE = 0] = "NONE", e[e.LAN = 1] = "LAN", e[e.WWAN = 2] = "WWAN"
      }(o.NetworkType || (o.NetworkType = {})),
      function(e) {
        e.vcb = "vietcombank", e.vietcombank = "vietcombank", e.tcb = "techcombank", e.techcombank = "techcombank", e.agribank = "agribank", e.agr = "agribank", e.vietinbank = "vietinbank", e.vtb = "vietinbank", e.bidv = "bidv", e.vib = "vib", e.vpbank = "vpbank", e.vp = "vpbank", e.vpb = "vpbank", e.msb = "msb", e.maritimebank = "msb", e.sacombank = "sacombank", e.stb = "sacombank", e.acb = "acb", e.mbbank = "mbbank", e.mb = "mbbank", e.mbb = "mbbank", e.tpbank = "tpbank", e.tpb = "tpbank", e.shib = "shinhanbank", e.shinhanbank = "shinhanbank", e.shb = "shbank", e.shbank = "shbank", e.ocb = "ocb", e.eximbank = "eximbank", e.eib = "eib", e.bvb = "baovietbank", e.baovietbank = "baovietbank", e.vietcapitalbank = "vietcapitalbank", e.vccb = "vietcapitalbank", e.scb = "scb"
      }(o.BankName || (o.BankName = {})), cc._RF.pop()
  }, {}],
  UIDraggable: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "ec3d7lzwCBBoplz6X4IEOC9", "UIDraggable");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var a = e("./ControlEvent"),
      c = e("./UIViewGroup"),
      s = cc._decorator,
      u = s.ccclass,
      l = s.property,
      p = function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.draggable = !0, t.backToStartPosition = !1, t.autoFitEdge = !1, t._touchMoved = !1, t._startPosititon = cc.Vec3.ZERO, t
        }
        return i(t, e), t.prototype.onLoad = function() {
          this._startPosititon = this.node.position
        }, t.prototype.start = function() {
          this.autoFitEdge && this._handleAfterDragLogic()
        }, t.prototype._handleAfterDragLogic = function(e) {
          void 0 === e && (e = !0);
          var t = this.node.x,
            o = this.node.y,
            n = this.node.parent.height * (1 - this.node.parent.anchorY) - this.node.height * (1 - this.node.anchorY),
            i = -this.node.parent.height * this.node.parent.anchorY + this.node.height * this.node.anchorY,
            r = this.node.parent.width * (1 - this.node.parent.anchorX) - this.node.width * (1 - this.node.anchorX),
            a = -this.node.parent.width * this.node.parent.anchorX + this.node.width * this.node.anchorX,
            c = Math.abs(n - o),
            s = Math.abs(o - i),
            u = Math.abs(t - a),
            l = Math.abs(r - t),
            p = Math.min(c, s, u, l);
          e && (c == p ? this.node.runAction(cc.moveTo(c / 1e3, cc.v2(this.node.x, n)).easing(cc.easeBackOut())) : s == p ? this.node.runAction(cc.moveTo(s / 1e3, cc.v2(this.node.x, i)).easing(cc.easeBackOut())) : u == p ? this.node.runAction(cc.moveTo(u / 1e3, cc.v2(a, this.node.y)).easing(cc.easeBackOut())) : l == p && this.node.runAction(cc.moveTo(l / 1e3, cc.v2(r, this.node.y)).easing(cc.easeBackOut())))
        }, t.prototype.onEnable = function() {
          this.draggable ? (this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchBegan, this, !0), this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMoved, this, !0), this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnded, this, !0), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancelled, this, !0)) : this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchBegan, this), this.autoFitEdge && this.node.parent.on(a.default.SizeChanged, this.onParentSizeChanged, this)
        }, t.prototype.onDisable = function() {
          this.draggable ? (this.node.off(cc.Node.EventType.TOUCH_START, this._onTouchBegan, this, !0), this.node.off(cc.Node.EventType.TOUCH_MOVE, this._onTouchMoved, this, !0), this.node.off(cc.Node.EventType.TOUCH_END, this._onTouchEnded, this, !0), this.node.off(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancelled, this, !0)) : this.node.off(cc.Node.EventType.TOUCH_START, this._onTouchBegan, this), this.backToStartPosition && (this.node.position = this._startPosititon), this.autoFitEdge && this.node.parent.off(a.default.SizeChanged, this.onParentSizeChanged, this)
        }, t.prototype.onParentSizeChanged = function() {
          this.autoFitEdge && this._handleAfterDragLogic()
        }, t.prototype._stopPropagationIfTargetIsMe = function(e) {
          e.eventPhase == cc.Event.AT_TARGET && e.target == this.node && e.stopPropagation()
        }, t.prototype._onTouchBegan = function(e, t) {
          this.enabledInHierarchy && !this._hasNestedViewGroup(e, t) && (this.draggable ? (this.onDraggableBegan(e), this.node.emit(a.default.DragBegan), this._touchMoved = !1, this._stopPropagationIfTargetIsMe(e)) : e.stopPropagation())
        }, t.prototype._onTouchMoved = function(e, t) {
          if (this.enabledInHierarchy && !this._hasNestedViewGroup(e, t)) {
            this.onDraggableMoved(e), this.node.emit(a.default.DragMoved);
            var o = e.getLocation();
            if (cc.v2(o.x, o.y).sub(e.getStartLocation()).mag() > 12 && !this._touchMoved && e.target != this.node) {
              var n = new cc.Event.EventTouch(e.getTouches(), e.bubbles);
              n.type = cc.Node.EventType.TOUCH_CANCEL, n.touch = e.touch, e.target.dispatchEvent(n), this._touchMoved = !0
            }
          }
        }, t.prototype._onTouchEnded = function(e, t) {
          this.enabledInHierarchy && !this._hasNestedViewGroup(e, t) && (this.onDraggableEnded(e), this.node.emit(a.default.DragEnded), this._stopPropagationIfTargetIsMe(e))
        }, t.prototype._onTouchCancelled = function(e, t) {
          this.enabledInHierarchy && !this._hasNestedViewGroup(e, t) && (this.onDraggableCancelled(e), this.node.emit(a.default.DragCancelled), this._stopPropagationIfTargetIsMe(e))
        }, t.prototype.onDraggableBegan = function() {}, t.prototype.onDraggableEnded = function() {
          this.backToStartPosition && (this.node.position = this._startPosititon), this.autoFitEdge && this._handleAfterDragLogic()
        }, t.prototype.onDraggableCancelled = function() {
          this.backToStartPosition && (this.node.position = this._startPosititon), this.autoFitEdge && this._handleAfterDragLogic()
        }, t.prototype.onDraggableMoved = function(e) {
          this.node.position.x += e.touch.getDelta().x, this.node.position.y += e.touch.getDelta().y
        }, r([l], t.prototype, "draggable", void 0), r([l], t.prototype, "backToStartPosition", void 0), r([l], t.prototype, "autoFitEdge", void 0), r([u], t)
      }(c.default);
    o.default = p, cc._RF.pop()
  }, {
    "./ControlEvent": "ControlEvent",
    "./UIViewGroup": "UIViewGroup"
  }],
  UIFeatureNavigator: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "7fe61h5iDpKZYtOYh/dk3jD", "UIFeatureNavigator");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var a = e("../audio/AudioManager"),
      c = e("../audio/eSoundDefine"),
      s = e("../loading/Loading"),
      u = e("./ControlEvent"),
      l = e("./UIDefine"),
      p = e("./UIPopup"),
      d = e("./UIScreenManager"),
      f = e("./UIWindow"),
      h = e("./UIWindowManager"),
      g = cc._decorator,
      _ = g.ccclass,
      y = g.property,
      m = function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.featurePrefab = null, t.eSoundId = c.eSoundType.CLICK, t.GUIType = l.eGUIType.POPUP, t.loading = null, t
        }
        var o;
        return i(t, e), o = t, t.prototype.onLoad = function() {
          this.node.getComponent(cc.Button) || this.node.addComponent(cc.Button), this.loading && (this.loading.node.active = !1)
        }, t.prototype.onEnable = function() {
          this.node.on(u.default.Click, this._onClicked, this)
        }, t.prototype.onDisable = function() {
          this.node.off(u.default.Click, this._onClicked, this)
        }, t.prototype._onClicked = function() {
          this.playSfx(), this.onFeatureClicked()
        }, t.prototype.playSfx = function() {
          switch (this.eSoundId) {
            case c.eSoundType.CLICK:
            default:
              a.default.instance.playSfx(c.eSoundDefine.click)
          }
        }, t.prototype.onFeatureStart = function() {
          switch (this.GUIType) {
            case l.eGUIType.POPUP:
              p.default.showFromPrefab(this.featurePrefab, function() {});
              break;
            case l.eGUIType.WINDOW:
              if (this.featurePrefab.data.getComponent(f.default)) {
                var e = h.default.instance.findWindow(this.featurePrefab.data.name);
                e ? h.default.instance.pushWindowToTop(e.getComponent(f.default)) : h.default.instance.showWindowFromPrefab(this.featurePrefab)
              } else h.default.instance.showWindowFromPrefab(this.featurePrefab);
              break;
            case l.eGUIType.SCREEN:
              d.default.instance.pushScreen(this.featurePrefab, function() {})
          }
        }, t.prototype.onFeatureDownloadStarted = function() {}, t.prototype.onFeatureDownloadFinished = function() {}, t.prototype.onFeatureClicked = function() {
          var e = this;
          this.featurePrefab ? this.onFeatureStart() : this.loading && this.loading.state == s.eLoadingState.NONE && (o.loadingFeature || (o.loadingFeature = this, this.onFeatureDownloadStarted(), this.loading.node.active = !0, this.loading.loadResource(function(t, n) {
            if (t) cc.log(t);
            else {
              if (e.onFeatureDownloadFinished(), e.featurePrefab = n[0], !e.loading) return void(o.loadingFeature = null);
              e.loading.node.active = !1, o.loadingFeature == e && (e.onFeatureStart(), o.loadingFeature = null)
            }
          })))
        }, t.loadingFeature = null, r([y(cc.Prefab)], t.prototype, "featurePrefab", void 0), r([y({
          type: cc.Enum(c.eSoundType)
        })], t.prototype, "eSoundId", void 0), r([y({
          type: cc.Enum(l.eGUIType)
        })], t.prototype, "GUIType", void 0), r([y(s.default)], t.prototype, "loading", void 0), o = r([_], t)
      }(cc.Component);
    o.default = m, cc._RF.pop()
  }, {
    "../audio/AudioManager": "AudioManager",
    "../audio/eSoundDefine": "eSoundDefine",
    "../loading/Loading": "Loading",
    "./ControlEvent": "ControlEvent",
    "./UIDefine": "UIDefine",
    "./UIPopup": "UIPopup",
    "./UIScreenManager": "UIScreenManager",
    "./UIWindow": "UIWindow",
    "./UIWindowManager": "UIWindowManager"
  }],
  UIForegroundComponent: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "587a6YW5apKHK1c+2L1cLs4", "UIForegroundComponent");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.UIForegroundComponent = void 0;
    var a = cc._decorator,
      c = a.ccclass,
      s = (a.property, function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t._isGameActive = !0, t.hideTime = null, t
        }
        return i(t, e), Object.defineProperty(t.prototype, "isGameActive", {
          get: function() {
            return this._isGameActive
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype.onEnable = function() {
          cc.game.on(cc.game.EVENT_SHOW, this._onShowGame, this), cc.game.on(cc.game.EVENT_HIDE, this._onHideGame, this)
        }, t.prototype.onDisable = function() {
          cc.game.on(cc.game.EVENT_SHOW, this._onShowGame, this), cc.game.on(cc.game.EVENT_HIDE, this._onHideGame, this)
        }, t.prototype._onShowGame = function() {
          if (this.hideTime) {
            this._isGameActive = !0;
            var e = (performance.now() - this.hideTime) / 1e3;
            if (cc.sys.isNative && cc.sys.isMobile && this.hideTime) {
              e = Math.min(e, 120);
              for (var t = 0; t < e;) {
                var o = Math.min(.1, e - t);
                cc.director.getScheduler().update(o), t += o
              }
              this.hideTime = null
            }
            this.onResumeUI(e)
          }
        }, t.prototype._onHideGame = function() {
          this._isGameActive = !1, this.hideTime = performance.now(), this.onPauseUI()
        }, r([c], t)
      }(cc.Component));
    o.UIForegroundComponent = s, cc._RF.pop()
  }, {}],
  UIImageLoader: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "3cfe9BQlH5JwrcVCOydzdzz", "UIImageLoader"), Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var n = function() {
      function e() {
        this._container = new Map
      }
      return Object.defineProperty(e, "instance", {
        get: function() {
          return null == e.m_instance && (e.m_instance = new e), e.m_instance
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.addPendingImage = function(e, t) {
        var o = this._container.get(t);
        o || (o = [], this._container.set(t, o)), o.indexOf(e) < 0 && o.push(e)
      }, e.prototype.removePendingImage = function(e) {
        var t = e.loadingUrl;
        if (t) {
          var o = this._container.get(t);
          if (o) {
            var n = o.indexOf(e);
            n >= 0 && (o.splice(n, 1), e.completeCallback = null)
          }
        }
      }, e.prototype.applyPendingImage = function(e, t) {
        var o = this._container.get(e);
        if (o) {
          for (var n = 0, i = o; n < i.length; n++) {
            var r = i[n];
            r.loadingUrl == e && r.applyPendingImage(e, t)
          }
          o.splice(0, o.length), this._container.delete(e)
        }
      }, e.m_instance = null, e
    }();
    o.default = n, cc._RF.pop()
  }, {}],
  UINumericLabelHelper: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "00d3bwKhB1Mbrzk1dgMadJm", "UINumericLabelHelper");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var a = e("../utils/StringUtils"),
      c = cc._decorator,
      s = c.ccclass,
      u = (c.property, function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t._label = null, t._maxSize = 999999999, t._data = 0, t._delta = 0, t._start = 0, t._duration = 0, t._elapsed = 0, t._progressing = !1, t._protoString = "%s", t._separator = ",", t
        }
        var o;
        return i(t, e), o = t, t.scheduleForLabel = function(e, t, n, i, r, a) {
          void 0 === n && (n = .5), void 0 === i && (i = 999999999), void 0 === r && (r = "%s"), void 0 === a && (a = ",");
          var c = e.node.getComponent(o);
          c || ((c = e.node.addComponent(o)).protoString = r), c.separator = a, c.scheduleProgress(t, n), c._maxSize = i
        }, Object.defineProperty(t.prototype, "label", {
          get: function() {
            return this._label || (this._label = this.node.getComponent(cc.Label)), this._label
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "data", {
          get: function() {
            return this._data
          },
          set: function(e) {
            this._data = e
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "protoString", {
          get: function() {
            return this._protoString
          },
          set: function(e) {
            this._protoString = e
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "separator", {
          set: function(e) {
            this._separator = e
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype.onLoad = function() {
          if (!this.label) throw "You must add cc.Label component to use this helper"
        }, t.prototype.start = function() {
          this.label && (this.label.string = a.default.formatNumberWithSeparator(this._data, this._separator, this._maxSize))
        }, t.prototype.onDisable = function() {
          this._progressing = !1, this.unscheduleAllCallbacks()
        }, t.prototype.scheduleProgress = function(e, t) {
          void 0 === t && (t = .5), null == e || null == e || "number" != typeof e || !this._progressing && this._data == e || (t > 0 ? (this._elapsed = 0, this._duration = t, this._progressing = !0, this._start = this._data, this._delta = e - this._start, this.unscheduleAllCallbacks(), this.schedule(this.updateLabel, 0)) : (this._elapsed = 0, this._duration = 0, this._progressing = !1, this._start = this._data, this._delta = e - this._start, this._data = e, this.unscheduleAllCallbacks(), this._label && (this._label.string = this._protoString.replace(/%s/, a.default.formatNumberWithSeparator(this._data, this._separator, this._maxSize)))))
        }, t.prototype.updateLabel = function(e) {
          if (this._progressing) {
            this._elapsed += e;
            var t = Math.min(1, this._elapsed / this._duration);
            this._data = this._start + this._delta * Math.pow(t, .2), 1 == t && (this._data = this._start + this._delta, this._progressing = !1, this.unscheduleAllCallbacks()), this._label && (this._label.string = this._protoString.replace(/%s/, a.default.formatNumberWithSeparator(this._data, this._separator, this._maxSize)))
          }
        }, o = r([s], t)
      }(cc.Component));
    o.default = u, cc._RF.pop()
  }, {
    "../utils/StringUtils": "StringUtils"
  }],
  UIOnOffSwitcher: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "30266sY+edHNrX3Gf412i5X", "UIOnOffSwitcher");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var a = e("./ControlEvent"),
      c = e("../audio/AudioManager"),
      s = e("../audio/eSoundDefine"),
      u = cc._decorator,
      l = u.ccclass,
      p = u.property,
      d = function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.nOn = null, t.nOff = null, t.isOn = !0, t.switchOnClick = !0, t.switchHandler = new cc.Component.EventHandler, t
        }
        return i(t, e), t.prototype.onLoad = function() {
          this.switchOnClick && (this.getComponent(cc.Button) || this.addComponent(cc.Button))
        }, t.prototype.setSwitchOnClick = function(e) {
          this.switchOnClick != e && (this.enabledInHierarchy && (this.switchOnClick ? this.node.off(a.default.Click, this._onClick, this) : this.node.on(a.default.Click, this._onClick, this)), this.switchOnClick = e)
        }, t.prototype.setOnOff = function(e) {
          this.isOn = e, this._updateUI(), this.switchHandler && this.switchHandler.target && cc.Component.EventHandler.emitEvents([this.switchHandler], this), this.node.emit(a.default.Switch, this)
        }, t.prototype.onEnable = function() {
          this.switchOnClick && this.node.on(a.default.Click, this._onClick, this)
        }, t.prototype.onDisable = function() {
          this.switchOnClick && this.node.off(a.default.Click, this._onClick, this)
        }, t.prototype._onClick = function() {
          c.default.instance.playSfx(s.eSoundDefine.click), this.setOnOff(!this.isOn)
        }, t.prototype.start = function() {
          this._updateUI()
        }, t.prototype._updateUI = function() {
          this.nOn && (this.nOn.active = this.isOn), this.nOff && (this.nOff.active = !this.isOn)
        }, r([p(cc.Node)], t.prototype, "nOn", void 0), r([p(cc.Node)], t.prototype, "nOff", void 0), r([p], t.prototype, "isOn", void 0), r([p], t.prototype, "switchOnClick", void 0), r([p(cc.Component.EventHandler)], t.prototype, "switchHandler", void 0), r([l], t)
      }(cc.Component);
    o.default = d, cc._RF.pop()
  }, {
    "../audio/AudioManager": "AudioManager",
    "../audio/eSoundDefine": "eSoundDefine",
    "./ControlEvent": "ControlEvent"
  }],
  UIPopupCommon: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "9213fExZlFAvIA47ZgopCv4", "UIPopupCommon");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var a = e("./UIPopup"),
      c = e("./UIButtonCommon"),
      s = e("./ControlEvent"),
      u = e("../audio/AudioManager"),
      l = e("../utils/PrefabUtils"),
      p = e("../ePrefabDefine"),
      d = e("../audio/eSoundDefine"),
      f = cc._decorator,
      h = f.ccclass,
      g = f.property,
      _ = function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.lbTitle = null, t.lbContent = null, t.nCustomView = null, t.nActionContainer = null, t.btnClose = null, t.buttons = new Map, t
        }
        return i(t, e), t.prototype._unregisterEvent = function() {
          if (this.nActionContainer)
            for (var e = 0, t = this.nActionContainer.children; e < t.length; e++) t[e].off(s.default.Click, this._onActionClicked, this)
        }, t.prototype._onActionClicked = function(e) {
          u.default.instance.playSfx(d.eSoundDefine.click);
          var t = e.target.name;
          this.executeAction(t)
        }, t.prototype.showBtnClose = function(e) {
          this.btnClose.node.active = e
        }, t.prototype.setTitle = function(e) {
          this.lbTitle && (this.lbTitle.string = e)
        }, t.prototype.setContent = function(e) {
          this.lbContent && (this.lbContent.string = e)
        }, t.prototype.setCustomView = function(e) {
          this.nCustomView && this.nCustomView.addChild(e)
        }, t.prototype.setActions = function(t) {
          e.prototype.setActions.call(this, t);
          for (var o = 0, n = t; o < n.length; o++) {
            var i = n[o];
            this._addButtonForAction(i)
          }
        }, t.prototype.addAction = function(t) {
          e.prototype.addAction.call(this, t), this._addButtonForAction(t)
        }, t.prototype._addButtonForAction = function(e) {
          var t = this.buttons.get(e.name);
          if (t) t.node.name = e.name, t.lbAction && (t.lbAction.string = e.name);
          else {
            var o = l.default.createNode(p.ePrefabDefine.BUTTON_COMMON),
              n = o.getComponent(c.default);
            this.buttons.set(e.name, n), o.name = e.name, this.nActionContainer.addChild(o), n.lbAction && (n.lbAction.string = e.name), o.on(s.default.Click, this._onActionClicked, this)
          }
        }, t.prototype.onDisable = function() {
          e.prototype.onDisable.call(this), this._unregisterEvent();
          for (var t = 0, o = Array.from(this.buttons.values()); t < o.length; t++) o[t].node.removeFromParent();
          this.buttons.clear()
        }, t.prototype.onEnable = function() {
          e.prototype.onEnable.call(this), this.isSystemDialog() && (this.btnClose.node.active = !1)
        }, r([g(cc.Label)], t.prototype, "lbTitle", void 0), r([g(cc.Label)], t.prototype, "lbContent", void 0), r([g(cc.Node)], t.prototype, "nCustomView", void 0), r([g(cc.Node)], t.prototype, "nActionContainer", void 0), r([g(cc.Button)], t.prototype, "btnClose", void 0), r([h], t)
      }(a.default);
    o.default = _, cc._RF.pop()
  }, {
    "../audio/AudioManager": "AudioManager",
    "../audio/eSoundDefine": "eSoundDefine",
    "../ePrefabDefine": "ePrefabDefine",
    "../utils/PrefabUtils": "PrefabUtils",
    "./ControlEvent": "ControlEvent",
    "./UIButtonCommon": "UIButtonCommon",
    "./UIPopup": "UIPopup"
  }],
  UIPopupManager: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "34cf546vZZKJ7GHzXbGOl7f", "UIPopupManager");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var a = e("./UIPopup"),
      c = e("./ControlEvent"),
      s = e("./UIDefine"),
      u = e("./UIWaitingLayout"),
      l = e("../utils/Utils"),
      p = e("../utils/PrefabUtils"),
      d = e("../ePrefabDefine"),
      f = e("../config/ConfigLoader"),
      h = cc._decorator,
      g = h.ccclass,
      _ = (h.property, function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t._popupStack = [], t
        }
        var o;
        return i(t, e), o = t, Object.defineProperty(t, "instance", {
          get: function() {
            var e = cc.Canvas.instance.node.getComponent(o);
            return e || (e = cc.Canvas.instance.node.addComponent(o)), e
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype.onLoad = function() {
          if (this.node != cc.Canvas.instance.node) throw this.constructor.name + " must be a Canvas's comp"
        }, Object.defineProperty(t.prototype, "isHavePopup", {
          get: function() {
            return this._popupStack.length > 0
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "totalStatck", {
          get: function() {
            return this._popupStack.length
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "fadedBackground", {
          get: function() {
            var e = this.node.getChildByName("fadedBackground");
            return e || ((e = p.default.createNode(d.ePrefabDefine.FADED_BACKGROUND)).on(c.default.Click, this.onFadedBackgroundClicked, this), e.active = !1, e.name = "fadedBackground", this.node.addChild(e)), e
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "systemDialog", {
          get: function() {
            var e = this.node.getChildByName("systemDialog");
            return e || ((e = p.default.createNode(d.ePrefabDefine.POPUP_COMMON)).name = "systemDialog", e.zIndex = s.eZIndex.DIALOG, e.active = !1, this.node.addChild(e)), e.getComponent(a.default)
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype.hidePopUp = function(e) {
          if (void 0 === e && (e = !1), this._popupStack.length > 0) {
            var t = this._popupStack.pop();
            if (t.popupWillDisappear(), e) {
              var o = "hidePopup: " + t.node.name;
              u.default.showWaiting(o);
              var n = cc.scaleTo(s.ANIMATE_TIME, s.ANIMATE_SCALE_MIN * l.default.minScaleFactor).easing(cc.easeBackIn()),
                i = cc.sequence(n, cc.callFunc(function() {
                  t.popupDidDisappear(), t.node.emit(c.default.PopupDidDisappear), t.node.removeFromParent(), t.node.destroy()
                }));
              this.scheduleOnce(function() {
                u.default.hideWaiting(o)
              }, s.ANIMATE_TIME), t.node.runAction(i)
            } else t.popupDidDisappear(), t.node.emit(c.default.PopupDidDisappear), t.node.removeFromParent(), t.node.destroy();
            this.updateFadedBackground()
          }
        }, t.prototype.removePopup = function(e, t) {
          if (void 0 === t && (t = !1), e instanceof a.default) {
            var o = this._popupStack.indexOf(e);
            o >= 0 && (o == this._popupStack.length - 1 ? this.hidePopUp(t) : (this._popupStack.splice(o, 1), this.updateFadedBackground(), e.popupWillDisappear(), e.node.emit(c.default.PopupWillDisappear), e.popupDidDisappear(), e.node.emit(c.default.PopupDidDisappear), e.node.removeFromParent(), e.node.destroy()))
          } else {
            var n = this.find(e);
            n && this.removePopup(n, t)
          }
        }, t.prototype.showPopupFromPrefabName = function(e, t, o, n) {
          void 0 === t && (t = null), void 0 === o && (o = !0), void 0 === n && (n = !1);
          var i = cc.loader.getRes(e, cc.Prefab);
          if (i) this.showPopupFromPrefab(i, t, o, n);
          else {
            var r = this;
            cc.loader.loadRes(e, cc.Prefab, function(e, i) {
              r.showPopupFromPrefab(i, t, o, n)
            })
          }
        }, t.prototype.showPopupFromPrefab = function(e, t, o, n) {
          if (void 0 === t && (t = null), void 0 === o && (o = !0), void 0 === n && (n = !1), !e) throw "prefab can not null";
          var i = cc.instantiate(e);
          this.showPopupFromNode(i, t, o, n)
        }, t.prototype.showPopupFromNode = function(e, t, o, n) {
          if (void 0 === t && (t = null), void 0 === o && (o = !0), void 0 === n && (n = !1), !e) throw "node can not null";
          var i = "showPopup: " + e.name;
          u.default.showWaiting(i);
          var r = e.getComponent(a.default);
          if (r || (r = e.addComponent(a.default)), r.hideWhenTouchOnBackground = o, this._popupStack.push(r), this.updateFadedBackground(), t && t(r), this.node.addChild(e, s.eZIndex.POPUP + 2 * this._popupStack.length + 1), r.popupWillAppear(), r.node.emit(c.default.PopupWillAppear), n) {
            e.scale = s.ANIMATE_SCALE_MIN * l.default.minScaleFactor;
            var p = cc.scaleTo(s.ANIMATE_TIME, l.default.minScaleFactor).easing(cc.easeBackOut());
            e.runAction(cc.sequence(p, cc.callFunc(function() {
              r.popupDidAppear(), r.node.emit(c.default.PopupDidAppear)
            }))), this.scheduleOnce(function() {
              u.default.hideWaiting(i)
            }, s.ANIMATE_TIME)
          } else r.popupDidAppear(), r.node.emit(c.default.PopupDidAppear), u.default.hideWaiting(i)
        }, t.prototype.updateFadedBackground = function() {
          this.systemDialog.node.active ? (this.fadedBackground.active = !0, this.fadedBackground.zIndex = this.systemDialog.node.zIndex - 1) : this._popupStack.length > 0 ? (this.fadedBackground.active = !0, this.fadedBackground.zIndex = s.eZIndex.POPUP + 2 * this._popupStack.length) : this.fadedBackground.active = !1
        }, t.prototype.onFadedBackgroundClicked = function() {
          this.systemDialog.node.active || (this._popupStack.length > 0 ? this._popupStack[this._popupStack.length - 1].hideWhenTouchOnBackground && this.hidePopUp() : this.fadedBackground.active = !1)
        }, t.prototype.has = function(e) {
          return null != this.find(e)
        }, t.prototype.find = function(e) {
          for (var t = 0, o = this._popupStack; t < o.length; t++) {
            var n = o[t];
            if (n.node.getComponent(e)) return n
          }
          return null
        }, t.prototype.removeAllPopups = function() {
          for (; this._popupStack.length > 0;) this.hidePopUp(!1)
        }, t.prototype.showSystemDialog = function(e, t, o) {
          void 0 === t && (t = []), void 0 === o && (o = f.default.CFS("title_notice"));
          var n = this.systemDialog;
          n.node.active = !0, n.setTitle(o), n.setContent(e), t ? Array.isArray(t) ? n.setActions(t) : t instanceof a.PopupAction && n.setActions([t]) : n.setActions([a.PopupAction.make(f.default.CFS("act_ok"))]), this.updateFadedBackground()
        }, t.prototype.hideSystemDialog = function() {
          this.systemDialog.node.active = !1, this.updateFadedBackground()
        }, t.prototype.showPopup = function(e, t, o, n, i) {
          void 0 === t && (t = []), void 0 === o && (o = f.default.CFS("title_notice")), void 0 === n && (n = !1), void 0 === i && (i = null), this.showPopupFromNode(p.default.createNode(d.ePrefabDefine.POPUP_COMMON), function(r) {
            var c = r.getComponent("UIPopupCommon");
            c.setTitle(o), c.setContent(e), c.showBtnClose(n), t.length ? c.setActions(t) : c.setActions([a.PopupAction.make(f.default.CFS("act_ok"), null)]), i && c.setCustomView(i)
          })
        }, t.prototype.showPopupError = function(e, t, o, n, i) {
          void 0 === t && (t = !1), void 0 === o && (o = []), void 0 === n && (n = f.default.CFS("title_notice")), void 0 === i && (i = null), this.showPopupFromNode(p.default.createNode(d.ePrefabDefine.POPUP_COMMON), function(t) {
            var r = t.getComponent("UIPopupCommon");
            r.setTitle(n), r.setContent(e), r.showBtnClose(!1), o.length ? r.setActions(o) : r.setActions([a.PopupAction.make(f.default.CFS("act_ok"), null)]), i && r.setCustomView(i)
          }, t)
        }, o = r([g], t)
      }(cc.Component));
    o.default = _, cc._RF.pop()
  }, {
    "../config/ConfigLoader": "ConfigLoader",
    "../ePrefabDefine": "ePrefabDefine",
    "../utils/PrefabUtils": "PrefabUtils",
    "../utils/Utils": "Utils",
    "./ControlEvent": "ControlEvent",
    "./UIDefine": "UIDefine",
    "./UIPopup": "UIPopup",
    "./UIWaitingLayout": "UIWaitingLayout"
  }],
  UIPopupZoom: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "fdc08CCns9K/41Zw+Tefwoi", "UIPopupZoom");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var a = e("./UIPopup"),
      c = e("./UISpriteHelper"),
      s = cc._decorator,
      u = s.ccclass,
      l = s.property,
      p = function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.spriteImage = null, t.btnClose = null, t
        }
        return i(t, e), t.prototype._onActionClicked = function() {}, t.prototype.loadImageUrl = function(e) {
          c.default.setImageFromURL(this.spriteImage, e, void 0, function() {})
        }, t.prototype.onDisable = function() {
          e.prototype.onDisable.call(this)
        }, t.prototype.onEnable = function() {
          e.prototype.onEnable.call(this)
        }, r([l(cc.Sprite)], t.prototype, "spriteImage", void 0), r([l(cc.Button)], t.prototype, "btnClose", void 0), r([u], t)
      }(a.default);
    o.default = p, cc._RF.pop()
  }, {
    "./UIPopup": "UIPopup",
    "./UISpriteHelper": "UISpriteHelper"
  }],
  UIPopup: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "ba067vjF2lBeraS5O4Y/kI5", "UIPopup");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.PopupAction = void 0;
    var a = e("./UIPopupManager"),
      c = e("../config/ConfigLoader"),
      s = e("./UIDraggable"),
      u = function() {
        function e() {
          this.name = "", this.callback = null, this.hidePopupOnClick = !0
        }
        return e.make = function(t, o, n) {
          void 0 === o && (o = null), void 0 === n && (n = !0);
          var i = new e;
          return i.name = t, i.callback = o, i.hidePopupOnClick = n, i
        }, e
      }();
    o.PopupAction = u;
    var l = cc._decorator,
      p = l.ccclass,
      d = (l.property, function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t._moveAble = !0, t.actions = new Map, t._hideWhenTouchOnBackground = !0, t
        }
        return i(t, e), Object.defineProperty(t.prototype, "moveAble", {
          set: function(e) {
            this._moveAble = e
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "hideWhenTouchOnBackground", {
          get: function() {
            return this._hideWhenTouchOnBackground
          },
          set: function(e) {
            this._hideWhenTouchOnBackground = e
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype._stopPropagationIfTargetIsMe = function(e) {
          e.eventPhase == cc.Event.AT_TARGET && e.target == this.node && e.stopPropagation()
        }, t.prototype.onDraggableMoved = function(t) {
          this._moveAble && e.prototype.onDraggableMoved.call(this, t)
        }, t.prototype.executeAction = function(e) {
          var t = null;
          "string" == typeof e && (t = this.actions.get(e)), t ? (t.hidePopupOnClick && this.hide(), t.callback && t.callback()) : cc.log("Action config error! Please config your popup action first!")
        }, t.prototype.setActions = function(e) {
          this.actions.clear();
          for (var t = 0, o = e; t < o.length; t++) {
            var n = o[t];
            this.actions.set(n.name, n)
          }
        }, t.prototype.addAction = function(e) {
          e && this.actions.set(e.name, e)
        }, t.prototype.isSystemDialog = function() {
          return a.default.instance.systemDialog.uuid == this.uuid
        }, t.prototype.hide = function() {
          this.isSystemDialog() ? a.default.instance.hideSystemDialog() : a.default.instance.removePopup(this)
        }, t.prototype.popupWillAppear = function() {}, t.prototype.popupDidAppear = function() {}, t.prototype.popupWillDisappear = function() {}, t.prototype.popupDidDisappear = function() {}, t.prototype.isSinglePopup = function() {
          return !1
        }, t.show = function(e, t, o, n) {
          void 0 === t && (t = []), void 0 === o && (o = c.default.CFS("title_notice")), void 0 === n && (n = null), a.default.instance.showPopup(e, t, o, n)
        }, t.showFromNode = function(e, t, o, n) {
          void 0 === t && (t = null), void 0 === o && (o = !0), void 0 === n && (n = !1), a.default.instance.showPopupFromNode(e, t, o, n)
        }, t.showFromPrefab = function(e, t, o, n) {
          void 0 === t && (t = null), void 0 === o && (o = !0), void 0 === n && (n = !1), a.default.instance.showPopupFromPrefab(e, t, o, n)
        }, t.showFromPrefabName = function(e, t, o, n) {
          void 0 === t && (t = null), void 0 === o && (o = !0), void 0 === n && (n = !1), a.default.instance.showPopupFromPrefabName(e, t, o, n)
        }, t.showSystemDialog = function(e, t, o) {
          void 0 === t && (t = []), void 0 === o && (o = c.default.CFS("title_notice")), a.default.instance.showSystemDialog(e, t, o)
        }, r([p], t)
      }(s.default));
    o.default = d, cc._RF.pop()
  }, {
    "../config/ConfigLoader": "ConfigLoader",
    "./UIDraggable": "UIDraggable",
    "./UIPopupManager": "UIPopupManager"
  }],
  UIPrefabHelperRender: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "ca92cuZ6i1GpouMqF2UwEzq", "UIPrefabHelperRender");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var a = cc._decorator,
      c = a.ccclass,
      s = (a.property, function(e) {
        function t() {
          return null !== e && e.apply(this, arguments) || this
        }
        return i(t, e), r([c], t)
      }(cc.Component));
    o.default = s, cc._RF.pop()
  }, {}],
  UIPrefabHelper: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "87451oIE8VIhYpi76hKlrog", "UIPrefabHelper");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var a = e("./BaseImageHelper"),
      c = e("./UIImageLoader"),
      s = e("./UIPrefabHelperRender"),
      u = cc._decorator,
      l = u.ccclass,
      p = (u.property, function(e) {
        function t() {
          return null !== e && e.apply(this, arguments) || this
        }
        var o;
        return i(t, e), o = t, Object.defineProperty(t.prototype, "holder", {
          get: function() {
            var e = this.node.getChildByName("UIPrefabHelper");
            return e || ((e = new cc.Node).name = "UIPrefabHelper", e.parent = this.node), e
          },
          enumerable: !1,
          configurable: !0
        }), t.setImageFromURL = function(e, t, n, i) {
          void 0 === n && (n = null), void 0 === i && (i = null);
          var r = e.getComponent(o);
          r || (r = e.addComponent(o)), r.setImageFromURL(t, n)
        }, t.prototype.getPool = function(e) {
          var t = o.poolByUrl.get(e);
          return t || (t = new cc.NodePool, o.poolByUrl.set(e, t)), t
        }, t.prototype.applyPendingImage = function(e, t) {
          if (t instanceof cc.Prefab) {
            this.enabled && this.enabledInHierarchy && (this.holder.active = !0);
            var o = this.holder.getChildByName("UIPrefabHelperRender");
            o && o.removeFromParent();
            var n = cc.instantiate(t);
            n.name = "UIPrefabHelperRender", n.active = !0, n.x = n.y = 0, n.stopAllActions();
            var i = n.getComponent(s.default);
            i || (i = n.addComponent(s.default)), i.url = e, this.holder.addChild(n), this.holder.active = !0, this.completeCallback && (this.completeCallback(n), this.completeCallback = null)
          }
        }, t.prototype.removePendingImageIfNeeded = function() {
          this.loadingUrl && this.loadingUrl.length && c.default.instance.removePendingImage(this), this.loadingUrl = ""
        }, t.prototype.setImageFromURL = function(e, t) {
          void 0 === t && (t = null), this.loadingUrl != e && (this.removePendingImageIfNeeded(), this.loadingUrl = e), this.addPendingImageIfNeeded(), t && (this.completeCallback = t), this.holder.active = !1;
          var o = cc.loader.getRes(this.loadingUrl, cc.Prefab);
          o ? c.default.instance.applyPendingImage(this.loadingUrl, o) : cc.loader.loadRes(this.loadingUrl, cc.Prefab, null, function(t, o) {
            !t && o instanceof cc.Prefab && c.default.instance.applyPendingImage(e, o)
          })
        }, t.poolByUrl = new Map, o = r([l], t)
      }(a.default));
    o.default = p, cc._RF.pop()
  }, {
    "./BaseImageHelper": "BaseImageHelper",
    "./UIImageLoader": "UIImageLoader",
    "./UIPrefabHelperRender": "UIPrefabHelperRender"
  }],
  UIPrefabHolder: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "91aa0MbKnFCyb+SrQS1khV3", "UIPrefabHolder");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var a = cc._decorator,
      c = a.ccclass,
      s = a.property,
      u = function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.prefab = null, t
        }
        return i(t, e), t.prototype.onLoad = function() {
          if (this.prefab) {
            var e = cc.instantiate(this.prefab);
            this.node.addChild(e)
          }
        }, r([s(cc.Prefab)], t.prototype, "prefab", void 0), r([c], t)
      }(cc.Component);
    o.default = u, cc._RF.pop()
  }, {}],
  UIProgressBarHelper: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "5ad9cZDIdtIar7lZUHnZb19", "UIProgressBarHelper");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var a = cc._decorator,
      c = a.ccclass,
      s = a.property,
      u = function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.progressBar = null, t._data = 0, t._delta = 0, t._start = 0, t._duration = 0, t._elapsed = 0, t._progressing = !1, t
        }
        return i(t, e), t.prototype.onLoad = function() {
          this.progressBar && (this.progressBar.progress = 0)
        }, t.prototype.start = function() {}, t.prototype.scheduleProgress = function(e, t) {
          void 0 === t && (t = .2), this._elapsed = 0, this._duration = t, this._progressing = !0, this._start = this._data, this._delta = e - this._start
        }, t.prototype.update = function(e) {
          if (this._progressing) {
            this._elapsed += e;
            var t = Math.min(1, this._elapsed / this._duration);
            this._data = this._start + this._delta * t, 1 == t && (this._progressing = !1), this.progressBar && (this.progressBar.progress = this._data)
          }
        }, r([s(cc.ProgressBar)], t.prototype, "progressBar", void 0), r([c], t)
      }(cc.Component);
    o.default = u, cc._RF.pop()
  }, {}],
  UIRadioButtonGroup: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "1c9f5XdjylG+IirHyf0gDD2", "UIRadioButtonGroup");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var a = e("./UIRadioButton"),
      c = e("./ControlEvent"),
      s = cc._decorator,
      u = s.ccclass,
      l = s.property,
      p = function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.startIndex = 0, t._items = [], t._delegate = null, t._curSelectedIndex = -1, t
        }
        return i(t, e), Object.defineProperty(t.prototype, "delegate", {
          get: function() {
            return this._delegate
          },
          set: function(e) {
            this._delegate = e
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "curSelectedIndex", {
          get: function() {
            return this._curSelectedIndex
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype.getSelectedButton = function() {
          return this._items[this._curSelectedIndex]
        }, t.prototype.getButtonAtIdx = function(e) {
          return this._items[e]
        }, t.prototype.onLoad = function() {
          for (var e = 0, t = 0, o = this.node.children; t < o.length; t++) {
            var n = o[t];
            if (n.active) {
              var i = n.getComponent(a.default);
              if (!i) continue;
              var r = n.getComponent(cc.Button);
              r || (r = n.addComponent(cc.Button)), this._items.push(i), i.idx = e, e++
            }
          }
        }, t.prototype.start = function() {
          this.selectItemAtIndex(this.startIndex)
        }, t.prototype.onEnable = function() {
          for (var e = 0, t = this._items; e < t.length; e++) t[e].node.on(c.default.RadioButtonSelected, this.onItemClick, this)
        }, t.prototype.onDisable = function() {
          for (var e = 0, t = this._items; e < t.length; e++) t[e].node.off(c.default.RadioButtonSelected, this.onItemClick, this)
        }, t.prototype.onItemClick = function(e) {
          this.selectItemAtIndex(e.idx)
        }, t.prototype.selectItemAtIndex = function(e) {
          if (this._curSelectedIndex != e) {
            var t = this._items[this._curSelectedIndex];
            t && t.setSelected(!1), this._curSelectedIndex = e;
            var o = this._items[e];
            return o && (o.setSelected(!0), this._delegate && this._delegate.groupSelectedAtIndex && this._delegate.groupSelectedAtIndex(this, e), this.node.emit(c.default.RadioButtonSelected, this._curSelectedIndex)), !0
          }
        }, r([l(cc.Integer)], t.prototype, "startIndex", void 0), r([u], t)
      }(cc.Component);
    o.default = p, cc._RF.pop()
  }, {
    "./ControlEvent": "ControlEvent",
    "./UIRadioButton": "UIRadioButton"
  }],
  UIRadioButton: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "f2174qKtvxKnLcLVf6yy/aJ", "UIRadioButton");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var a = e("./ControlEvent"),
      c = e("../audio/AudioManager"),
      s = e("../audio/eSoundDefine"),
      u = cc._decorator,
      l = u.ccclass,
      p = u.property,
      d = function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.nodeOn = null, t.nodeOff = null, t._selected = !1, t._idx = -1, t
        }
        return i(t, e), Object.defineProperty(t.prototype, "selected", {
          get: function() {
            return this._selected
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype.setSelected = function(e) {
          this._selected = e, this._updateUI()
        }, Object.defineProperty(t.prototype, "idx", {
          get: function() {
            return this._idx
          },
          set: function(e) {
            this._idx = e
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype.onEnable = function() {
          this.node.on(a.default.Click, this._onClicked, this)
        }, t.prototype.onDisable = function() {
          this.node.off(a.default.Click, this._onClicked, this)
        }, t.prototype._onClicked = function() {
          c.default.instance.playSfx(s.eSoundDefine.click), this.node.emit(a.default.RadioButtonSelected, this)
        }, t.prototype.start = function() {
          this._updateUI()
        }, t.prototype._updateUI = function() {
          var e = this._selected;
          this.nodeOn && (this.nodeOn.active = e), this.nodeOff && (this.nodeOff.active = !e);
          var t = this.node.getComponent(cc.Button);
          t && (t.interactable = !e)
        }, r([p(cc.Node)], t.prototype, "nodeOn", void 0), r([p(cc.Node)], t.prototype, "nodeOff", void 0), r([l], t)
      }(cc.Component);
    o.default = d, cc._RF.pop()
  }, {
    "../audio/AudioManager": "AudioManager",
    "../audio/eSoundDefine": "eSoundDefine",
    "./ControlEvent": "ControlEvent"
  }],
  UISafeArea: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "dd5cfIoOydHl4eoAPk9MPkc", "UISafeArea");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var a = e("./UIDefine"),
      c = cc._decorator,
      s = c.ccclass,
      u = (c.property, function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.rotation = -1, t
        }
        return i(t, e), t.prototype.updateSafeArea = function() {
          if (this.node && this.node.parent)
            if (cc.sys.isNative && cc.sys.isMobile) {
              var e = jsb.device.getDeviceRotation();
              if (e != this.rotation) {
                this.rotation = e;
                var t = this;
                this.scheduleOnce(function() {
                  var o = cc.sys.getSafeAreaRect();
                  switch (console.log("rotation: " + e), e) {
                    case a.DeviceRotation._90:
                      t.node.setContentSize(cc.size(o.width + o.xMin, o.height)), (i = t.node.parent.getComponent(cc.Widget)) && i.updateAlignment();
                      var n = t.node.parent.convertToNodeSpaceAR(cc.v2(o.xMin, 0));
                      t.node.setPosition(cc.v2(n.x + t.node.anchorX * t.node.width, n.y + t.node.anchorY * t.node.height));
                      break;
                    case a.DeviceRotation._270:
                      var i;
                      t.node.setContentSize(cc.size(o.width + o.xMin, o.height)), (i = t.node.parent.getComponent(cc.Widget)) && i.updateAlignment(), n = t.node.parent.convertToNodeSpaceAR(cc.v2(o.xMin, 0)), t.node.setPosition(cc.v2(n.x + t.node.anchorX * t.node.width - o.xMin, n.y + t.node.anchorY * t.node.height))
                  }
                })
              }
            } else {
              var o = this;
              this.scheduleOnce(function() {
                var e = cc.visibleRect;
                o.node.setContentSize(cc.size(e.width, e.height));
                var t = o.node.parent.convertToNodeSpaceAR(e.bottomLeft);
                o.node.setPosition(cc.v2(t.x + o.node.anchorX * o.node.width, t.y + o.node.anchorY * o.node.height))
              })
            }
        }, t.prototype.update = function() {
          this.updateSafeArea()
        }, r([s], t)
      }(cc.Component));
    o.default = u, cc._RF.pop()
  }, {
    "./UIDefine": "UIDefine"
  }],
  UIScreenManager: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "f5af8M0DwtMbbDlufbFfUHO", "UIScreenManager");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var a = e("./UIScreen"),
      c = e("./UIDefine"),
      s = e("../utils/PrefabUtils"),
      u = e("../ePrefabDefine"),
      l = e("../loading/Loading"),
      p = cc._decorator,
      d = p.ccclass,
      f = p.property,
      h = function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.root = null, t._screenStack = [], t._screenCached = new Map, t
        }
        var o;
        return i(t, e), o = t, Object.defineProperty(t, "instance", {
          get: function() {
            var e = cc.Canvas.instance.node.getComponent(o);
            return e || (e = cc.Canvas.instance.node.addComponent(o)), e
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype.onLoad = function() {
          this.root && this.initWithRootNode(this.root)
        }, Object.defineProperty(t.prototype, "current", {
          get: function() {
            return this._screenStack[this._screenStack.length - 1]
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype.cacheFromPrefab = function(e) {
          if (this._screenCached.has(e.data.name)) return this._screenCached.get(e.data.name);
          var t = this.getScreenFromPrefab(e);
          return this._screenCached.set(t.node.name, t), t
        }, t.prototype.initWithRootPrefab = function(e, t) {
          if (void 0 === t && (t = null), !e) throw "init root screen failed";
          var o = cc.instantiate(e);
          return this.initWithRootNode(o, t)
        }, t.prototype.initWithRootNode = function(e, t) {
          if (void 0 === t && (t = null), !e) throw "init root screen node failed";
          if (this._screenStack.length) {
            for (var o = 0, n = this._screenStack; o < n.length; o++) {
              var i = n[o].node;
              i.removeFromParent(), i.destroy()
            }
            this._screenStack = []
          }
          var r = this.getScreenFromNode(e);
          return r.node.y = 0, r.node.x = 0, this._screenStack.push(r), r.node.parent || this.node.addChild(r.node, c.eZIndex.SCREEN), t && t(r), r
        }, t.prototype.createMultiSlotScreen = function(e, t) {
          if (void 0 === t && (t = null), !e) throw "prefab can not " + e;
          if (0 == this._screenStack.length) return this.initWithRootPrefab(e, t);
          this._screenStack[this._screenStack.length - 1];
          var o = this.getScreenFromPrefab(e);
          o.node.y = 0, o.node.x = 0, o.node.zIndex = c.eZIndex.SCREEN;
          var n = o.getComponent(cc.Button);
          return n || (n = o.addComponent(cc.Button)), t && t(o), o
        }, t.prototype.unLinkScreenFromStack = function(e) {
          if (this._screenStack.length < 1) return null;
          for (var t = this._screenStack.length - 1; t >= 0; t++) {
            var o = this._screenStack[t];
            if (o.node.name == e.node.name && e.node.parent == this.node) {
              this._screenCached.has(o.node.name) && this._screenCached.delete(o.node.name), this._screenStack.splice(t, 1), console.log("AAAAAA::unlink  " + e.node.name), e.node.parent = null;
              break
            }
          }
        }, t.prototype.linkScreenFromMultiSlotToScreenManager = function(e, t) {
          if (void 0 === t && (t = null), !e) throw "uiScreen can not " + e;
          if (0 == this._screenStack.length) return this.initWithRootNode(e.node, t);
          var o = this._screenStack[this._screenStack.length - 1],
            n = (o.getComponent(l.default), this.getScreenFromNode(e.node));
          e.node.parent && (e.node.parent = null), console.log("AAAAAA::add to screenmanager BIG ", e), e.node.scale = e.node.originScale ? e.node.originScale : 1, n.node.y = 0, n.node.x = 0, n.node.zIndex = c.eZIndex.SCREEN, this._screenStack.push(n), this.node.addChild(n.node), n.hideCurScreenOnShow && o.node.removeFromParent(!1);
          var i = n.getComponent(cc.Button);
          return i || (i = n.addComponent(cc.Button)), t && t(n), n
        }, t.prototype.pushScreen = function(e, t) {
          if (void 0 === t && (t = null), !e) throw "prefab can not " + e;
          if (0 == this._screenStack.length) return this.initWithRootPrefab(e, t);
          var o = this._screenStack[this._screenStack.length - 1];
          if (o.getComponent(l.default)) return this.replaceScreen(e, t);
          var n = e.data ? this._screenCached.get(e.data.name) : null;
          n || (n = this.getScreenFromPrefab(e)), n.node.y = 0, n.node.x = 0, n.node.zIndex = c.eZIndex.SCREEN, this._screenStack.push(n), this.node.addChild(n.node), n.hideCurScreenOnShow && o.node.removeFromParent(!1);
          var i = n.getComponent(cc.Button);
          return i || (i = n.addComponent(cc.Button)), t && t(n), n
        }, t.prototype.removeScreen = function(e) {
          for (var t = -1, o = this._screenStack.length - 1; o >= 0; o--)(n = this._screenStack[o]).node.getComponent(e) && (t = o);
          if (t >= 0) {
            var n = this._screenStack[t];
            t == this._screenStack.length - 1 ? this.popScreen() : (this._screenStack.splice(t, 1), this._screenCached.has(n.node.name) ? n.node.removeFromParent(!1) : (n.node.removeFromParent(), n.node.destroy()))
          }
        }, t.prototype.replaceScreen = function(e, t) {
          if (void 0 === t && (t = null), this._screenStack.length < 1) return null;
          var o = this._screenStack.pop(),
            n = this.getScreenFromPrefab(e);
          return n.node.y = 0, n.node.x = 0, this._screenStack.push(n), n.node.parent || this.node.addChild(n.node), this._screenCached.has(o.node.name) ? o.node.removeFromParent(!1) : (o.node.removeFromParent(), o.node.destroy()), t && t(n), n
        }, t.prototype.popScreen = function() {
          return this.popToScreenAtIndex(this._screenStack.length - 2)
        }, t.prototype.popToRootScreen = function() {
          return this.popToScreenAtIndex(0)
        }, t.prototype.popToScreen = function(e) {
          for (var t = -1, o = this._screenStack.length - 1; o >= 0; o--)
            if (this._screenStack[o].node.getComponent(e)) {
              t = o;
              break
            } return t >= 0 ? this.popToScreenAtIndex(t) : null
        }, t.prototype.popToScreenAtIndex = function(e) {
          if (!(e < 0 || e >= this._screenStack.length - 1)) {
            var t = this._screenStack.pop(),
              o = this._screenStack[e];
            if (o.node.y = 0, o.node.x = 0, o.node.parent || this.node.addChild(o.node, o.node.zIndex), this._screenStack.length > e + 1) {
              for (var n = e + 1; n < this._screenStack.length; n++) {
                var i = this._screenStack[n];
                i.node.parent ? this._screenCached.has(i.node.name) ? i.node.removeFromParent(!1) : (i.node.removeFromParent(), i.node.destroy()) : this._screenCached.has(i.node.name) || i.node.destroy()
              }
              this._screenStack.splice(e + 1, this._screenStack.length - e - 1)
            }
            this._screenCached.has(t.node.name) ? t.node.removeFromParent(!1) : (t.node.removeFromParent(), t.node.destroy())
          }
        }, t.prototype.getScreenFromPrefab = function(e) {
          if (!e) throw "get Screen failed ";
          var t = cc.instantiate(e);
          return this.getScreenFromNode(t)
        }, t.prototype.getScreenFromNode = function(e) {
          var t = e.getComponent(a.default);
          return t || (t = e.addComponent(a.default)), t.manager = this, t
        }, t.prototype.getCurrentScreen = function() {
          return this._screenStack[this._screenStack.length - 1]
        }, t.prototype.hasScreen = function(e) {
          return null != this.findScreen(e)
        }, t.prototype.findScreen = function(e) {
          for (var t = this._screenStack.length - 1; t >= 0; t--) {
            var o = this._screenStack[t];
            if ("string" == typeof e) {
              if (o.node.getComponent(e)) return o
            } else if (o.node.getComponent(e)) return o
          }
          return null
        }, t.prototype.findScreenString = function(e) {
          for (var t = this._screenStack.length - 1; t >= 0; t--) {
            var o = this._screenStack[t];
            if (o.node.getComponent(e)) return o
          }
          return null
        }, t.prototype.loadResArrayWithDefaultLoadingScreen = function(e, t) {
          this.pushScreen(s.default.getPrefab(u.ePrefabDefine.LOADING), function(o) {
            var n = o.getComponent(l.default);
            n.arrResUrl = e, n.loadResource(t)
          })
        }, t.prototype.loadResArrayWithLoadingScreen = function(e, t, o) {
          this.pushScreen(e, function(e) {
            var n = e.getComponent(l.default);
            n.arrResUrl = t, n.loadResource(o)
          })
        }, t.prototype.loadResArrayWithLoadingComponent = function(e, t, o) {
          t.arrResUrl = e, t.loadResource(o)
        }, r([f(cc.Node)], t.prototype, "root", void 0), o = r([d], t)
      }(cc.Component);
    o.default = h, cc._RF.pop()
  }, {
    "../ePrefabDefine": "ePrefabDefine",
    "../loading/Loading": "Loading",
    "../utils/PrefabUtils": "PrefabUtils",
    "./UIDefine": "UIDefine",
    "./UIScreen": "UIScreen"
  }],
  UIScreen: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "bfb90DeYoNBD4kRCUzQE+Al", "UIScreen");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var a = cc._decorator,
      c = a.ccclass,
      s = a.property,
      u = function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.hideCurScreenOnShow = !0, t._manager = null, t
        }
        return i(t, e), Object.defineProperty(t.prototype, "manager", {
          get: function() {
            return this._manager
          },
          set: function(e) {
            this._manager = e
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype.handleParams = function() {}, r([s], t.prototype, "hideCurScreenOnShow", void 0), r([c], t)
      }(cc.Component);
    o.default = u, cc._RF.pop()
  }, {}],
  UISpriteHelper: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "5a4dec4JHBHt71IdcxzTs4m", "UISpriteHelper");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var a = cc._decorator,
      c = a.ccclass,
      s = (a.property, e("./BaseImageHelper")),
      u = e("./UIImageLoader"),
      l = function(e) {
        function t() {
          return null !== e && e.apply(this, arguments) || this
        }
        var o;
        return i(t, e), o = t, Object.defineProperty(t.prototype, "sprite", {
          get: function() {
            var e = this.node.getComponent(cc.Sprite);
            return e || (e = this.node.addComponent(cc.Sprite)), e
          },
          enumerable: !1,
          configurable: !0
        }), t.setImageFromURL = function(e, t, n, i) {
          void 0 === n && (n = null), void 0 === i && (i = null);
          var r = e.getComponent(o);
          r || (r = e.addComponent(o)), r.setImageFromURL(t, n, i)
        }, t.prototype.applyPendingImage = function(e, t) {
          var o = this;
          t instanceof cc.Texture2D ? (o.sprite.spriteFrame = new cc.SpriteFrame(t), o.sprite.enabled = !0, o.completeCallback && (o.completeCallback(), o.completeCallback = null)) : t instanceof cc.SpriteFrame && (t.textureLoaded() ? (o.sprite.spriteFrame = t, o.sprite.enabled = !0, o.completeCallback && (o.completeCallback(), o.completeCallback = null)) : (t.once("load", function() {
            o.sprite.spriteFrame = t, o.sprite.enabled = !0, o.completeCallback && (o.completeCallback(), o.completeCallback = null)
          }), t.ensureLoadTexture()), o.completeCallback && (o.completeCallback(), o.completeCallback = null))
        }, t.prototype.setImageFromURL = function(e, t, o) {
          void 0 === t && (t = null), void 0 === o && (o = null), this.loadingUrl != e && (this.removePendingImageIfNeeded(), this.loadingUrl = e), this.addPendingImageIfNeeded(), o && (this.completeCallback = o), t ? (this.sprite.enabled = !0, this.sprite.spriteFrame = t) : (this.sprite.spriteFrame = null, this.sprite.enabled = !1);
          var n = function(t, n) {
            t ? o("error") : n instanceof cc.Texture2D || n instanceof cc.SpriteFrame ? u.default.instance.applyPendingImage(e, n) : "string" == typeof n && o && o(n)
          };
          if (0 === e.search("http://") || 0 === e.search("https://")) cc.assetManager.loadRemote(e, n);
          else if (e.length) {
            var i = cc.loader.getRes(e);
            i ? n && n(null, i) : cc.loader.loadRes(e, cc.SpriteFrame, n)
          }
        }, t._facebookAvatarURLCache = {}, o = r([c], t)
      }(s.default);
    o.default = l, cc._RF.pop()
  }, {
    "./BaseImageHelper": "BaseImageHelper",
    "./UIImageLoader": "UIImageLoader"
  }],
  UISpriteOnOff: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "88289pttcVBWYcIj+SNKhVV", "UISpriteOnOff");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var a = e("../audio/AudioManager"),
      c = e("../audio/eSoundDefine"),
      s = e("./ControlEvent"),
      u = cc._decorator,
      l = u.ccclass,
      p = u.property,
      d = function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.nOn = null, t.nOff = null, t.isOn = !0, t.switchOnClick = !0, t.switchHandler = new cc.Component.EventHandler, t
        }
        return i(t, e), t.prototype.onLoad = function() {
          this.switchOnClick && (this.getComponent(cc.Button) || this.addComponent(cc.Button))
        }, t.prototype.setSwitchOnClick = function(e) {
          this.switchOnClick != e && (this.enabledInHierarchy && (this.switchOnClick ? this.node.off(s.default.Click, this._onClick, this) : this.node.on(s.default.Click, this._onClick, this)), this.switchOnClick = e)
        }, t.prototype.setOnOff = function(e) {
          this.isOn = e, this._updateUI(), this.switchHandler && this.switchHandler.target && cc.Component.EventHandler.emitEvents([this.switchHandler], this), this.node.emit(s.default.Switch, this)
        }, t.prototype.onEnable = function() {
          this.switchOnClick && this.node.on(s.default.Click, this._onClick, this)
        }, t.prototype.onDisable = function() {
          this.switchOnClick && this.node.off(s.default.Click, this._onClick, this)
        }, t.prototype._onClick = function() {
          a.default.instance.playSfx(c.eSoundDefine.click), this.setOnOff(!this.isOn)
        }, t.prototype.start = function() {
          this._updateUI()
        }, t.prototype._updateUI = function() {
          this.isOn && (this.spriteFrame = this.nOn), this.isOn || (this.spriteFrame = this.nOff)
        }, r([p(cc.SpriteFrame)], t.prototype, "nOn", void 0), r([p(cc.SpriteFrame)], t.prototype, "nOff", void 0), r([p], t.prototype, "isOn", void 0), r([p], t.prototype, "switchOnClick", void 0), r([p(cc.Component.EventHandler)], t.prototype, "switchHandler", void 0), r([l], t)
      }(cc.Sprite);
    o.default = d, cc._RF.pop()
  }, {
    "../audio/AudioManager": "AudioManager",
    "../audio/eSoundDefine": "eSoundDefine",
    "./ControlEvent": "ControlEvent"
  }],
  UITextManager: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "16aa3Jdet9EvYtk3EHkpb3h", "UITextManager");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var a = e("./UIDefine"),
      c = e("../ePrefabDefine"),
      s = e("../utils/StringUtils"),
      u = cc._decorator,
      l = u.ccclass,
      p = u.property,
      d = function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.label = null, t
        }
        var o;
        return i(t, e), o = t, t.showCenterNotification = function(e) {
          var t = this;
          cc.loader.loadRes(c.ePrefabDefine.CENTER_NOTIFICATION, cc.Prefab, function(n, i) {
            if (!n && i) {
              var r = cc.instantiate(i);
              r.getComponent(o).label.string = e;
              for (var c = 0; c < t._centerNotificationStack.length; c++) t._centerNotificationStack[c].setPosition(0, 60 * (c + 1));
              r.position = cc.Vec2.ZERO, cc.Canvas.instance.node.addChild(r, a.eZIndex.EFFECT), t._centerNotificationStack.unshift(r);
              var s = t,
                u = cc.callFunc(function() {
                  s._centerNotificationStack.filter(function(e) {
                    return e !== r
                  })
                });
              r.runAction(cc.sequence(cc.delayTime(2), cc.fadeOut(1), u, cc.removeSelf()))
            }
          })
        }, t.showTextFly = function(e, t, n, i) {
          if (void 0 === n && (n = cc.Color.WHITE), void 0 === i && (i = null), e) {
            var r = null;
            if (0 == this.textFlyPool.size()) {
              var s = cc.loader.getRes(c.ePrefabDefine.TEXT_FLY);
              if (!s) return void cc.loader.loadRes(c.ePrefabDefine.TEXT_FLY, cc.Prefab, function(r, a) {
                !r && a && o.showTextFly(e, t, n, i)
              });
              r = cc.instantiate(s)
            } else r = this.textFlyPool.get();
            r.opacity = 255, r.scale = 1;
            var u = r.getComponent(o);
            u.label.string = t, u.label.node.color = n, cc.Canvas.instance.node.addChild(r, a.eZIndex.EFFECT);
            var l = this,
              p = e.parent.convertToWorldSpaceAR(e.getBoundingBox().center),
              d = i ? i.convertToNodeSpaceAR(p) : cc.Canvas.instance.node.convertToNodeSpaceAR(p);
            r.position = d, r.runAction(cc.sequence(cc.moveTo(1.2, d.add(cc.v2(0, 160))), cc.delayTime(.4), cc.fadeOut(.4), cc.callFunc(function() {
              l.textFlyPool.put(r)
            })))
          }
        }, t.animateChipEffect = function(e, t, n, i) {
          if (void 0 === n && (n = null), void 0 === i && (i = cc.Vec2.ZERO), e && 0 != t) {
            var r = null;
            if (0 == o.textChipPool.size()) {
              var u = cc.loader.getRes(c.ePrefabDefine.TEXT_CHIP);
              if (!u) return void cc.loader.loadRes(c.ePrefabDefine.TEXT_CHIP, cc.Prefab, function(r, a) {
                !r && a && o.animateChipEffect(e, t, n, i)
              });
              r = cc.instantiate(u)
            } else r = o.textChipPool.get();
            r.opacity = 255, r.scale = .4;
            var l = r.getComponent(o);
            l.label.string = t > 0 ? "+" + s.default.formatNumber(t) : s.default.formatNumber(t), l.label.node.color = t > 0 ? cc.Color.WHITE : cc.color(200, 0, 0), n ? n.addChild(r) : cc.Canvas.instance.node.addChild(r, a.eZIndex.EFFECT);
            var p = e.parent.convertToWorldSpaceAR(e.getBoundingBox().center),
              d = n ? n.convertToNodeSpaceAR(p) : cc.Canvas.instance.node.convertToNodeSpaceAR(p);
            r.position = d.add(i), r.runAction(cc.sequence(cc.spawn(cc.scaleTo(.35, 1).easing(cc.easeBackOut()), cc.moveBy(.7, new cc.Vec2(0, t > 0 ? 48 : 12))), cc.fadeOut(.5), cc.callFunc(function() {
              o.textChipPool.put(r)
            })))
          }
        }, t.animateTextEffect = function(e, t, n, i, r) {
          if (void 0 === n && (n = null), void 0 === i && (i = cc.Vec2.ZERO), void 0 === r && (r = !0), e && t && 0 != t.length) {
            var s = null;
            if (0 == o.textEffectPool.size()) {
              var u = cc.loader.getRes(c.ePrefabDefine.CENTER_NOTIFICATION);
              if (!u) return void cc.loader.loadRes(c.ePrefabDefine.CENTER_NOTIFICATION, cc.Prefab, function(a, c) {
                !a && c && o.animateTextEffect(e, t, n, i, r)
              });
              s = cc.instantiate(u)
            } else s = o.textEffectPool.get();
            if (s.name = "CENTER_NOTIFICATION", s.opacity = 255, s.scale = .4, s.getComponent(o).label.string = t, n) {
              var l = n.getChildByName("CENTER_NOTIFICATION");
              l && (l.stopAllActions(), o.textEffectPool.put(l)), n.addChild(s)
            } else cc.Canvas.instance.node.addChild(s, a.eZIndex.EFFECT);
            var p = e.parent.convertToWorldSpaceAR(e.getBoundingBox().center),
              d = n ? n.convertToNodeSpaceAR(p) : cc.Canvas.instance.node.convertToNodeSpaceAR(p);
            s.position = d.add(i), s.runAction(cc.sequence(cc.spawn(cc.scaleTo(.35, 1).easing(cc.easeBackOut()), cc.moveBy(.7, new cc.Vec2(0, r ? 12 : 0))), cc.fadeOut(.5), cc.callFunc(function() {
              o.textEffectPool.put(s)
            })))
          }
        }, t._centerNotificationStack = [], t.textFlyPool = new cc.NodePool, t.textChipPool = new cc.NodePool, t.textEffectPool = new cc.NodePool, r([p(cc.Label)], t.prototype, "label", void 0), o = r([l], t)
      }(cc.Component);
    o.default = d, cc._RF.pop()
  }, {
    "../ePrefabDefine": "ePrefabDefine",
    "../utils/StringUtils": "StringUtils",
    "./UIDefine": "UIDefine"
  }],
  UIViewGroup: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "934c3qJCThLgr27BFeA1IMS", "UIViewGroup");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var a = cc._decorator,
      c = a.ccclass,
      s = (a.property, function(e) {
        function t() {
          return null !== e && e.apply(this, arguments) || this
        }
        return i(t, e), t.prototype._hasNestedViewGroup = function(e, t) {
          if (void 0 === t && (t = null), e.eventPhase != cc.Event.CAPTURING_PHASE) return null;
          if (t)
            for (var o = 0; o < t.length; ++o) {
              var n = t[o];
              if (this.node == n) return !!e.target.getComponent(cc.ViewGroup);
              if (n.getComponent(cc.ViewGroup)) return !0
            }
          return !1
        }, r([c], t)
      }(cc.ViewGroup));
    o.default = s, cc._RF.pop()
  }, {}],
  UIWaitingLayout: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "2620ecwVT9E/pZS2d8sVjR2", "UIWaitingLayout");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var a = e("./UIDefine"),
      c = e("../utils/PrefabUtils"),
      s = e("../ePrefabDefine"),
      u = cc._decorator,
      l = u.ccclass,
      p = u.property,
      d = function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.nFaded = null, t.nWaiting = null, t.lbWaitingDes = null, t.item = null, t
        }
        var o;
        return i(t, e), o = t, t.showWaiting = function(e, t, o) {
          void 0 === e && (e = ""), void 0 === t && (t = ""), void 0 === o && (o = 2);
          var n = 0 == this._waitingItemByTag.size,
            i = {
              tag: e,
              des: t,
              delay: o
            };
          this._waitingItemByTag.set(e, i), cc.log("showWaiting::+++::" + this._waitingItemByTag.size + "::tag::" + e), n && this.showWaitingLayout(i)
        }, t.hideWaiting = function(e) {
          void 0 === e && (e = "");
          var t = this._waitingItemByTag.get(e);
          t && (this._waitingItemByTag.delete(e), cc.log("hideWaiting::---::" + this._waitingItemByTag.size + "::tag::" + e), this._waitingItemByTag.size <= 0 && this.hideWaitingLayout(t))
        }, Object.defineProperty(t, "waitingLayout", {
          get: function() {
            var e = cc.Canvas.instance.node.getChildByName("waitingLayout"),
              t = null;
            return e ? t = e.getComponent(o) : ((t = (e = c.default.createNode(s.ePrefabDefine.LOADING_DIALOG)).getComponent(o)) || (t = e.getComponent(o)), e.zIndex = a.eZIndex.LOADING, e.name = "waitingLayout", e.active = !1, cc.Canvas.instance.node.addChild(e)), t
          },
          enumerable: !1,
          configurable: !0
        }), t.showWaitingLayout = function(e, t) {
          void 0 === t && (t = 15), this.waitingLayout.item = e, this.waitingLayout.node.active = !0, this.waitingLayout.lbWaitingDes && this.waitingLayout.item && this.waitingLayout.item.des && this.waitingLayout.item.des.length && (this.waitingLayout.lbWaitingDes.string = this.waitingLayout.item.des), this.waitingLayout.unscheduleAllCallbacks(), this.waitingLayout.scheduleOnce(this.hideWaitingLayout.bind(this), t)
        }, t.hideWaitingLayout = function() {
          this.waitingLayout.node.stopActionByTag(99), this.waitingLayout.unscheduleAllCallbacks(), this.waitingLayout.node.active = !1
        }, t.prototype.onLoad = function() {}, t.prototype.onEnable = function() {
          this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchStart, this), this.nWaiting && (this.nWaiting.active = !1), this.nFaded && (this.nFaded.active = !1);
          var e = cc.sequence(cc.delayTime(this.item ? this.item.delay : 2), cc.callFunc(this._showWaitingUI.bind(this)));
          e.setTag(99), this.node.stopActionByTag(99), this.node.runAction(e)
        }, t.prototype.onDisable = function() {
          this.node.off(cc.Node.EventType.TOUCH_START, this._onTouchStart, this)
        }, t.prototype._showWaitingUI = function() {
          this.nWaiting && (this.nWaiting.active = !0), this.nFaded && (this.nFaded.active = !0)
        }, t.prototype._onTouchStart = function(e) {
          e.stopPropagation()
        }, t._waitingItemByTag = new Map, r([p(cc.Node)], t.prototype, "nFaded", void 0), r([p(cc.Node)], t.prototype, "nWaiting", void 0), r([p(cc.Label)], t.prototype, "lbWaitingDes", void 0), o = r([l], t)
      }(cc.Component);
    o.default = d, cc._RF.pop()
  }, {
    "../ePrefabDefine": "ePrefabDefine",
    "../utils/PrefabUtils": "PrefabUtils",
    "./UIDefine": "UIDefine"
  }],
  UIWindowManager: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "ba52dj53v1GnZ8frmWqx/OO", "UIWindowManager");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var a = e("./UIWindow"),
      c = e("./UIDefine"),
      s = e("./UIWaitingLayout"),
      u = cc._decorator,
      l = u.ccclass,
      p = (u.property, function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t._windowStack = [], t
        }
        var o;
        return i(t, e), o = t, Object.defineProperty(t, "instance", {
          get: function() {
            var e = cc.Canvas.instance.node.getComponent(o);
            return e || (e = cc.Canvas.instance.node.addComponent(o)), e
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype.onLoad = function() {
          if (this.node != cc.Canvas.instance.node) throw this.constructor.name + " must be a Canvas's comp"
        }, t.prototype.pushWindowToTop = function(e) {
          if (e)
            if (e instanceof a.default) this.pushWindowToTopAtIndex(this._windowStack.indexOf(e));
            else {
              for (var t = -1, o = 0, n = this._windowStack; o < n.length && (t++, !n[o].node.getComponent(e)); o++);
              this.pushWindowToTopAtIndex(t)
            }
        }, t.prototype.pushWindowToTopAtIndex = function(e) {
          if (!(e < 0 || e >= this._windowStack.length - 1)) {
            var t = this._windowStack[this._windowStack.length - 1];
            t.node.runAction(cc.scaleTo(.23, t.getUnfocusScale()).easing(cc.easeQuarticActionOut()));
            var o = this._windowStack[e];
            o.node.runAction(cc.scaleTo(.23, o.getFocusScale()).easing(cc.easeQuarticActionOut())), this._windowStack.splice(e, 1), this._windowStack.push(o);
            for (var n = e; n < this._windowStack.length; n++) this._windowStack[n].node.zIndex = c.eZIndex.WINDOW + n
          }
        }, t.prototype.removeAllWindows = function() {
          for (var e = 0, t = this._windowStack; e < t.length; e++) {
            var o = t[e],
              n = o.node;
            o.windowWillDisappear(), o.windowDidDisappear(), n.removeFromParent(), n.destroy()
          }
          this._windowStack = []
        }, t.prototype.removeWindow = function(e, t) {
          if (void 0 === t && (t = !1), e instanceof a.default) {
            if ((r = this._windowStack.indexOf(e)) >= 0) {
              if (this._windowStack.splice(r, 1), e.windowWillDisappear(), t) {
                var o = "hideWindow: " + e.node.name;
                s.default.showWaiting(o);
                var n = cc.scaleTo(.24, .6).easing(cc.easeBackIn()),
                  i = cc.sequence(n, cc.callFunc(function() {
                    e instanceof a.default && (e.windowDidDisappear(), e.node.removeFromParent(), e.node.destroy())
                  }));
                this.scheduleOnce(function() {
                  s.default.hideWaiting(o)
                }, .24), e.node.runAction(i)
              } else e.windowDidDisappear(), e.node.removeFromParent(), e.node.destroy();
              this._windowStack.length > 0 && (l = this._windowStack[this._windowStack.length - 1]).node.runAction(cc.scaleTo(.23, l.getFocusScale()).easing(cc.easeQuarticActionOut()))
            }
          } else {
            for (var r = -1, c = 0; c < this._windowStack.length; c++)
              if (this._windowStack[c] instanceof e || this._windowStack[c].getComponent(e)) {
                r = c, e = this._windowStack[c];
                break
              } if (e instanceof a.default && r >= 0) {
              if (this._windowStack.splice(r, 1), e.windowWillDisappear(), t) {
                var u = "hideWindow: " + e.node.name;
                s.default.showWaiting(u), n = cc.scaleTo(.24, .6).easing(cc.easeBackIn()), i = cc.sequence(n, cc.callFunc(function() {
                  e instanceof a.default && (e.windowDidDisappear(), e.node.removeFromParent(), e.node.destroy())
                })), this.scheduleOnce(function() {
                  s.default.hideWaiting(u)
                }, .24), e.node.runAction(i)
              } else e.windowDidDisappear(), e.node.removeFromParent(), e.node.destroy();
              var l;
              this._windowStack.length > 0 && (l = this._windowStack[this._windowStack.length - 1]).node.runAction(cc.scaleTo(.24, l.getFocusScale()).easing(cc.easeQuarticActionOut()))
            }
          }
        }, t.prototype.showWindowFromPrefabName = function(e, t, o) {
          void 0 === t && (t = null), void 0 === o && (o = !1);
          var n = cc.loader.getRes(e, cc.Prefab);
          if (n) this.showWindowFromPrefab(n, t, o);
          else {
            var i = this;
            cc.loader.loadRes(e, cc.Prefab, function(e, n) {
              i.showWindowFromPrefab(n, t, o)
            })
          }
        }, t.prototype.showWindowFromPrefab = function(e, t, o) {
          if (void 0 === t && (t = null), void 0 === o && (o = !1), !e) throw "prefab can not null";
          var n = cc.instantiate(e);
          this.showWindowFromNode(n, t, o)
        }, t.prototype.showWindowFromNode = function(e, t, o) {
          if (void 0 === t && (t = null), void 0 === o && (o = !1), !e) throw "node can not null";
          var n = "showWindow: " + e.name;
          if (s.default.showWaiting(n), this._windowStack.length > 0) {
            var i = this._windowStack[this._windowStack.length - 1];
            i.node.runAction(cc.scaleTo(.24, i.getUnfocusScale()).easing(cc.easeQuarticActionOut()))
          }
          var r = e.getComponent(a.default);
          if (r || (r = e.addComponent(a.default)), this._windowStack.push(r), t && t(r), this.node.addChild(e, c.eZIndex.WINDOW + this._windowStack.length - 1), r.windowWillAppear(), o) {
            e.scale = .6;
            var u = r.getFocusScale(),
              l = cc.scaleTo(.24, u).easing(cc.easeBackOut());
            e.runAction(cc.sequence(l, cc.callFunc(function() {
              r.windowDidAppear()
            }))), e.name, this.scheduleOnce(function() {
              s.default.hideWaiting(n)
            }, .24)
          } else e.scale = r.getFocusScale(), r.windowDidAppear(), s.default.hideWaiting(n)
        }, t.prototype.hasWindow = function(e) {
          return null != this.findWindow(e)
        }, t.prototype.findWindow = function(e) {
          for (var t = 0, o = this._windowStack; t < o.length; t++) {
            var n = o[t],
              i = n.node.getComponent(e);
            if (i) return i;
            if ("string" == typeof e && n.node.name == e) return i
          }
          return null
        }, o = r([l], t)
      }(cc.Component));
    o.default = p, cc._RF.pop()
  }, {
    "./UIDefine": "UIDefine",
    "./UIWaitingLayout": "UIWaitingLayout",
    "./UIWindow": "UIWindow"
  }],
  UIWindow: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "8bf4e1BLK1HrZ5HiQs+Jv0t", "UIWindow");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var a = e("./UIViewGroup"),
      c = e("./UIWindowManager"),
      s = cc._decorator,
      u = s.ccclass,
      l = s.property,
      p = function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.unfocusScale = .6, t.focusScale = 1, t._touchMoved = !1, t._pressed = !1, t._canMove = !0, t
        }
        return i(t, e), Object.defineProperty(t.prototype, "canMove", {
          set: function(e) {
            this._canMove = e
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype.getFocusScale = function() {
          return cc.sys.isMobile ? this.focusScale : .9 * this.focusScale
        }, t.prototype.getUnfocusScale = function() {
          return cc.sys.isMobile ? this.unfocusScale : .9 * this.unfocusScale
        }, t.prototype.windowWillAppear = function() {}, t.prototype.windowDidAppear = function() {}, t.prototype.windowWillDisappear = function() {}, t.prototype.windowDidDisappear = function() {}, t.prototype.onEnable = function() {
          this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchBegan, this, !0), this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMoved, this, !0), this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnded, this, !0), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancelled, this, !0)
        }, t.prototype.onDisable = function() {
          this.node.off(cc.Node.EventType.TOUCH_START, this._onTouchBegan, this, !0), this.node.off(cc.Node.EventType.TOUCH_MOVE, this._onTouchMoved, this, !0), this.node.off(cc.Node.EventType.TOUCH_END, this._onTouchEnded, this, !0), this.node.off(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancelled, this, !0)
        }, t.prototype._stopPropagationIfTargetIsMe = function(e) {
          e.eventPhase == cc.Event.AT_TARGET && e.target == this.node && e.stopPropagation()
        }, t.prototype._onTouchBegan = function(e, t) {
          if (this._canMove && this.enabledInHierarchy && !this._hasNestedViewGroup(e, t)) {
            if (e.eventPhase == cc.Event.AT_TARGET && e.target == this.node) {
              var o = this.node.getComponent(cc.PolygonCollider);
              if (o && !cc.Intersection.pointInPolygon(this.node.convertToNodeSpaceAR(e.getLocation()), o.points)) return;
              e.stopPropagation(), this.node._touchListener.setSwallowTouches(!0)
            }
            this._pressed = !0, c.default.instance.pushWindowToTop(this), this._touchMoved = !1
          }
        }, t.prototype._onTouchMoved = function(e, t) {
          if (this._canMove && this.enabledInHierarchy && !this._hasNestedViewGroup(e, t) && this._pressed) {
            if (this.node.position = this.node.position.add(e.touch.getDelta()), new cc.Vec2(e.getLocation().x, e.getLocation().y).sub(e.getStartLocation()).mag() > 12 && !this._touchMoved && e.target != this.node) {
              var o = new cc.Event.EventTouch(e.getTouches(), e.bubbles);
              o.type = cc.Node.EventType.TOUCH_CANCEL, o.touch = e.touch, o.simulate = !0, e.target.dispatchEvent(o), this._touchMoved = !0
            }
            this._stopPropagationIfTargetIsMe(e)
          }
        }, t.prototype._onTouchEnded = function(e, t) {
          this._canMove && this.enabledInHierarchy && !this._hasNestedViewGroup(e, t) && (this._pressed && this._stopPropagationIfTargetIsMe(e), this._pressed = !1, this.node._touchListener.setSwallowTouches(!1))
        }, t.prototype._onTouchCancelled = function(e, t) {
          this.enabledInHierarchy && !this._hasNestedViewGroup(e, t) && (this._pressed && this._stopPropagationIfTargetIsMe(e), e.simulate || (this._pressed = !1), this.node._touchListener.setSwallowTouches(!1))
        }, t.prototype.hide = function() {
          c.default.instance.removeWindow(this)
        }, r([l(cc.Float)], t.prototype, "unfocusScale", void 0), r([l(cc.Float)], t.prototype, "focusScale", void 0), r([u], t)
      }(a.default);
    o.default = p, cc._RF.pop()
  }, {
    "./UIViewGroup": "UIViewGroup",
    "./UIWindowManager": "UIWindowManager"
  }],
  UserData: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "dd6b9TCdQRFUpTT8kISWq5g", "UserData");
    var n, i = this && this.__extends || (n = function(e, t) {
      return (n = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, t) {
          e.__proto__ = t
        } || function(e, t) {
          for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
        })(e, t)
    }, function(e, t) {
      function o() {
        this.constructor = e
      }
      n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
    });
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.eUserRole = void 0;
    var r, a = e("./BaseData");
    (function(e) {
      e[e.PLAYER = 1] = "PLAYER", e[e.GM = 2] = "GM", e[e.AGENCY = 4] = "AGENCY"
    })(r = o.eUserRole || (o.eUserRole = {}));
    var c = function(e) {
      function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t._moduleDataByKey = new Map, t._moduleObjByClazz = new Map, t.role = r.PLAYER, t.playingPlayers = new Set, t.telegramId = "", t
      }
      return i(t, e), t.prototype.toPublic = function() {
        return {
          userId: this.userId,
          name: this.name,
          role: this.role,
          chargedRefCode: this.isChargedRefCode()
        }
      }, t.prototype.getClazzName = function() {
        return "UserData"
      }, t.defineUserDataModuleClasses = function(e) {
        this.DATA_MODULE = e;
        for (var t = 0, o = this.DATA_MODULE; t < o.length; t++) {
          var n = o[t];
          console.log("user module added " + n.key)
        }
      }, t.MODULE_FROM_KEY = function(e) {
        for (var t = 0, o = this.DATA_MODULE; t < o.length; t++) {
          var n = o[t];
          if (n.key == e) return n
        }
        return null
      }, t.KEY_FROM_CLAZZ = function(e) {
        for (var t = 0, o = this.DATA_MODULE; t < o.length; t++) {
          var n = o[t];
          if (n.clazz == e) return n.key
        }
        return null
      }, t.CLAZZ_FROM_KEY = function(e) {
        for (var t = 0, o = this.DATA_MODULE; t < o.length; t++) {
          var n = o[t];
          if (n.key == e) return n.clazz
        }
        return null
      }, t.prototype.unpack = function(e, t) {
        void 0 === t && (t = !0), this.userId = e.get("userId"), this.role = e.get("role"), this.setName(e.get("name")), this.timeJoin = e.get("timeJoin"), this.guestId = e.get("guestId"), this.username = e.get("username"), this.setPhone(e.get("phone")), this.email = e.get("email"), this.setRefCode(e.get("refCode")), this.setParentRefCode(e.get("parentRefCode"), e.get("parentName")), this.time = this.timeJoin, this.telegramId = e.get("telegramId"), this.playingPlayers.clear();
        for (var o = 0, n = e.get("arrPlayer"); o < n.length; o++) {
          var i = n[o];
          this.playingPlayers.add(i)
        }
        cc.game.emit(this.key)
      }, t.prototype.hasTelegram = function() {
        return this.telegramId && this.telegramId.length > 0
      }, Object.defineProperty(t, "main", {
        get: function() {
          return this._mainIns || (this._mainIns = new t(null, "")), this._mainIns
        },
        enumerable: !1,
        configurable: !0
      }), t.destroyMain = function() {
        this._mainIns = null
      }, t.prototype.getUserId = function() {
        return this.userId
      }, t.prototype.getName = function() {
        return this.name
      }, t.prototype.setName = function(e) {
        this.name = e, cc.Canvas.instance.node.emit(t.EVENT_UPDATE_NAME)
      }, t.prototype.setParentRefCode = function(e, o) {
        this.parentRefCode = e, this.parentName = o, cc.Canvas.instance.node.emit(t.EVENT_UPDATE_PARENT_REF_CODE)
      }, t.prototype.getRole = function() {
        return this.role
      }, t.prototype.getParentName = function() {
        return this.parentName
      }, t.prototype.setUsername = function(e) {
        this.username = e, cc.Canvas.instance.node.emit(t.EVENT_UPDATE_USERNAME)
      }, t.prototype.getUserName = function() {
        return this.username
      }, t.prototype.getPhone = function() {
        return this.phone
      }, t.prototype.setPhone = function(e) {
        this.phone = e, cc.Canvas.instance.node.emit(t.EVENT_UPDATE_PHONE)
      }, t.prototype.hasVerifiableMethod = function() {
        return this.hasPhone() || this.hasEmail()
      }, t.prototype.setRefCode = function(e) {
        this.refCode = e, cc.Canvas.instance.node.emit(t.EVENT_UPDATE_REF_CODE)
      }, t.prototype.getRefCode = function() {
        return this.refCode
      }, t.prototype.getParentRefCode = function() {
        return this.parentRefCode
      }, t.prototype.hasParent = function() {
        return "" != this.parentRefCode
      }, t.prototype.getTelegramId = function() {
        return this.telegramId
      }, t.prototype.setTelegramId = function(e) {
        this.telegramId = e, cc.Canvas.instance.node.emit(t.EVENT_UPDATE_TELEGRAM)
      }, t.prototype.isChargedRefCode = function() {
        return "" != this.refCode
      }, t.prototype.hasPhone = function() {
        return this.phone && this.phone.length > 0
      }, t.prototype.hasEmail = function() {
        return this.email && this.email.length > 0
      }, t.prototype.hasPlayer = function(e) {
        return this.playingPlayers.has(e)
      }, t.prototype.addPlayer = function(e) {
        this.playingPlayers.add(e)
      }, t.prototype.removePlayer = function(e) {
        this.playingPlayers.delete(e)
      }, t.prototype.get = function(e) {
        var o = e,
          n = this._moduleObjByClazz.get(o);
        if (!n) {
          n = new o(this);
          var i = this._moduleDataByKey.get(t.KEY_FROM_CLAZZ(o));
          i && n.unpack(i), this._moduleObjByClazz.set(o, n)
        }
        return n
      }, t.prototype.update = function() {
        for (var e = 0, t = Array.from(this._moduleObjByClazz.values()); e < t.length; e++) t[e].update()
      }, t.EVENT_UPDATE_NAME = "EVENT_UPDATE_NAME", t.EVENT_UPDATE_PHONE = "EVENT_UPDATE_PHONE", t.EVENT_UPDATE_TELEGRAM = "EVENT_UPDATE_TELEGRAM", t.EVENT_UPDATE_USERNAME = "EVENT_UPDATE_USERNAME", t.EVENT_UPDATE_EMAIL = "EVENT_UPDATE_EMAIL", t.EVENT_UPDATE_REF_CODE = "EVENT_UPDATE_REF_CODE", t.EVENT_UPDATE_PARENT_REF_CODE = "EVENT_UPDATE_PARENT_REF_CODE", t.DATA_MODULE = [], t._mainIns = null, t
    }(a.default);
    o.default = c, cc._RF.pop()
  }, {
    "./BaseData": "BaseData"
  }],
  UsernamePasswordLogin: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "417281JBBdLN5kJ3kb9wSx9", "UsernamePasswordLogin");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var a = e("../utils/ClientData"),
      c = e("../utils/Utils"),
      s = e("../ui/UIPopupManager"),
      u = e("./AuthenManager"),
      l = e("../ui/UIPopup"),
      p = e("../config/ConfigLoader"),
      d = e("../audio/eSoundDefine"),
      f = e("../audio/AudioManager"),
      h = cc._decorator,
      g = h.ccclass,
      _ = h.property,
      y = function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.edbUsername = null, t.edbPassword = null, t.toggleSaveAccount = null, t.prfRegister = null, t.prfResetPassword = null, t
        }
        var o;
        return i(t, e), o = t, t.prototype.onLoad = function() {
          var e = a.default.getBoolean(a.ClientDataKey.SAVE_TOKEN, !1);
          this.toggleSaveAccount.isChecked = e
        }, t.prototype.onEnable = function() {
          this._onLogin()
        }, t.prototype.onDisable = function() {}, t.prototype._onLogin = function() {
          u.default.instance.isLoggedIn && s.default.instance.has(o) && s.default.instance.removePopup(o)
        }, t.prototype.onResetPassClicked = function() {
          f.default.instance.playSfx(d.eSoundDefine.click), l.default.showFromPrefab(this.prfResetPassword), s.default.instance.has(o) && s.default.instance.removePopup(o)
        }, t.prototype.onRegisterClicked = function() {
          f.default.instance.playSfx(d.eSoundDefine.click), l.default.showFromPrefab(this.prfRegister), s.default.instance.has(o) && s.default.instance.removePopup(o)
        }, t.prototype.onToggleSaveAccount = function() {
          a.default.setBoolean(a.ClientDataKey.SAVE_TOKEN, this.toggleSaveAccount.isChecked)
        }, t.prototype.onLoginClicked = function() {
          f.default.instance.playSfx(d.eSoundDefine.click);
          var e = this.edbUsername.string,
            t = this.edbPassword.string,
            n = null;
          c.default.isValidUsername(this.edbUsername.string) && (n = {
            method: u.eAuthenMethod.Username,
            username: e,
            password: t
          }), n ? u.default.instance.doAuthen(n, function(e) {
            e && s.default.instance.has(o) && s.default.instance.removePopup(o)
          }) : l.default.show(p.default.CFS("msg_invalid_username"))
        }, r([_(cc.EditBox)], t.prototype, "edbUsername", void 0), r([_(cc.EditBox)], t.prototype, "edbPassword", void 0), r([_(cc.Toggle)], t.prototype, "toggleSaveAccount", void 0), r([_(cc.Prefab)], t.prototype, "prfRegister", void 0), r([_(cc.Prefab)], t.prototype, "prfResetPassword", void 0), o = r([g], t)
      }(cc.Component);
    o.default = y, cc._RF.pop()
  }, {
    "../audio/AudioManager": "AudioManager",
    "../audio/eSoundDefine": "eSoundDefine",
    "../config/ConfigLoader": "ConfigLoader",
    "../ui/UIPopup": "UIPopup",
    "../ui/UIPopupManager": "UIPopupManager",
    "../utils/ClientData": "ClientData",
    "../utils/Utils": "Utils",
    "./AuthenManager": "AuthenManager"
  }],
  Utils: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "fce93tyslVIcpyyPiRvfFs5", "Utils"), Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.Mat = void 0;
    var n = e("../network/eErrorCode"),
      i = e("../ui/UIPopupManager"),
      r = e("../ui/UITextManager"),
      a = function() {
        function e(e, t) {
          this.i = e, this.j = t
        }
        return e.make = function(t, o) {
          return new e(t, o)
        }, e.prototype.toString = function() {
          return "{" + this.i + "," + this.j + "},\n"
        }, e.prototype.copy = function(e) {
          this.i = e.i, this.j = e.j
        }, e.prototype.equals = function(e) {
          return this.i == e.i && this.j == e.j
        }, e.prototype.multiply = function(t) {
          return e.make(this.i * t, this.j * t)
        }, e.prototype.add = function(t) {
          return e.make(this.i + t.i, this.j + t.j)
        }, e.prototype.substract = function(t) {
          return e.make(this.i - t.i, this.j - t.j)
        }, e.prototype.valid = function(e) {
          return this.i >= 0 && this.i < e.height && this.j >= 0 && this.j < e.width
        }, e.ZERO = e.make(0, 0), e.ONE = e.make(1, 1), e
      }();
    o.Mat = a;
    var c = function() {
      function e() {}
      return e.isEmptyString = function(e) {
        return !e || 0 === e.length
      }, e.colorFromHex = function(e) {
        e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, o, n) {
          return t + t + o + o + n + n
        });
        var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
        return t ? cc.color(parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)) : cc.Color.WHITE
      }, e.copy = function(e) {
        if (cc.sys.isBrowser) {
          var t = document.createElement("textarea");
          document.body.appendChild(t), t.value = e, t.select(), document.execCommand("copy"), document.body.removeChild(t)
        } else cc.sys.isNative;
        r.default.showCenterNotification("Copied")
      }, Object.defineProperty(e, "minScaleFactor", {
        get: function() {
          return Math.min(cc.Canvas.instance.node.width / cc.Canvas.instance.designResolution.width, cc.Canvas.instance.node.height / cc.Canvas.instance.designResolution.height)
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e, "maxScaleFactor", {
        get: function() {
          return Math.max(cc.Canvas.instance.node.width / cc.Canvas.instance.designResolution.width, cc.Canvas.instance.node.height / cc.Canvas.instance.designResolution.height)
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e, "protoLabel", {
        get: function() {
          var e, t = cc.Canvas.instance.node.getChildByName("protoLabel");
          return t ? e = t.getComponent(cc.Label) : (t = new cc.Node("protoLabel"), cc.Canvas.instance.node.addChild(t), (e = t.addComponent(cc.Label)).string = "", e)
        },
        enumerable: !1,
        configurable: !0
      }), e.generateSystemTextSize = function(e, t, o, n, i, r) {
        void 0 === i && (i = !1), void 0 === r && (r = null);
        var a = this.protoLabel;
        a.fontSize = t, a.lineHeight = o, a.overflow = n, a.enableWrapText = i, n == cc.Label.Overflow.RESIZE_HEIGHT && (a.node.width = r), a.string = e;
        var c = a.node.getContentSize();
        return a.string = "", c
      }, e.centerContentInBox = function(e, t, o, n) {
        if (e && o && o) {
          e.string = n;
          var i = e.node.getContentSize();
          if (o) {
            var r = o.node.getContentSize();
            i.height > r.height ? (o.node.getComponentInChildren(cc.Scrollbar).node.active = !0, t.node.active = !0, t.string = n, e.node.setContentSize(cc.size(i.width, 0)), e.node.active = !1) : (e.node.active = !0, t.node.active = !1, o.node.getComponentInChildren(cc.Scrollbar).node.active = !1)
          }
        }
      }, e.alignView = function() {
        cc.view.setResizeCallback(e.alignView);
        var t = cc.view.getCanvasSize(),
          o = cc.Canvas.instance.designResolution.height / t.height,
          n = cc.Canvas.instance.designResolution.width / t.width;
        console.log("factor:" + cc.size(n, o).toString()), console.log("node size:" + cc.size(cc.visibleRect.width, cc.visibleRect.height).toString()), console.log("design size:" + cc.Canvas.instance.designResolution.toString()), o < n ? (cc.Canvas.instance.fitHeight = !1, cc.Canvas.instance.fitWidth = !0, console.log("design size: fit fitWidth")) : o > n ? (cc.Canvas.instance.fitHeight = !0, cc.Canvas.instance.fitWidth = !1, console.log("design size: fit fitHeight")) : (cc.Canvas.instance.fitHeight = !0, cc.Canvas.instance.fitWidth = !0, console.log("design size: fit both")), cc.Canvas.instance.node.emit(e.EVENT_CHANGE_FRAME)
      }, e.randomInt = function(e, t) {
        return Math.floor(Math.random() * (t - e + 1)) + e
      }, e.randomFloat = function(e, t) {
        return Math.random() * (t - e) + e
      }, e.randomBool = function() {
        return Math.random() >= .5
      }, e.randomSuccess = function(e) {
        return Math.random() <= e
      }, e.isValidEmail = function(e) {
        return /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(e)
      }, e.isValidUsername = function(e) {
        return /[A-Za-z0-9_.]+/.test(e)
      }, e.isValidPhoneNumber = function(e) {
        return /^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/.test(e)
      }, e.shuffle = function(e) {
        for (var t, o, n = e.length; 0 !== n;) o = Math.floor(Math.random() * n), t = e[n -= 1], e[n] = e[o], e[o] = t;
        return e
      }, e.getAngleByTwoPoint = function(e, t) {
        var o = new cc.Vec2(e.x - t.x, e.y - t.y);
        return 90 - cc.misc.radiansToDegrees(Math.atan2(o.y, o.x))
      }, e.pointFromAngleAndRadius = function(e, t, o) {
        return new cc.Vec2(e.x + o * Math.cos(t), e.y + o * Math.sin(t))
      }, e.formatNumber00 = function(e, t) {
        for (var o = "" + e; o.length < t;) o = "0" + o;
        return o
      }, e.mod = function(e, t) {
        return (e % t + t) % t
      }, e.show = function(e) {
        for (var t = 0, o = e.getComponentsInChildren(cc.RenderComponent); t < o.length; t++) o[t].enabled = !0
      }, e.hide = function(e) {
        for (var t = 0, o = e.getComponentsInChildren(cc.RenderComponent); t < o.length; t++) o[t].enabled = !1
      }, e.setGrayScale = function(e, t) {
        var o;
        o = t ? cc.Material.getBuiltinMaterial("2d-gray-sprite") : cc.Material.getBuiltinMaterial("2d-sprite"), e.setMaterial(0, o)
      }, e.handleErrorApi = function(e, t, o) {
        var r;
        void 0 === t && (t = !1), void 0 === o && (o = null), e.error.code == n.eErrorCode.MAINTENANCE ? i.default.instance.showPopup(e.error.msg) : i.default.instance.showPopup(null !== (r = e.error.msg) && void 0 !== r ? r : "Error")
      }, e.handleError = function(e, t, o) {
        void 0 === t && (t = !1), void 0 === o && (o = null)
      }, e.getSocialAvatarURL = function(e, t) {
        var o = e.split("_"),
          n = o[1],
          i = o[2],
          r = "default";
        switch (n) {
          case "facebook":
            r = "https://graph.facebook.com/" + i + "/picture?small=square&width=" + t.node.width + "&height=" + t.node.height
        }
        return r
      }, e.chipAfterFee = function(e, t) {
        return e - e * t / 100
      }, e.playSpine = function(e, t, o, n) {
        void 0 === n && (n = null), e.skeletonData && e.setAnimation(0, t, o) && e.setCompleteListener(function(e) {
          (e.animation ? e.animation.name : "") === t && n && n()
        })
      }, e.playSpineAny = function(e, t, o, n, i) {
        if (void 0 === n && (n = !1), void 0 === i && (i = null), e && e.skeletonData && e.skeletonData.getRuntimeData() && e.skeletonData.getRuntimeData().animations && e.skeletonData.getRuntimeData().animations.length) {
          for (var r = -1, a = 0, c = e.skeletonData.getRuntimeData().animations; a < c.length; a++)
            if (c[a].name == t) {
              r = 0;
              break
            } if (r < 0) return;
          var s = e.skeletonData.getRuntimeData().animations[r].duration;
          e.timeScale = s / o, e.clearTracks(), e.setAnimation(0, t, n) && e.setCompleteListener(function(e) {
            (e.animation ? e.animation.name : "") === t && i && i()
          })
        }
      }, e.switchGrayMaterial = function(e, t) {
        var o;
        o = e ? cc.Material.getBuiltinMaterial("2d-gray-sprite") : cc.Material.getBuiltinMaterial("2d-sprite"), t.setMaterial(0, o)
      }, e.EVENT_CHANGE_FRAME = "EVENT_CHANGE_FRAME", e.getRandomInt = function(e, t) {
        return Math.floor(Math.random() * (t - e + 1)) + e
      }, e.formatMoneyWithCommaOnly = function(e) {
        return e.toFixed().replace(/(\d)(?=(\d{3})+(,|$))/g, "$1.")
      }, e
    }();
    o.default = c, cc._RF.pop()
  }, {
    "../network/eErrorCode": "eErrorCode",
    "../ui/UIPopupManager": "UIPopupManager",
    "../ui/UITextManager": "UITextManager"
  }],
  Version: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "786df/yqElFnp2hHV2wB0Pz", "Version");
    var n, i = this && this.__extends || (n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          })(e, t)
      }, function(e, t) {
        function o() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
      }),
      r = this && this.__decorate || function(e, t, o, n) {
        var i, r = arguments.length,
          a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
        return r > 3 && a && Object.defineProperty(t, o, a), a
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var a = e("../../../framework/utils/ClientData"),
      c = cc._decorator,
      s = c.ccclass,
      u = c.property,
      l = function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.label = null, t
        }
        return i(t, e), t.prototype.onLoad = function() {
          this.label.string = a.default.GameConfig.version
        }, r([u(cc.Label)], t.prototype, "label", void 0), r([s], t)
      }(cc.Component);
    o.default = l, cc._RF.pop()
  }, {
    "../../../framework/utils/ClientData": "ClientData"
  }],
  ZaiUtils: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "29f37ERmvREo6Y4wHU3lze7", "ZaiUtils"), Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.ZaiUtils = void 0;
    var n = e("../global/Global");
    (o.ZaiUtils || (o.ZaiUtils = {})).animateMoneyFlyEffect = function(e, t) {
      var o = e.node,
        i = o.getPosition();
      o.opacity = 255, o.scale = .4, e.string = "+" + n.ZaiGlobal.NumberFormat1(t);
      var r = cc.sequence(cc.spawn(cc.scaleTo(.35, 1).easing(cc.easeBackOut()), cc.moveBy(.7, new cc.Vec2(0, t > 0 ? 48 : 12))), cc.fadeOut(.5), cc.callFunc(function() {
        o.setPosition(i), o.opacity = 0
      }));
      r.setTag(123), o.stopActionByTag(123), o.runAction(r)
    }, cc._RF.pop()
  }, {
    "../global/Global": "Global"
  }],
  base64Helper: [function(e, t) {
    "use strict";
    cc._RF.push(t, "d1ac8iaWQhNib7MGrGgX4WT", "base64Helper");
    for (var o = [], n = [], i = ("undefined" != typeof Uint8Array ? Uint8Array : Array, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), r = 0, a = i.length; r < a; ++r) o[r] = i[r], n[i.charCodeAt(r)] = r;
    n["-".charCodeAt(0)] = 62, n["_".charCodeAt(0)] = 63, cc._RF.pop()
  }, {}],
  ccShader_Default_Vert_noMVP: [function(e, t) {
    "use strict";
    cc._RF.push(t, "c301ehHRC1MiIMA4MYBHsMu", "ccShader_Default_Vert_noMVP"), t.exports = "\nattribute vec4 a_position;\n attribute vec2 a_texCoord;\n attribute vec4 a_color;\n varying vec2 v_texCoord;\n varying vec4 v_fragmentColor;\n void main()\n {\n     gl_Position = CC_PMatrix  * a_position;\n     v_fragmentColor = a_color;\n     v_texCoord = a_texCoord;\n }\n", cc._RF.pop()
  }, {}],
  ccShader_Default_Vert: [function(e, t) {    "use strict";
    cc._RF.push(t, "29bc0bGx0VJ/a8HbN9yMKac", "ccShader_Default_Vert"), t.exports = "\nattribute vec4 a_position;\nattribute vec2 a_texCoord;\nattribute vec4 a_color;\nvarying vec2 v_texCoord;\nvarying vec4 v_fragmentColor;\nvoid main()\n{\n    gl_Position = CC_PMatrix * a_position;\n    v_fragmentColor = a_color;\n    v_texCoord = a_texCoord;\n}\n", cc._RF.pop()
  }, {}],
  eErrorCode: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "0ebb0pieLJJVpAnLgWe9H6u", "eErrorCode"), Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.eErrorCode = void 0,
      function(e) {
        e[e.SUCCESS = 0] = "SUCCESS", e[e.VALIDATION_FAIL = 1] = "VALIDATION_FAIL", e[e.INVALID_PARAMS = 2] = "INVALID_PARAMS", e[e.INTERNAL_ERROR = 3] = "INTERNAL_ERROR", e[e.TIME_OUT = 4] = "TIME_OUT", e[e.EXCEPTION = 5] = "EXCEPTION", e[e.MAINTENANCE = 6] = "MAINTENANCE", e[e.TOKEN_EXPIRE = 86] = "TOKEN_EXPIRE"
      }(o.eErrorCode || (o.eErrorCode = {})), cc._RF.pop()
  }, {}],
  eLocale: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "4769c5LFwRD8q/MFQ3/uI96", "eLocale"), Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.eLocale = void 0,
      function(e) {
        e[e.EN = 0] = "EN", e[e.VN = 1] = "VN", e[e.KHM = 2] = "KHM"
      }(o.eLocale || (o.eLocale = {})), cc._RF.pop()
  }, {}],
  ePrefabDefine: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "2406bI/QzZHDKPy3j4hvulW", "ePrefabDefine"), Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.ePrefabCommonLoad = o.ePrefabDefine = void 0,
      function(e) {
        e.BUTTON_COMMON = "framework/ui/BUTTON_COMMON", e.POPUP_COMMON = "framework/ui/POPUP_COMMON", e.POPUP_ZOOM_IMG = "framework/ui/POPUP_ZOOM_IMG", e.FADED_BACKGROUND = "framework/ui/FADED_BACKGROUND", e.CENTER_NOTIFICATION = "framework/ui/CENTER_NOTIFICATION", e.TEXT_FLY = "framework/ui/TEXT_FLY", e.TEXT_CHIP = "framework/ui/TEXT_CHIP", e.TOOLTIP_MESSAGE = "framework/ui/TOOLTIP_MESSAGE", e.WAITING_LAYOUT = "framework/ui/WAITING_LAYOUT", e.LOGIN_DIALOG = "modules/lobby/LoginPopup", e.LOADING = "framework/loading/LOADING", e.LOADING_DIALOG = "framework/loading/LOADING_DIALOG", e.HOT_UPDATE = "framework/hot_update/HOT_UPDATE", e.CREATE_NAME = "framework/login/CREATE_NAME", e.GAME_PLAY = "modules/gameplay/GAME_PLAY", e.POPUP_ENDGAME = "modules/gameplay/POPUP_ENDGAME"
      }(o.ePrefabDefine || (o.ePrefabDefine = {})),
      function(e) {
        e.LOADING_DIALOG = "framework/loading/LOADING_DIALOG", e.BUTTON_COMMON = "framework/ui/BUTTON_COMMON", e.POPUP_COMMON = "framework/ui/POPUP_COMMON", e.POPUP_ZOOM_IMG = "framework/ui/POPUP_ZOOM_IMG", e.FADED_BACKGROUND = "framework/ui/FADED_BACKGROUND", e.GAME_PLAY = "modules/gameplay/GAME_PLAY", e.POPUP_ENDGAME = "modules/gameplay/POPUP_ENDGAME"
      }(o.ePrefabCommonLoad || (o.ePrefabCommonLoad = {})), cc._RF.pop()
  }, {}],
  eServiceDefine: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "27437wZxsdA16DsE+0cbEyQ", "eServiceDefine"), Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.eServiceDefineType = o.eGameTypeDefine = o.eBankCode = o.eServiceDefine = void 0,
      function(e) {
        e[e.System = 1] = "System", e[e.SlotGame3x3_20 = 101] = "SlotGame3x3_20", e[e.SlotGame3x5_20_8000 = 102] = "SlotGame3x5_20_8000", e[e.SlotGame3x3_27 = 103] = "SlotGame3x3_27", e[e.SlotGame3x5_25_Wild = 104] = "SlotGame3x5_25_Wild", e[e.SlotGame3x5_25_Wild2 = 105] = "SlotGame3x5_25_Wild2", e[e.Slot40 = 106] = "Slot40", e[e.GameMinipoker = 107] = "GameMinipoker", e[e.SlotGame3x5_20_Wild = 108] = "SlotGame3x5_20_Wild", e[e.SlotBoom = 109] = "SlotBoom", e[e.FishingGame = 110] = "FishingGame", e[e.Aquarium = 111] = "Aquarium", e[e.SlotGame3x3_20_Boom = 113] = "SlotGame3x3_20_Boom", e[e.SlotGame3x5_10_Super = 114] = "SlotGame3x5_10_Super", e[e.SlotGame3x5_20_Wild_MultiJackpot = 115] = "SlotGame3x5_20_Wild_MultiJackpot", e[e.SlotGame5x5_40 = 116] = "SlotGame5x5_40", e[e.TXGame = 151] = "TXGame", e[e.LHGame = 152] = "LHGame", e[e.XDGame = 153] = "XDGame", e[e.BCGame = 154] = "BCGame", e[e.BCMGame = 155] = "BCMGame", e[e.X777Game = 156] = "X777Game", e[e.BaLaGame = 157] = "BaLaGame", e[e.BaCayMiniGame = 158] = "BaCayMiniGame", e[e.TLMNGame = 191] = "TLMNGame", e[e.CaoThap = 181] = "CaoThap", e[e.TransferTo = 201] = "TransferTo", e[e.TransferFrom = 202] = "TransferFrom", e[e.SaveToBox = 203] = "SaveToBox", e[e.TakeFromBox = 204] = "TakeFromBox", e[e.OtpFee = 205] = "OtpFee", e[e.ChargeTelcoCard = 206] = "ChargeTelcoCard", e[e.ChargeMomo = 207] = "ChargeMomo", e[e.ChargeBank = 208] = "ChargeBank", e[e.ChargeCoin = 209] = "ChargeCoin", e[e.ChargeRefCode = 210] = "ChargeRefCode", e[e.EventRewardTxDaily = 211] = "EventRewardTxDaily", e[e.EventRewardTxWeekly = 212] = "EventRewardTxWeekly", e[e.EventRewardVippointDaily = 213] = "EventRewardVippointDaily", e[e.EventRewardVippointWeekly = 214] = "EventRewardVippointWeekly", e[e.EventRewardVippointExchange = 215] = "EventRewardVippointExchange", e[e.ExchangeTelcoCard = 216] = "ExchangeTelcoCard", e[e.ExchangeMomo = 217] = "ExchangeMomo", e[e.ExchangeBank = 218] = "ExchangeBank", e[e.ExchangeCoin = 219] = "ExchangeCoin", e[e.ChangeBalance = 220] = "ChangeBalance", e[e.Commission = 221] = "Commission", e[e.CreateGiftcode = 222] = "CreateGiftcode", e[e.UseGiftcode = 223] = "UseGiftcode", e[e.VippointReward = 224] = "VippointReward", e[e.HoldTransfer = 225] = "HoldTransfer", e[e.ReleaseTransfer = 226] = "ReleaseTransfer", e[e.LockGiftCode = 227] = "LockGiftCode"
      }(o.eServiceDefine || (o.eServiceDefine = {})),
      function(e) {
        e[e.VCB = 0] = "VCB", e[e.VTB = 1] = "VTB", e[e.TCB = 2] = "TCB", e[e.BIDV = 3] = "BIDV", e[e.AGR = 4] = "AGR", e[e.STB = 5] = "STB", e[e.ACB = 6] = "ACB", e[e.MBB = 7] = "MBB", e[e.TPB = 8] = "TPB", e[e.SHIB = 9] = "SHIB", e[e.VIB = 10] = "VIB", e[e.VPB = 11] = "VPB", e[e.MSB = 12] = "MSB", e[e.SCB = 13] = "SCB"
      }(o.eBankCode || (o.eBankCode = {})),
      function(e) {
        e[e.SlotGame = 0] = "SlotGame", e[e.BetGame = 1] = "BetGame", e[e.OtherGame = 2] = "OtherGame"
      }(o.eGameTypeDefine || (o.eGameTypeDefine = {})),
      function(e) {
        e[e.System = 2] = "System", e[e.SlotGame3x3_20 = 0] = "SlotGame3x3_20", e[e.SlotGame3x5_20_8000 = 0] = "SlotGame3x5_20_8000", e[e.SlotGame3x3_27 = 0] = "SlotGame3x3_27", e[e.SlotGame3x5_25_Wild = 0] = "SlotGame3x5_25_Wild", e[e.SlotGame3x5_25_Wild2 = 0] = "SlotGame3x5_25_Wild2", e[e.Slot40 = 0] = "Slot40", e[e.GameMinipoker = 0] = "GameMinipoker", e[e.SlotGame3x5_20_Wild = 0] = "SlotGame3x5_20_Wild", e[e.SlotBoom = 0] = "SlotBoom", e[e.FishingGame = 2] = "FishingGame", e[e.Aquarium = 0] = "Aquarium", e[e.TXGame = 1] = "TXGame", e[e.LHGame = 1] = "LHGame", e[e.XDGame = 1] = "XDGame", e[e.BCGame = 1] = "BCGame", e[e.TLMNGame = 2] = "TLMNGame", e[e.CaoThap = 2] = "CaoThap", e[e.TransferTo = 2] = "TransferTo", e[e.TransferFrom = 2] = "TransferFrom", e[e.SaveToBox = 2] = "SaveToBox", e[e.TakeFromBox = 2] = "TakeFromBox", e[e.OtpFee = 2] = "OtpFee", e[e.ChargeTelcoCard = 2] = "ChargeTelcoCard", e[e.ChargeMomo = 2] = "ChargeMomo", e[e.ChargeBank = 2] = "ChargeBank", e[e.ChargeCoin = 2] = "ChargeCoin", e[e.ChargeRefCode = 2] = "ChargeRefCode", e[e.EventRewardTxDaily = 2] = "EventRewardTxDaily", e[e.EventRewardTxWeekly = 2] = "EventRewardTxWeekly", e[e.EventRewardVippointDaily = 2] = "EventRewardVippointDaily", e[e.EventRewardVippointWeekly = 2] = "EventRewardVippointWeekly", e[e.EventRewardVippointExchange = 2] = "EventRewardVippointExchange", e[e.ExchangeTelcoCard = 2] = "ExchangeTelcoCard", e[e.ExchangeMomo = 2] = "ExchangeMomo", e[e.ExchangeBank = 2] = "ExchangeBank", e[e.ExchangeCoin = 2] = "ExchangeCoin", e[e.ChangeBalance = 2] = "ChangeBalance", e[e.Commission = 2] = "Commission", e[e.MakeGiftcode = 2] = "MakeGiftcode", e[e.UseGiftcode = 2] = "UseGiftcode", e[e.VippointReward = 2] = "VippointReward", e[e.HoldTransfer = 2] = "HoldTransfer", e[e.ReleaseTransfer = 2] = "ReleaseTransfer", e[e.LockGiftCode = 2] = "LockGiftCode"
      }(o.eServiceDefineType || (o.eServiceDefineType = {})), cc._RF.pop()
  }, {}],
  eSoundDefine: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "b2756PNKq9BypmXyHc+bmX6", "eSoundDefine"), Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.eSoundType = o.eSoundDefine = void 0,
      function(e) {
        e.click = "sounds/click", e.bgMusic = "sounds/NhacNenGame", e.close_popup = "sounds/closepopup", e.switch_quest = "sounds/change_quest", e.correct = "sounds/correct", e.wrong = "sounds/wrong"
      }(o.eSoundDefine || (o.eSoundDefine = {})),
      function(e) {
        e[e.CLICK = 0] = "CLICK", e[e.GAME = 1] = "GAME", e[e.MINIGAME = 2] = "MINIGAME"
      }(o.eSoundType || (o.eSoundType = {})), cc._RF.pop()
  }, {}],
  ioe_config: [function(e, t, o) {
    "use strict";
    cc._RF.push(t, "55fa1kUjyNMY5MzNURexJ89", "ioe_config"), Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.IOE = void 0;
    var n = e("../../framework/ui/UIPopupManager");
    (function(e) {
      e.GAME_VIEW = cc.v2(1162, 626), e.TIME_TO_NEXT_QUEST = 2, e.DELAY_SCROLL_TEXT_QUEST = 2, e.DELAY_SHOW_TEXT_END_GAME = 4, e.GameType = {
        SelectCorrectAnswear: 1,
        CombineCouple: 2,
        InputWordToEmptySpace: 3,
        DienTuVaoChoTrong: 4,
        SapXepLaiCau: 5,
        ConbineCouple: 6,
        DienChuOrTuVaoChoTrong: 7,
        LoaiBoChuThua: 8,
        ListenerAndSelectAnswearFromTextQuestion: 9,
        ListenerAndSelectImage: 10,
        ListenerAndSelectAnswearNoTextQuestion: 11,
        ListenerAndDienTuChoTrong: 12,
        ThiThu: 15
      }, e.ContentType = {
        Text: 0,
        Image: 1,
        Audio: 2,
        Video: 3,
        LongText: 4,
        SplitText: 5,
        TrueOrFalse: 6
      }, e.QuestionType = {
        TrueOrFalse: 1,
        DienTuVaoChoTrong: 2,
        SapXep: 3,
        FixWrongText: 4,
        FixSentence: 5,
        FixDocument: 6,
        CombineCouple: 7,
        SelectAnswear: 10
      }, e.ClientId = {
        TracNghiemTxt: 1,
        TracNghiemImage: 2,
        TracNghiemAudio: 3,
        TracNghiemCoversation: 4,
        TrueFalseTxt: 10,
        TrueFalseAudio: 11,
        TrueFalseImage: 12,
        DienTuTxt: 16,
        DienTuImage: 17,
        DienTuAudio: 18
      }, e.parseResponse = function(e, t, o, i) {
        return !!e && (0 == e.code ? (o && o(), !0) : (t && n.default.instance.showPopup(e.message ? e.message : JSON.stringify(e)), i && i(), !1))
      }, e.caculateTimeAnswear = function(e) {
        var t = !1,
          o = 0;
        return e < 10 ? (t = !0, o = 5 + (10 - e) / 10) : o = e < 20 ? 4 + (20 - e) / 20 : e < 60 ? 3 + (60 - e) / 60 : e < 120 ? 2 + (120 - e) / 120 : 1, {
          timeRun: o,
          isFast: t
        }
      }
    })(o.IOE || (o.IOE = {})), cc._RF.pop()
  }, {
    "../../framework/ui/UIPopupManager": "UIPopupManager"
  }]
}, {}, ["AudioControl", "AudioManager", "eSoundDefine", "BaseConfig", "BaseRefConfig", "BoxConfig", "ConfigLoader", "GameConfig", "IConfig", "ReviewConfig", "StringConfig", "eLocale", "ePrefabDefine", "HotUpdate", "JSVersionLabel", "Loading", "LoadingManager", "BaseData", "BaseUserModuleData", "UserData", "AuthenManager", "LoginRequireFeature", "UsernamePasswordLogin", "BOCmdDefine", "BOError", "BaseReceive", "BaseSend", "Connector", "HttpUtils", "ISFSReceiveData", "ISFSSendData", "eErrorCode", "eServiceDefine", "GameScene", "BaseFeatureButton", "BaseImageHelper", "ControlEvent", "ScrollToTop", "UIAutoLayout", "UIButtonClosePopup", "UIButtonCloseWindow", "UIButtonCommon", "UIButtonCopy", "UIButtonPopScreen", "UIDefine", "UIDraggable", "UIFeatureNavigator", "UIForegroundComponent", "UIImageLoader", "UINumericLabelHelper", "UIOnOffSwitcher", "UIPopup", "UIPopupCommon", "UIPopupManager", "UIPopupZoom", "UIPrefabHelper", "UIPrefabHelperRender", "UIPrefabHolder", "UIProgressBarHelper", "UIRadioButton", "UIRadioButtonGroup", "UISafeArea", "UIScreen", "UIScreenManager", "UISpriteHelper", "UISpriteOnOff", "UITextManager", "UIViewGroup", "UIWaitingLayout", "UIWindow", "UIWindowManager", "ClientData", "DateUtils", "EaseUtils", "PlatformUtils", "PrefabUtils", "RewardUtil", "StringUtils", "Utils", "GlobalEvent", "CustomAction", "Global", "ZaiUtils", "base64Helper", "ioe_config", "GamePlay", "PopupEndGame", "AnswerButton", "AnswerImgButton", "CheckPoint", "DienDoanVan", "Instruction", "TextDongVien", "Version", "DienTuQuestion", "QuestionComponent", "TracNghiemQuestion", "TrueFalseQuestion", "AudioContent", "ContentComponent", "ImageContent", "TextContent", "CountDown", "Profile", "LobbyScene", "ApiDefine", "AppModel", "StarGameButton", "EffectForShaderToy", "ccShader_Default_Vert", "ccShader_Default_Vert_noMVP"]);