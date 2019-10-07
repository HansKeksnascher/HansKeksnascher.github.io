(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'DungeonWorld'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'DungeonWorld'.");
    }
    root.DungeonWorld = factory(typeof DungeonWorld === 'undefined' ? {} : DungeonWorld, kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Unit = Kotlin.kotlin.Unit;
  var getCallableRef = Kotlin.getCallableRef;
  var Any = Object;
  var throwCCE = Kotlin.throwCCE;
  var RuntimeException = Kotlin.kotlin.RuntimeException;
  var Exception = Kotlin.kotlin.Exception;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Map = Kotlin.kotlin.collections.Map;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var throwUPAE = Kotlin.throwUPAE;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Random = Kotlin.kotlin.random.Random;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var Array_0 = Array;
  var Math_0 = Math;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var math = Kotlin.kotlin.math;
  var roundToInt = Kotlin.kotlin.math.roundToInt_yrwdxr$;
  var equals = Kotlin.equals;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var numberToInt = Kotlin.numberToInt;
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var toBoxedChar = Kotlin.toBoxedChar;
  var unboxChar = Kotlin.unboxChar;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var toChar = Kotlin.toChar;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var max = Kotlin.kotlin.collections.max_lvsncp$;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_287e2$;
  var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var reversed = Kotlin.kotlin.collections.reversed_7wnvza$;
  var toTypedArray = Kotlin.kotlin.collections.toTypedArray_rjqryz$;
  FrameDemo.prototype = Object.create(Game.prototype);
  FrameDemo.prototype.constructor = FrameDemo;
  ShapeDemo.prototype = Object.create(Game.prototype);
  ShapeDemo.prototype.constructor = ShapeDemo;
  SlotGame.prototype = Object.create(Game.prototype);
  SlotGame.prototype.constructor = SlotGame;
  SpriteDemo.prototype = Object.create(Game.prototype);
  SpriteDemo.prototype.constructor = SpriteDemo;
  AutoBatch$Type.prototype = Object.create(Enum.prototype);
  AutoBatch$Type.prototype.constructor = AutoBatch$Type;
  ShapeBatchImpl.prototype = Object.create(BatchImpl.prototype);
  ShapeBatchImpl.prototype.constructor = ShapeBatchImpl;
  SpriteBatchImpl.prototype = Object.create(BatchImpl.prototype);
  SpriteBatchImpl.prototype.constructor = SpriteBatchImpl;
  ShapeMesh.prototype = Object.create(Mesh.prototype);
  ShapeMesh.prototype.constructor = ShapeMesh;
  SpriteMesh.prototype = Object.create(Mesh.prototype);
  SpriteMesh.prototype.constructor = SpriteMesh;
  Key.prototype = Object.create(Enum.prototype);
  Key.prototype.constructor = Key;
  MouseButton.prototype = Object.create(Enum.prototype);
  MouseButton.prototype.constructor = MouseButton;
  KeyUpdate$Type.prototype = Object.create(KeyUpdate.prototype);
  KeyUpdate$Type.prototype.constructor = KeyUpdate$Type;
  KeyUpdate$Press.prototype = Object.create(KeyUpdate.prototype);
  KeyUpdate$Press.prototype.constructor = KeyUpdate$Press;
  KeyUpdate$Release.prototype = Object.create(KeyUpdate.prototype);
  KeyUpdate$Release.prototype.constructor = KeyUpdate$Release;
  MouseUpdate$Move.prototype = Object.create(MouseUpdate.prototype);
  MouseUpdate$Move.prototype.constructor = MouseUpdate$Move;
  MouseUpdate$Press.prototype = Object.create(MouseUpdate.prototype);
  MouseUpdate$Press.prototype.constructor = MouseUpdate$Press;
  MouseUpdate$Release.prototype = Object.create(MouseUpdate.prototype);
  MouseUpdate$Release.prototype.constructor = MouseUpdate$Release;
  Matrix4.prototype = Object.create(MatrixBase.prototype);
  Matrix4.prototype.constructor = Matrix4;
  Container.prototype = Object.create(Element.prototype);
  Container.prototype.constructor = Container;
  AbsoluteContainer.prototype = Object.create(Container.prototype);
  AbsoluteContainer.prototype.constructor = AbsoluteContainer;
  VerticalContainer.prototype = Object.create(Container.prototype);
  VerticalContainer.prototype.constructor = VerticalContainer;
  Widget.prototype = Object.create(Element.prototype);
  Widget.prototype.constructor = Widget;
  Button.prototype = Object.create(Widget.prototype);
  Button.prototype.constructor = Button;
  Checkbox.prototype = Object.create(Widget.prototype);
  Checkbox.prototype.constructor = Checkbox;
  Dropdown$Child.prototype = Object.create(Widget.prototype);
  Dropdown$Child.prototype.constructor = Dropdown$Child;
  Dropdown.prototype = Object.create(Widget.prototype);
  Dropdown.prototype.constructor = Dropdown;
  Label.prototype = Object.create(Widget.prototype);
  Label.prototype.constructor = Label;
  Radio.prototype = Object.create(Widget.prototype);
  Radio.prototype.constructor = Radio;
  Slider.prototype = Object.create(Widget.prototype);
  Slider.prototype.constructor = Slider;
  Tooltip.prototype = Object.create(Widget.prototype);
  Tooltip.prototype.constructor = Tooltip;
  function Assets() {
    this.loader_0 = new AssetLoader();
    this.assetMap_0 = HashMap_init();
    this.expected_0 = 0;
    this.nextCallback_0 = null;
  }
  Assets.prototype.loadImage_puj7f4$ = function (key, location) {
    return this.load_0(key, location, getCallableRef('loadImage', function ($receiver, location, callback) {
      return $receiver.loadImage_3o09ro$(location, callback), Unit;
    }.bind(null, this.loader_0)));
  };
  Assets.prototype.loadText_puj7f4$ = function (key, location) {
    return this.load_0(key, location, getCallableRef('loadText', function ($receiver, location, callback) {
      return $receiver.loadText_hyc7mn$(location, callback), Unit;
    }.bind(null, this.loader_0)));
  };
  Assets.prototype.get_3zqiyt$ = function (key) {
    var tmp$;
    var $receiver = this.assetMap_0;
    var tmp$_0;
    if (!(Kotlin.isType(tmp$_0 = $receiver, Map) ? tmp$_0 : throwCCE()).containsKey_11rb$(key)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }
    return Kotlin.isType(tmp$ = this.assetMap_0.get_11rb$(key), Any) ? tmp$ : throwCCE();
  };
  Assets.prototype.createTexture_61zpoe$ = function (key) {
    return new Texture(this.get_3zqiyt$(key));
  };
  Assets.prototype.awaitPreload_o14v8n$ = function (callback) {
    this.nextCallback_0 = callback;
    this.tryCallback_0();
  };
  function Assets$load$lambda(this$Assets, closure$key, closure$loadable) {
    return function (it) {
      var $receiver = this$Assets.assetMap_0;
      var key = closure$key;
      $receiver.put_xwzc9p$(key, it);
      closure$loadable.holder = it;
      this$Assets.tryCallback_0();
      return Unit;
    };
  }
  Assets.prototype.load_0 = function (key, location, loaderFunc) {
    this.expected_0 = this.expected_0 + 1 | 0;
    var loadable = new Loadable();
    try {
      loaderFunc(location, Assets$load$lambda(this, key, loadable));
    }
     catch (e) {
      if (Kotlin.isType(e, Exception)) {
        throw new RuntimeException('Error while loading asset ' + location, e);
      }
       else
        throw e;
    }
    return loadable;
  };
  Assets.prototype.tryCallback_0 = function () {
    var tmp$;
    if (this.assetMap_0.size >= this.expected_0) {
      (tmp$ = this.nextCallback_0) != null ? tmp$() : null;
    }
  };
  Assets.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Assets',
    interfaces: []
  };
  function Game() {
    Game$Companion_getInstance();
    this.screen = new Screen(this);
    this.assets = new Assets();
    this.inputQueue = new InputQueue(this);
    this.mouse = new Mouse();
    this.keyboard = new Keyboard();
    this.running = true;
    this.tickRate = 60;
    this.frameClear = true;
    this.graphics_ja9lhx$_0 = this.graphics_ja9lhx$_0;
    this.delta_k806v8$_0 = 0.0;
  }
  Object.defineProperty(Game.prototype, 'graphics', {
    get: function () {
      if (this.graphics_ja9lhx$_0 == null)
        return throwUPAE('graphics');
      return this.graphics_ja9lhx$_0;
    },
    set: function (graphics) {
      this.graphics_ja9lhx$_0 = graphics;
    }
  });
  function Game$run$lambda(this$Game) {
    return function () {
      this$Game.start_cw9zxq$_0();
      if (this$Game.screen.loop_s2x38j$(getCallableRef('step', function ($receiver, elapsed) {
        return $receiver.step_p3roja$_0(elapsed);
      }.bind(null, this$Game)))) {
        this$Game.stop_6ghrwe$_0();
      }
      return Unit;
    };
  }
  Game.prototype.run_kand9s$ = function (args) {
    if (args === void 0) {
      args = [];
    }
    this.init_6avvow$_0();
    this.assets.awaitPreload_o14v8n$(Game$run$lambda(this));
  };
  Game.prototype.onInit = function () {
  };
  Game.prototype.onStart = function () {
  };
  Game.prototype.onTick_6taknv$ = function (slow) {
  };
  Game.prototype.onDraw_jpp8rp$ = function (graphics, delta) {
  };
  Game.prototype.onStop = function () {
  };
  Game.prototype.init_6avvow$_0 = function () {
    Game$Companion_getInstance().INSTANCE = this;
    this.assets.loadText_puj7f4$('shaderShapeFrag', 'internal/shader/shape_frag.glsl');
    this.assets.loadText_puj7f4$('shaderShapeVert', 'internal/shader/shape_vert.glsl');
    this.assets.loadText_puj7f4$('shaderSpriteFrag', 'internal/shader/sprite_frag.glsl');
    this.assets.loadText_puj7f4$('shaderSpriteVert', 'internal/shader/sprite_vert.glsl');
    this.assets.loadText_puj7f4$('infoOpenSans', 'internal/font/open_sans.fnt');
    this.assets.loadText_puj7f4$('infoSquarewave', 'internal/font/squarewave.fnt');
    this.assets.loadImage_puj7f4$('spriteOpenSans', 'internal/font/open_sans.png');
    this.assets.loadImage_puj7f4$('spriteSquarewave', 'internal/font/squarewave.png');
    this.assets.loadImage_puj7f4$('spriteDebug', 'internal/sprite/debug.png');
    this.onInit();
  };
  Game.prototype.start_cw9zxq$_0 = function () {
    Graphics$Companion_getInstance().setup_kicwpe$(this.screen);
    this.graphics = new Graphics(this.screen);
    this.onStart();
    this.mouse.attachListener_g5nvwe$(this);
    this.keyboard.attachListener_g5nvwe$(this);
  };
  Game.prototype.step_p3roja$_0 = function (elapsed) {
    this.inputQueue.process_8be2vx$();
    this.mouse.refresh_8be2vx$();
    this.delta_k806v8$_0 += this.tickRate * elapsed;
    while (this.delta_k806v8$_0 >= 1.0) {
      var slow = this.delta_k806v8$_0 >= 2.0;
      this.onTick_6taknv$(slow);
      this.delta_k806v8$_0 -= 1.0;
    }
    if (this.frameClear) {
      this.graphics.clear();
    }
    this.onDraw_jpp8rp$(this.graphics, this.delta_k806v8$_0);
    return this.running;
  };
  Game.prototype.stop_6ghrwe$_0 = function () {
    this.keyboard.detachListener_g5nvwe$(this);
    this.mouse.detachListener_g5nvwe$(this);
    this.onStop();
    this.graphics.dispose();
    this.screen.dispose();
  };
  function Game$Companion() {
    Game$Companion_instance = this;
    this.INSTANCE_61l4cp$_0 = this.INSTANCE_61l4cp$_0;
  }
  Object.defineProperty(Game$Companion.prototype, 'INSTANCE', {
    get: function () {
      if (this.INSTANCE_61l4cp$_0 == null)
        return throwUPAE('INSTANCE');
      return this.INSTANCE_61l4cp$_0;
    },
    set: function (INSTANCE) {
      this.INSTANCE_61l4cp$_0 = INSTANCE;
    }
  });
  Game$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Game$Companion_instance = null;
  function Game$Companion_getInstance() {
    if (Game$Companion_instance === null) {
      new Game$Companion();
    }
    return Game$Companion_instance;
  }
  Game.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Game',
    interfaces: [MouseListener, KeyListener]
  };
  function FrameDemo() {
    Game.call(this);
    this.frame_8qolyd$_0 = this.frame_8qolyd$_0;
    this.slider_buy8tx$_0 = this.slider_buy8tx$_0;
    this.label_65qwgc$_0 = this.label_65qwgc$_0;
  }
  Object.defineProperty(FrameDemo.prototype, 'frame_0', {
    get: function () {
      if (this.frame_8qolyd$_0 == null)
        return throwUPAE('frame');
      return this.frame_8qolyd$_0;
    },
    set: function (frame) {
      this.frame_8qolyd$_0 = frame;
    }
  });
  Object.defineProperty(FrameDemo.prototype, 'slider_0', {
    get: function () {
      if (this.slider_buy8tx$_0 == null)
        return throwUPAE('slider');
      return this.slider_buy8tx$_0;
    },
    set: function (slider) {
      this.slider_buy8tx$_0 = slider;
    }
  });
  Object.defineProperty(FrameDemo.prototype, 'label_0', {
    get: function () {
      if (this.label_65qwgc$_0 == null)
        return throwUPAE('label');
      return this.label_65qwgc$_0;
    },
    set: function (label) {
      this.label_65qwgc$_0 = label;
    }
  });
  FrameDemo.prototype.onStart = function () {
    var selection = new Radio$Selection();
    var container = new VerticalContainer();
    this.frame_0 = new Frame(container, 384.0, 512.0);
    container.add_8ip3dt$(new Label('Test'));
    container.add_8ip3dt$(new Button('D\xF6ner bestellen')).tooltip = 'Heute besonders saftig';
    container.add_8ip3dt$(new Checkbox('Mit Extraso\xDFe'));
    container.add_8ip3dt$(new Radio('D\xF6ner', selection.item_za3lpa$(0))).tooltip = 'Der Klassiker';
    container.add_8ip3dt$(new Radio('D\xFCr\xFCm', selection.item_za3lpa$(1))).tooltip = 'Eine gute Alternative';
    container.add_8ip3dt$(new Radio('XXL-D\xF6ner', selection.item_za3lpa$(2))).tooltip = 'F\xFCr den kleinen Hunger';
    container.add_8ip3dt$(new Dropdown(listOf(['CEO', 'Begehrtester Doktorant', '15 Jahre Berufserfahrung']), 2));
    this.slider_0 = container.add_8ip3dt$(new Slider());
    this.label_0 = container.add_8ip3dt$(new Label('Slider value: 0'));
    this.frame_0.xPos = 100.0;
    this.frame_0.yPos = 50.0;
    this.frame_0.enable_msja8c$(this);
  };
  FrameDemo.prototype.onTick_6taknv$ = function (slow) {
    this.frame_0.tick_6taknv$(slow);
    this.label_0.value = 'Slider value: ' + this.slider_0.value;
  };
  FrameDemo.prototype.onDraw_jpp8rp$ = function (graphics, delta) {
    this.frame_0.draw_jpp8rp$(graphics, delta);
  };
  FrameDemo.prototype.onStop = function () {
    this.frame_0.disable_msja8c$(this);
  };
  FrameDemo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FrameDemo',
    interfaces: [Game]
  };
  function ShapeDemo() {
    Game.call(this);
  }
  function ShapeDemo$onDraw$lambda($receiver) {
    $receiver.color = Color$Companion_getInstance().YELLOW;
    $receiver.drawTriangle_w8lrqs$(30.0, 75.0, 58.0, 20.0, 86.0, 75.0);
    $receiver.color = Color$Companion_getInstance().WHITE;
    $receiver.fillRectangle_7b5o5w$(100.0, 100.0, 50.0, 50.0);
    $receiver.color = Color$Companion_getInstance().RED;
    $receiver.lineWidth = 1.0;
    $receiver.drawRectangle_7b5o5w$(100.0, 100.0, 50.0, 50.0);
    $receiver.fillArc_w8lrqs$(200.0, 200.0, 50.0, 50.0, 0.0, deg2rad(90.0));
    return Unit;
  }
  ShapeDemo.prototype.onDraw_jpp8rp$ = function (graphics, delta) {
    graphics.withAuto_yl25su$(ShapeDemo$onDraw$lambda);
  };
  ShapeDemo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ShapeDemo',
    interfaces: [Game]
  };
  function Machine() {
    var array = Array_0(5);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new Machine$Reel(this);
    }
    this.reels_0 = array;
    this.lines_0 = listOf([new Machine$Line(0, 0, 0, 0, 0), new Machine$Line(1, 1, 1, 1, 1), new Machine$Line(2, 2, 2, 2, 2), new Machine$Line(0, 1, 2, 1, 0), new Machine$Line(2, 1, 0, 1, 2), new Machine$Line(1, 0, 0, 0, 1), new Machine$Line(1, 2, 2, 2, 1), new Machine$Line(0, 0, 1, 2, 2), new Machine$Line(2, 2, 1, 0, 0), new Machine$Line(1, 2, 1, 0, 1), new Machine$Line(1, 0, 1, 2, 0), new Machine$Line(0, 1, 1, 1, 0), new Machine$Line(2, 1, 1, 1, 0), new Machine$Line(0, 1, 0, 1, 0), new Machine$Line(2, 1, 2, 1, 2)]);
    this.locking_0 = false;
    this.elapsed_0 = 0;
    this.checkWin_0 = false;
    this.winLines_0 = ArrayList_init();
    this.winLine_0 = null;
    this.running = false;
    this.money = 1000;
    this.win = 0;
  }
  Machine.prototype.spin = function () {
    if (!this.running && this.money >= 10) {
      this.running = true;
      this.money = this.money - 10 | 0;
      this.winLines_0.clear();
      this.winLine_0 = null;
      var $receiver = this.reels_0;
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        element.spin();
      }
      this.elapsed_0 = 0;
      this.locking_0 = false;
      this.checkWin_0 = true;
    }
  };
  Machine.prototype.tick_6taknv$ = function (slow) {
    var tmp$, tmp$_0;
    this.elapsed_0 = this.elapsed_0 + 1 | 0;
    if (this.elapsed_0 >= 60 && !this.locking_0) {
      this.locking_0 = true;
      this.reels_0[0].lock();
    }
    tmp$ = this.reels_0;
    for (var i = 0; i !== tmp$.length; ++i) {
      if (i > 0 && (!this.reels_0[i].locking || !this.reels_0[i].locked) && this.reels_0[i - 1 | 0].locked) {
        this.reels_0[i].lock();
      }
      this.reels_0[i].tick();
    }
    var $receiver = this.reels_0;
    var tmp$_1;
    var count = 0;
    for (tmp$_1 = 0; tmp$_1 !== $receiver.length; ++tmp$_1) {
      var element = $receiver[tmp$_1];
      if (element.locked)
        count = count + 1 | 0;
    }
    if (count === this.reels_0.length && this.checkWin_0) {
      var spinWin = 0;
      tmp$_0 = this.lines_0.iterator();
      while (tmp$_0.hasNext()) {
        var line = tmp$_0.next();
        var amount = line.check_a3bgul$(this.reels_0);
        if (amount > 0) {
          this.winLines_0.add_11rb$(line);
          spinWin = spinWin + amount | 0;
        }
      }
      spinWin = spinWin * 10 | 0;
      this.money = this.money + spinWin | 0;
      this.win = spinWin;
      this.checkWin_0 = false;
      this.running = false;
      this.elapsed_0 = 0;
    }
    var tmp$_2 = this.elapsed_0 > 60;
    if (tmp$_2) {
      tmp$_2 = !this.winLines_0.isEmpty();
    }
    if (tmp$_2) {
      this.winLine_0 = pop(this.winLines_0);
      this.elapsed_0 = 0;
    }
  };
  Machine.prototype.draw_jpp8rp$ = function (graphics, delta) {
    var tmp$;
    graphics.save();
    graphics.translate_dleff0$(96.0, 96.0);
    var batch = graphics.auto();
    tmp$ = this.reels_0;
    for (var idx = 0; idx !== tmp$.length; ++idx) {
      var reel = tmp$[idx];
      reel.draw_h1pprj$(batch, delta, 96.0 * idx);
    }
    if (this.winLine_0 != null) {
      ensureNotNull(this.winLine_0).draw_trktcf$(batch);
    }
    batch.end();
    graphics.restore();
  };
  function Machine$Symbol() {
    this.idx = 0;
    this.shuffle();
  }
  Machine$Symbol.prototype.shuffle = function () {
    this.idx = Random.Default.nextInt_za3lpa$(8);
  };
  Object.defineProperty(Machine$Symbol.prototype, 'texture', {
    get: function () {
      var tmp$;
      switch (this.idx) {
        case 0:
          tmp$ = Symbols_getInstance().kebab;
          break;
        case 1:
          tmp$ = Symbols_getInstance().esp;
          break;
        case 2:
          tmp$ = Symbols_getInstance().mouse;
          break;
        case 3:
          tmp$ = Symbols_getInstance().audio;
          break;
        case 4:
          tmp$ = Symbols_getInstance().bag;
          break;
        case 5:
          tmp$ = Symbols_getInstance().bachelor;
          break;
        case 6:
          tmp$ = Symbols_getInstance().week;
          break;
        case 7:
          tmp$ = Symbols_getInstance().laptop;
          break;
        default:throw IllegalStateException_init('Invalid index ' + this.idx);
      }
      return tmp$;
    }
  });
  Machine$Symbol.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Symbol',
    interfaces: []
  };
  function Machine$Reel($outer) {
    this.$outer = $outer;
    var array = new Float32Array(4);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = (i - 1 | 0) * 96.0;
    }
    this.offsets_0 = array;
    var array_0 = new Float32Array(4);
    var tmp$_0;
    tmp$_0 = array_0.length - 1 | 0;
    for (var i_0 = 0; i_0 <= tmp$_0; i_0++) {
      array_0[i_0] = (i_0 - 1 | 0) * 96.0;
    }
    this.lastOffsets_0 = array_0;
    var array_1 = Array_0(4);
    var tmp$_1;
    tmp$_1 = array_1.length - 1 | 0;
    for (var i_1 = 0; i_1 <= tmp$_1; i_1++) {
      array_1[i_1] = new Machine$Symbol();
    }
    this.symbols_0 = array_1;
    this.spinning_0 = false;
    this.velocity_0 = 0.0;
    this.locking = false;
    this.locked = false;
  }
  Machine$Reel.prototype.getSymbol_za3lpa$ = function (pos) {
    if (pos === void 0)
      pos = 0;
    var tmp$;
    tmp$ = this.offsets_0;
    for (var i = 0; i !== tmp$.length; ++i) {
      var x = pos * 96.0 - this.offsets_0[i];
      if (Math_0.abs(x) <= 1.0) {
        return this.symbols_0[i].idx;
      }
    }
    return -1;
  };
  Machine$Reel.prototype.spin = function () {
    if (!this.spinning_0) {
      this.velocity_0 = 1.0;
      this.spinning_0 = true;
      this.locking = false;
      this.locked = false;
    }
  };
  Machine$Reel.prototype.lock = function () {
    this.spinning_0 = false;
    this.locked = false;
    this.locking = true;
  };
  Machine$Reel.prototype.tick = function () {
    var tmp$;
    if (this.spinning_0) {
      var a = 1.25 * this.velocity_0;
      this.velocity_0 = Math_0.min(a, 25.0);
    }
    if (this.locking && this.velocity_0 > 0.0) {
      var x = this.offsets_0[0] / 96.0;
      var missing = Math_0.abs(x);
      while (missing > 1.0) {
        missing -= 1.0;
      }
      var a_0 = 0.5 * this.velocity_0;
      var b = 15.0 * missing;
      this.velocity_0 = Math_0.max(a_0, b);
    }
    var x_0 = this.velocity_0;
    if (Math_0.abs(x_0) < 0.1) {
      this.velocity_0 = 0.0;
      this.locked = true;
      this.locking = false;
    }
    tmp$ = this.offsets_0;
    for (var i = 0; i !== tmp$.length; ++i) {
      this.lastOffsets_0[i] = this.offsets_0[i];
      this.offsets_0[i] = this.offsets_0[i] + this.velocity_0;
      if (this.offsets_0[i] >= 288.0) {
        this.symbols_0[i].shuffle();
        this.offsets_0[i] = -96.0 + (this.offsets_0[i] - 288.0);
        this.lastOffsets_0[i] = this.offsets_0[i];
      }
    }
  };
  Machine$Reel.prototype.draw_h1pprj$ = function (batch, alpha, position) {
    var tmp$;
    tmp$ = this.symbols_0;
    for (var idx = 0; idx !== tmp$.length; ++idx) {
      batch.color = Color$Companion_getInstance().WHITE;
      batch.drawTexture_5ir0qv$(this.symbols_0[idx].texture, position, interpolate(this.offsets_0[idx], this.lastOffsets_0[idx], alpha));
    }
  };
  Machine$Reel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Reel',
    interfaces: []
  };
  function Machine$Line(p0, p1, p2, p3, p4) {
    this.p0 = p0;
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;
    this.p4 = p4;
    this.flag0 = true;
    this.flag1 = true;
  }
  Machine$Line.prototype.check_a3bgul$ = function (reel) {
    this.flag0 = false;
    this.flag1 = false;
    var s0 = reel[0].getSymbol_za3lpa$(this.p0);
    var s1 = reel[1].getSymbol_za3lpa$(this.p1);
    var s2 = reel[2].getSymbol_za3lpa$(this.p2);
    var s3 = reel[3].getSymbol_za3lpa$(this.p3);
    var s4 = reel[4].getSymbol_za3lpa$(this.p4);
    if (s0 === -1 || s1 === -1 || s2 === -1 || s3 === -1 || s4 === -1) {
      return 0;
    }
    if (s0 !== s1 || s1 !== s2) {
      return 0;
    }
    if (s2 !== s3) {
      return 10;
    }
    if (s3 !== s4) {
      this.flag0 = true;
      return 100;
    }
    this.flag1 = true;
    return 1000;
  };
  Machine$Line.prototype.draw_trktcf$ = function (batch) {
    batch.lineWidth = 3.0;
    batch.color = Color$Companion_getInstance().FUCHSIA;
    batch.drawRectangle_7b5o5w$(0.0, 96.0 * this.p0, 96.0, 96.0);
    batch.drawRectangle_7b5o5w$(96.0, 96.0 * this.p1, 96.0, 96.0);
    batch.drawRectangle_7b5o5w$(192.0, 96.0 * this.p2, 96.0, 96.0);
    if (this.flag0)
      batch.drawRectangle_7b5o5w$(288.0, 96.0 * this.p3, 96.0, 96.0);
    if (this.flag1)
      batch.drawRectangle_7b5o5w$(384.0, 96.0 * this.p4, 96.0, 96.0);
    batch.lineWidth = 1.0;
  };
  Machine$Line.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Line',
    interfaces: []
  };
  Machine.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Machine',
    interfaces: []
  };
  function SlotGame() {
    Game.call(this);
    this.maskTexture_wbrxsn$_0 = this.maskTexture_wbrxsn$_0;
    this.symbolTexture_icket$_0 = this.symbolTexture_icket$_0;
    this.backgroundTexture_w3q8lx$_0 = this.backgroundTexture_w3q8lx$_0;
    this.machine_z2o701$_0 = this.machine_z2o701$_0;
    this.overlay_o4sdiw$_0 = this.overlay_o4sdiw$_0;
    this.moneyLabel_2ld2yw$_0 = this.moneyLabel_2ld2yw$_0;
    this.winLabel_ujeg2s$_0 = this.winLabel_ujeg2s$_0;
    this.playButton_tnenme$_0 = this.playButton_tnenme$_0;
  }
  Object.defineProperty(SlotGame.prototype, 'maskTexture_0', {
    get: function () {
      if (this.maskTexture_wbrxsn$_0 == null)
        return throwUPAE('maskTexture');
      return this.maskTexture_wbrxsn$_0;
    },
    set: function (maskTexture) {
      this.maskTexture_wbrxsn$_0 = maskTexture;
    }
  });
  Object.defineProperty(SlotGame.prototype, 'symbolTexture_0', {
    get: function () {
      if (this.symbolTexture_icket$_0 == null)
        return throwUPAE('symbolTexture');
      return this.symbolTexture_icket$_0;
    },
    set: function (symbolTexture) {
      this.symbolTexture_icket$_0 = symbolTexture;
    }
  });
  Object.defineProperty(SlotGame.prototype, 'backgroundTexture_0', {
    get: function () {
      if (this.backgroundTexture_w3q8lx$_0 == null)
        return throwUPAE('backgroundTexture');
      return this.backgroundTexture_w3q8lx$_0;
    },
    set: function (backgroundTexture) {
      this.backgroundTexture_w3q8lx$_0 = backgroundTexture;
    }
  });
  Object.defineProperty(SlotGame.prototype, 'machine_0', {
    get: function () {
      if (this.machine_z2o701$_0 == null)
        return throwUPAE('machine');
      return this.machine_z2o701$_0;
    },
    set: function (machine) {
      this.machine_z2o701$_0 = machine;
    }
  });
  Object.defineProperty(SlotGame.prototype, 'overlay_0', {
    get: function () {
      if (this.overlay_o4sdiw$_0 == null)
        return throwUPAE('overlay');
      return this.overlay_o4sdiw$_0;
    },
    set: function (overlay) {
      this.overlay_o4sdiw$_0 = overlay;
    }
  });
  Object.defineProperty(SlotGame.prototype, 'moneyLabel_0', {
    get: function () {
      if (this.moneyLabel_2ld2yw$_0 == null)
        return throwUPAE('moneyLabel');
      return this.moneyLabel_2ld2yw$_0;
    },
    set: function (moneyLabel) {
      this.moneyLabel_2ld2yw$_0 = moneyLabel;
    }
  });
  Object.defineProperty(SlotGame.prototype, 'winLabel_0', {
    get: function () {
      if (this.winLabel_ujeg2s$_0 == null)
        return throwUPAE('winLabel');
      return this.winLabel_ujeg2s$_0;
    },
    set: function (winLabel) {
      this.winLabel_ujeg2s$_0 = winLabel;
    }
  });
  Object.defineProperty(SlotGame.prototype, 'playButton_0', {
    get: function () {
      if (this.playButton_tnenme$_0 == null)
        return throwUPAE('playButton');
      return this.playButton_tnenme$_0;
    },
    set: function (playButton) {
      this.playButton_tnenme$_0 = playButton;
    }
  });
  SlotGame.prototype.onInit = function () {
    this.assets.loadImage_puj7f4$('spriteMask', 'demo_slot/mask.png');
    this.assets.loadImage_puj7f4$('spriteSymbols', 'demo_slot/symbols.png');
    this.assets.loadImage_puj7f4$('spriteBackground', 'demo_slot/background.png');
    this.screen.title = 'Laborabenteuer';
    this.screen.width = 768;
    this.screen.height = 512;
  };
  SlotGame.prototype.onStart = function () {
    this.maskTexture_0 = this.assets.createTexture_61zpoe$('spriteMask');
    this.symbolTexture_0 = this.assets.createTexture_61zpoe$('spriteSymbols');
    this.backgroundTexture_0 = this.assets.createTexture_61zpoe$('spriteBackground');
    Symbols_getInstance().kebab = this.symbolTexture_0.create_7b5o5w$(0.0, 0.0, 96.0, 96.0);
    Symbols_getInstance().esp = this.symbolTexture_0.create_7b5o5w$(96.0, 0.0, 96.0, 96.0);
    Symbols_getInstance().mouse = this.symbolTexture_0.create_7b5o5w$(192.0, 0.0, 96.0, 96.0);
    Symbols_getInstance().audio = this.symbolTexture_0.create_7b5o5w$(0.0, 96.0, 96.0, 96.0);
    Symbols_getInstance().bag = this.symbolTexture_0.create_7b5o5w$(96.0, 96.0, 96.0, 96.0);
    Symbols_getInstance().bachelor = this.symbolTexture_0.create_7b5o5w$(192.0, 96.0, 96.0, 96.0);
    Symbols_getInstance().week = this.symbolTexture_0.create_7b5o5w$(0.0, 192.0, 96.0, 96.0);
    Symbols_getInstance().laptop = this.symbolTexture_0.create_7b5o5w$(96.0, 192.0, 96.0, 96.0);
    this.machine_0 = new Machine();
    var container = new AbsoluteContainer();
    this.overlay_0 = new Frame(container, this.screen.width, this.screen.height, Style$Companion_getInstance().OVERLAY);
    this.moneyLabel_0 = container.add_6p229r$(new Label('Geld: ' + this.machine_0.money + '$'), 140.0, 408.0);
    this.winLabel_0 = container.add_6p229r$(new Label('Letzter Gewinn: ' + this.machine_0.win + '$'), 140.0, 388.0);
    this.playButton_0 = container.add_6p229r$(new Button('Arbeiten', getCallableRef('spin', function ($receiver) {
      return $receiver.spin(), Unit;
    }.bind(null, this.machine_0))), 520.0, 392.0);
    this.playButton_0.tooltip = 'Hier klicken';
    this.overlay_0.enable_msja8c$(this);
  };
  SlotGame.prototype.onTick_6taknv$ = function (slow) {
    this.machine_0.tick_6taknv$(slow);
    this.overlay_0.tick_6taknv$(slow);
    this.moneyLabel_0.value = 'Geld: ' + this.machine_0.money + '$';
    this.winLabel_0.value = this.machine_0.running ? 'Die Maus gl\xFCht!' : 'Letzter Gewinn: ' + this.machine_0.win + '$';
  };
  function SlotGame$onDraw$lambda(this$SlotGame) {
    return function ($receiver) {
      $receiver.drawTexture_5ir0qv$(this$SlotGame.backgroundTexture_0, 0.0, 0.0);
      return Unit;
    };
  }
  function SlotGame$onDraw$lambda_0(this$SlotGame) {
    return function ($receiver) {
      $receiver.drawTexture_5ir0qv$(this$SlotGame.maskTexture_0, 0.0, 0.0);
      return Unit;
    };
  }
  SlotGame.prototype.onDraw_jpp8rp$ = function (graphics, delta) {
    graphics.withAuto_yl25su$(SlotGame$onDraw$lambda(this));
    graphics.save();
    graphics.translate_dleff0$(40.0, 0.0);
    this.machine_0.draw_jpp8rp$(graphics, delta);
    graphics.withAuto_yl25su$(SlotGame$onDraw$lambda_0(this));
    graphics.restore();
    this.overlay_0.draw_jpp8rp$(graphics, delta);
  };
  SlotGame.prototype.onStop = function () {
    this.overlay_0.disable_msja8c$(this);
  };
  SlotGame.prototype.keyPress_ysv3wg$ = function (key) {
    if (key === Key$SPACE_getInstance()) {
      this.machine_0.spin();
    }
    return false;
  };
  SlotGame.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SlotGame',
    interfaces: [Game]
  };
  function Symbols() {
    Symbols_instance = this;
    this.kebab_o2cr8k$_0 = this.kebab_o2cr8k$_0;
    this.esp_6dn0yz$_0 = this.esp_6dn0yz$_0;
    this.mouse_p6ag4o$_0 = this.mouse_p6ag4o$_0;
    this.audio_jkqp07$_0 = this.audio_jkqp07$_0;
    this.bag_6dkqg5$_0 = this.bag_6dkqg5$_0;
    this.bachelor_nxwfpj$_0 = this.bachelor_nxwfpj$_0;
    this.week_f2v5vx$_0 = this.week_f2v5vx$_0;
    this.laptop_mazsoj$_0 = this.laptop_mazsoj$_0;
  }
  Object.defineProperty(Symbols.prototype, 'kebab', {
    get: function () {
      if (this.kebab_o2cr8k$_0 == null)
        return throwUPAE('kebab');
      return this.kebab_o2cr8k$_0;
    },
    set: function (kebab) {
      this.kebab_o2cr8k$_0 = kebab;
    }
  });
  Object.defineProperty(Symbols.prototype, 'esp', {
    get: function () {
      if (this.esp_6dn0yz$_0 == null)
        return throwUPAE('esp');
      return this.esp_6dn0yz$_0;
    },
    set: function (esp) {
      this.esp_6dn0yz$_0 = esp;
    }
  });
  Object.defineProperty(Symbols.prototype, 'mouse', {
    get: function () {
      if (this.mouse_p6ag4o$_0 == null)
        return throwUPAE('mouse');
      return this.mouse_p6ag4o$_0;
    },
    set: function (mouse) {
      this.mouse_p6ag4o$_0 = mouse;
    }
  });
  Object.defineProperty(Symbols.prototype, 'audio', {
    get: function () {
      if (this.audio_jkqp07$_0 == null)
        return throwUPAE('audio');
      return this.audio_jkqp07$_0;
    },
    set: function (audio) {
      this.audio_jkqp07$_0 = audio;
    }
  });
  Object.defineProperty(Symbols.prototype, 'bag', {
    get: function () {
      if (this.bag_6dkqg5$_0 == null)
        return throwUPAE('bag');
      return this.bag_6dkqg5$_0;
    },
    set: function (bag) {
      this.bag_6dkqg5$_0 = bag;
    }
  });
  Object.defineProperty(Symbols.prototype, 'bachelor', {
    get: function () {
      if (this.bachelor_nxwfpj$_0 == null)
        return throwUPAE('bachelor');
      return this.bachelor_nxwfpj$_0;
    },
    set: function (bachelor) {
      this.bachelor_nxwfpj$_0 = bachelor;
    }
  });
  Object.defineProperty(Symbols.prototype, 'week', {
    get: function () {
      if (this.week_f2v5vx$_0 == null)
        return throwUPAE('week');
      return this.week_f2v5vx$_0;
    },
    set: function (week) {
      this.week_f2v5vx$_0 = week;
    }
  });
  Object.defineProperty(Symbols.prototype, 'laptop', {
    get: function () {
      if (this.laptop_mazsoj$_0 == null)
        return throwUPAE('laptop');
      return this.laptop_mazsoj$_0;
    },
    set: function (laptop) {
      this.laptop_mazsoj$_0 = laptop;
    }
  });
  Symbols.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Symbols',
    interfaces: []
  };
  var Symbols_instance = null;
  function Symbols_getInstance() {
    if (Symbols_instance === null) {
      new Symbols();
    }
    return Symbols_instance;
  }
  function SpriteDemo() {
    Game.call(this);
    this.debugTexture_s1vofw$_0 = this.debugTexture_s1vofw$_0;
  }
  Object.defineProperty(SpriteDemo.prototype, 'debugTexture_0', {
    get: function () {
      if (this.debugTexture_s1vofw$_0 == null)
        return throwUPAE('debugTexture');
      return this.debugTexture_s1vofw$_0;
    },
    set: function (debugTexture) {
      this.debugTexture_s1vofw$_0 = debugTexture;
    }
  });
  SpriteDemo.prototype.onStart = function () {
    this.debugTexture_0 = new Texture(this.assets.get_3zqiyt$('spriteDebug'));
  };
  function SpriteDemo$onDraw$lambda($receiver) {
    $receiver.drawStringMultiline_lkl5tj$(Font$Companion_getInstance().OPEN_SANS, 'Test\nNew line here.', 0.0, 0.0);
    return Unit;
  }
  SpriteDemo.prototype.onDraw_jpp8rp$ = function (graphics, delta) {
    graphics.withSprite_9asa4o$(SpriteDemo$onDraw$lambda);
  };
  SpriteDemo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SpriteDemo',
    interfaces: [Game]
  };
  function AutoBatch(graphics) {
    this.graphics_0 = graphics;
    this.state_0 = new Batch$State();
    this.current_0 = null;
    this.currentType_0 = AutoBatch$Type$NONE_getInstance();
  }
  Object.defineProperty(AutoBatch.prototype, 'color', {
    get: function () {
      return this.state_0.color;
    },
    set: function (value) {
      this.state_0.color = value;
    }
  });
  Object.defineProperty(AutoBatch.prototype, 'lineWidth', {
    get: function () {
      return this.state_0.lineWidth;
    },
    set: function (value) {
      this.state_0.lineWidth = value;
    }
  });
  AutoBatch.prototype.syncState_auijr3$ = function (state) {
    this.color = state.color;
    this.lineWidth = state.lineWidth;
  };
  AutoBatch.prototype.reset = function () {
    throw IllegalStateException_init('Batch reset is not supported');
  };
  AutoBatch.prototype.end = function () {
    var tmp$;
    (tmp$ = this.current_0) != null ? (tmp$.end(), Unit) : null;
  };
  AutoBatch.prototype.emitShape_mqyxdn$ = function (x0, y0, x1, y1, x2, y2, color) {
    this.shape_0().emitShape_mqyxdn$(x0, y0, x1, y1, x2, y2, color);
  };
  AutoBatch.prototype.emitSprite_475kh1$ = function (x0, y0, s0, t0, x1, y1, s1, t1, x2, y2, s2, t2, color) {
    this.sprite_0().emitSprite_475kh1$(x0, y0, s0, t0, x1, y1, s1, t1, x2, y2, s2, t2, color);
  };
  AutoBatch.prototype.validateTexture_6ycval$ = function (texture) {
    this.sprite_0().validateTexture_6ycval$(texture);
  };
  AutoBatch.prototype.shape_0 = function () {
    var tmp$;
    if (this.currentType_0 === AutoBatch$Type$SHAPE_getInstance()) {
      return Kotlin.isType(tmp$ = this.current_0, ShapeBatch) ? tmp$ : throwCCE();
    }
    this.currentType_0 = AutoBatch$Type$SHAPE_getInstance();
    return this.createBatch_0(getCallableRef('shape', function ($receiver) {
      return $receiver.shape();
    }.bind(null, this.graphics_0)));
  };
  AutoBatch.prototype.sprite_0 = function () {
    var tmp$;
    if (this.currentType_0 === AutoBatch$Type$SPRITE_getInstance()) {
      return Kotlin.isType(tmp$ = this.current_0, SpriteBatch) ? tmp$ : throwCCE();
    }
    this.currentType_0 = AutoBatch$Type$SPRITE_getInstance();
    return this.createBatch_0(getCallableRef('sprite', function ($receiver) {
      return $receiver.sprite();
    }.bind(null, this.graphics_0)));
  };
  AutoBatch.prototype.createBatch_0 = function (factory) {
    var tmp$;
    (tmp$ = this.current_0) != null ? (tmp$.end(), Unit) : null;
    var batch = factory();
    batch.syncState_auijr3$(this.state_0);
    this.current_0 = batch;
    return batch;
  };
  function AutoBatch$Type(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AutoBatch$Type_initFields() {
    AutoBatch$Type_initFields = function () {
    };
    AutoBatch$Type$NONE_instance = new AutoBatch$Type('NONE', 0);
    AutoBatch$Type$SHAPE_instance = new AutoBatch$Type('SHAPE', 1);
    AutoBatch$Type$SPRITE_instance = new AutoBatch$Type('SPRITE', 2);
  }
  var AutoBatch$Type$NONE_instance;
  function AutoBatch$Type$NONE_getInstance() {
    AutoBatch$Type_initFields();
    return AutoBatch$Type$NONE_instance;
  }
  var AutoBatch$Type$SHAPE_instance;
  function AutoBatch$Type$SHAPE_getInstance() {
    AutoBatch$Type_initFields();
    return AutoBatch$Type$SHAPE_instance;
  }
  var AutoBatch$Type$SPRITE_instance;
  function AutoBatch$Type$SPRITE_getInstance() {
    AutoBatch$Type_initFields();
    return AutoBatch$Type$SPRITE_instance;
  }
  AutoBatch$Type.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Type',
    interfaces: [Enum]
  };
  function AutoBatch$Type$values() {
    return [AutoBatch$Type$NONE_getInstance(), AutoBatch$Type$SHAPE_getInstance(), AutoBatch$Type$SPRITE_getInstance()];
  }
  AutoBatch$Type.values = AutoBatch$Type$values;
  function AutoBatch$Type$valueOf(name) {
    switch (name) {
      case 'NONE':
        return AutoBatch$Type$NONE_getInstance();
      case 'SHAPE':
        return AutoBatch$Type$SHAPE_getInstance();
      case 'SPRITE':
        return AutoBatch$Type$SPRITE_getInstance();
      default:throwISE('No enum constant dw.graphics.batch.AutoBatch.Type.' + name);
    }
  }
  AutoBatch$Type.valueOf_61zpoe$ = AutoBatch$Type$valueOf;
  AutoBatch.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AutoBatch',
    interfaces: [SpriteBatch, ShapeBatch]
  };
  function Batch() {
  }
  function Batch$State() {
    this.color = Color$Companion_getInstance().WHITE;
    this.lineWidth = 1.0;
  }
  Batch$State.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'State',
    interfaces: []
  };
  Batch.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Batch',
    interfaces: []
  };
  function BatchImpl(mesh) {
    this.mesh = mesh;
    this.color_p69lw9$_0 = Color$Companion_getInstance().WHITE;
    this.gl_whparf$_0 = Graphics$Companion_getInstance().gl();
    this.vertices_18jn7z$_0 = 0;
    this.mesh.begin();
  }
  Object.defineProperty(BatchImpl.prototype, 'color', {
    get: function () {
      return this.color_p69lw9$_0;
    },
    set: function (color) {
      this.color_p69lw9$_0 = color;
    }
  });
  BatchImpl.prototype.syncState_auijr3$ = function (state) {
    this.color = state.color;
  };
  BatchImpl.prototype.reset = function () {
    this.mesh.begin();
    this.vertices_18jn7z$_0 = 0;
  };
  BatchImpl.prototype.end = function () {
    if (this.vertices_18jn7z$_0 > 0) {
      this.mesh.end();
      this.gl_whparf$_0.drawArrays_6yoam1$(GLEnums_getInstance().TRIANGLES, 0, this.vertices_18jn7z$_0);
    }
  };
  BatchImpl.prototype.vertices_za3lpa$ = function (count) {
    this.vertices_18jn7z$_0 = this.vertices_18jn7z$_0 + count | 0;
  };
  BatchImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BatchImpl',
    interfaces: [Batch]
  };
  function ShapeBatch() {
  }
  ShapeBatch.prototype.line_7b5o5w$ = function (x0, y0, x1, y1) {
    var tx = y1 - y0;
    var ty = x0 - x1;
    var x = tx * tx + ty * ty;
    var length = Math_0.sqrt(x);
    tx /= length * 2.0 / this.lineWidth;
    ty /= length * 2.0 / this.lineWidth;
    this.emitShape_mqyxdn$(x0 + tx, y0 + ty, x0 - tx, y0 - ty, x1 + tx, y1 + ty, this.color);
    this.emitShape_mqyxdn$(x1 - tx, y1 - ty, x1 + tx, y1 + ty, x0 - tx, y0 - ty, this.color);
  };
  ShapeBatch.prototype.point_dleff0$ = function (x, y) {
    this.fillRectangle_7b5o5w$(x, y, this.lineWidth, this.lineWidth);
  };
  ShapeBatch.prototype.drawArc_w8lrqs$ = function (cx, cy, w, h, start, angle) {
    var x = Math_0.max(w, h);
    var segments = roundToInt(10 * Math_0.sqrt(x));
    var theta = angle / segments;
    var c = Math_0.cos(theta);
    var s = Math_0.sin(theta);
    var x_0 = Math_0.cos(start);
    var y = Math_0.sin(start);
    for (var i = 0; i < segments; i++) {
      var x0 = w * x_0 + cx;
      var y0 = h * y + cy;
      var t = x_0;
      x_0 = c * x_0 - s * y;
      y = s * t + c * y;
      var x1 = w * x_0 + cx;
      var y1 = h * y + cy;
      this.line_7b5o5w$(x0, y0, x1, y1);
    }
  };
  ShapeBatch.prototype.drawCircle_y2kzbl$ = function (cx, cy, r) {
    this.drawArc_w8lrqs$(cx, cy, r, r, 0.0, 2.0 * math.PI);
  };
  ShapeBatch.prototype.drawEllipse_7b5o5w$ = function (cx, cy, w, h) {
    this.drawArc_w8lrqs$(cx, cy, w, h, 0.0, 2.0 * math.PI);
  };
  ShapeBatch.prototype.drawRectangle_7b5o5w$ = function (x, y, w, h) {
    this.line_7b5o5w$(x, y + this.lineWidth / 2.0, x + w, y + this.lineWidth / 2.0);
    this.line_7b5o5w$(x + this.lineWidth / 2.0, y, x + this.lineWidth / 2.0, y + h);
    this.line_7b5o5w$(x + w - this.lineWidth / 2.0, y, x + w - this.lineWidth / 2.0, y + h);
    this.line_7b5o5w$(x + w, y + h - this.lineWidth / 2, x, y + h - this.lineWidth / 2.0);
  };
  ShapeBatch.prototype.drawSquare_y2kzbl$ = function (x, y, w) {
    this.drawRectangle_7b5o5w$(x, y, w, w);
  };
  ShapeBatch.prototype.drawTriangle_w8lrqs$ = function (x0, y0, x1, y1, x2, y2) {
    this.line_7b5o5w$(x0, y0, x1, y1);
    this.line_7b5o5w$(x1, y1, x2, y2);
    this.line_7b5o5w$(x0, y0, x2, y2);
  };
  ShapeBatch.prototype.fillArc_w8lrqs$ = function (cx, cy, w, h, start, angle) {
    var x = Math_0.max(w, h);
    var segments = roundToInt(10 * Math_0.sqrt(x));
    var theta = angle / segments;
    var c = Math_0.cos(theta);
    var s = Math_0.sin(theta);
    var x_0 = Math_0.cos(start);
    var y = Math_0.sin(start);
    for (var i = 0; i < segments; i++) {
      var x0 = w * x_0 + cx;
      var y0 = h * y + cy;
      var t = x_0;
      x_0 = c * x_0 - s * y;
      y = s * t + c * y;
      var x1 = w * x_0 + cx;
      var y1 = h * y + cy;
      this.emitShape_mqyxdn$(x0, y0, cx, cy, x1, y1, this.color);
    }
  };
  ShapeBatch.prototype.fillCircle_y2kzbl$ = function (cx, cy, r) {
    this.fillArc_w8lrqs$(cx, cy, r, r, 0.0, 2.0 * math.PI);
  };
  ShapeBatch.prototype.fillEllipse_7b5o5w$ = function (cx, cy, w, h) {
    this.fillArc_w8lrqs$(cx, cy, w, h, 0.0, 2.0 * math.PI);
  };
  ShapeBatch.prototype.fillRectangle_7b5o5w$ = function (x, y, w, h) {
    this.emitShape_mqyxdn$(x, y, x, y + h, x + w, y, this.color);
    this.emitShape_mqyxdn$(x, y + h, x + w, y + h, x + w, y, this.color);
  };
  ShapeBatch.prototype.fillSquare_y2kzbl$ = function (x, y, w) {
    this.fillRectangle_7b5o5w$(x, y, w, w);
  };
  ShapeBatch.prototype.fillTriangle_w8lrqs$ = function (x0, y0, x1, y1, x2, y2) {
    this.emitShape_mqyxdn$(x0, y0, x2, y2, x1, y1, this.color);
  };
  ShapeBatch.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ShapeBatch',
    interfaces: [Batch]
  };
  function ShapeBatchImpl(mesh) {
    BatchImpl.call(this, mesh);
    this.lineWidth_6arglb$_0 = 1.0;
  }
  Object.defineProperty(ShapeBatchImpl.prototype, 'lineWidth', {
    get: function () {
      return this.lineWidth_6arglb$_0;
    },
    set: function (lineWidth) {
      this.lineWidth_6arglb$_0 = lineWidth;
    }
  });
  ShapeBatchImpl.prototype.syncState_auijr3$ = function (state) {
    BatchImpl.prototype.syncState_auijr3$.call(this, state);
    this.lineWidth = state.lineWidth;
  };
  ShapeBatchImpl.prototype.emitShape_mqyxdn$ = function (x0, y0, x1, y1, x2, y2, color) {
    var cc = color.abgr8888();
    this.mesh.vertex_a5xegy$(x0, y0, cc);
    this.mesh.vertex_a5xegy$(x1, y1, cc);
    this.mesh.vertex_a5xegy$(x2, y2, cc);
    this.vertices_za3lpa$(3);
  };
  ShapeBatchImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ShapeBatchImpl',
    interfaces: [ShapeBatch, BatchImpl]
  };
  function SpriteBatch() {
  }
  SpriteBatch.prototype.drawString_lkl5tj$ = function (font, str, x, y) {
    font.draw_qd67v9$(this, str, x, y);
  };
  SpriteBatch.prototype.drawStringMultiline_lkl5tj$ = function (font, str, x, y) {
    font.drawMultiline_qd67v9$(this, str, x, y);
  };
  SpriteBatch.prototype.drawTexture_5ir0qv$$default = function (region, x, y, w, h, flipH, flipV) {
    this.validateTexture_6ycval$(region.texture);
    var sMin = flipH ? region.sMax : region.sMin;
    var tMin = flipV ? region.tMax : region.tMin;
    var sMax = flipH ? region.sMin : region.sMax;
    var tMax = flipV ? region.tMin : region.tMax;
    this.emitSprite_475kh1$(x, y, sMin, tMin, x, y + h, sMin, tMax, x + w, y, sMax, tMin, this.color);
    this.emitSprite_475kh1$(x, y + h, sMin, tMax, x + w, y + h, sMax, tMax, x + w, y, sMax, tMin, this.color);
  };
  SpriteBatch.prototype.drawTexture_5ir0qv$ = function (region, x, y, w, h, flipH, flipV, callback$default) {
    if (w === void 0)
      w = region.ww;
    if (h === void 0)
      h = region.hh;
    if (flipH === void 0)
      flipH = false;
    if (flipV === void 0)
      flipV = false;
    callback$default ? callback$default(region, x, y, w, h, flipH, flipV) : this.drawTexture_5ir0qv$$default(region, x, y, w, h, flipH, flipV);
  };
  SpriteBatch.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'SpriteBatch',
    interfaces: [Batch]
  };
  function SpriteBatchImpl(mesh) {
    BatchImpl.call(this, mesh);
    this.current_0 = null;
  }
  SpriteBatchImpl.prototype.emitSprite_475kh1$ = function (x0, y0, s0, t0, x1, y1, s1, t1, x2, y2, s2, t2, color) {
    var cc = color.abgr8888();
    this.mesh.vertex_un7uzm$(x0, y0, s0, t0, cc);
    this.mesh.vertex_un7uzm$(x1, y1, s1, t1, cc);
    this.mesh.vertex_un7uzm$(x2, y2, s2, t2, cc);
    this.vertices_za3lpa$(3);
  };
  SpriteBatchImpl.prototype.validateTexture_6ycval$ = function (texture) {
    if (equals(texture, this.current_0)) {
      return;
    }
    if (this.current_0 != null) {
      this.end();
      this.reset();
    }
    texture.bind();
    this.current_0 = texture;
  };
  SpriteBatchImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SpriteBatchImpl',
    interfaces: [SpriteBatch, BatchImpl]
  };
  function Color(r, g, b, a) {
    Color$Companion_getInstance();
    if (a === void 0)
      a = 1.0;
    this.values = new Float32Array(4);
    this.values[0] = r;
    this.values[1] = g;
    this.values[2] = b;
    this.values[3] = a;
  }
  Object.defineProperty(Color.prototype, 'r', {
    get: defineInlineFunction('DungeonWorld.dw.graphics.Color.get_r', function () {
      return this.values[0];
    })
  });
  Object.defineProperty(Color.prototype, 'g', {
    get: defineInlineFunction('DungeonWorld.dw.graphics.Color.get_g', function () {
      return this.values[1];
    })
  });
  Object.defineProperty(Color.prototype, 'b', {
    get: defineInlineFunction('DungeonWorld.dw.graphics.Color.get_b', function () {
      return this.values[2];
    })
  });
  Object.defineProperty(Color.prototype, 'a', {
    get: defineInlineFunction('DungeonWorld.dw.graphics.Color.get_a', function () {
      return this.values[3];
    })
  });
  Color.prototype.abgr8888 = function () {
    return numberToInt(255 * this.values[3]) << 24 | numberToInt(255 * this.values[2]) << 16 | numberToInt(255 * this.values[1]) << 8 | numberToInt(255 * this.values[0]);
  };
  function Color$Companion() {
    Color$Companion_instance = this;
    this.BLACK = Color_init(0, 0, 0);
    this.FUCHSIA = Color_init(255, 0, 255);
    this.GRAY = Color_init(128, 128, 128);
    this.GREEN = Color_init(0, 128, 0);
    this.LIME = Color_init(0, 255, 0);
    this.MAROON = Color_init(128, 0, 0);
    this.OLIVE = Color_init(128, 128, 0);
    this.RED = Color_init(255, 0, 0);
    this.SILVER = Color_init(192, 192, 192);
    this.WHITE = Color_init(255, 255, 255);
    this.YELLOW = Color_init(255, 255, 0);
  }
  Color$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Color$Companion_instance = null;
  function Color$Companion_getInstance() {
    if (Color$Companion_instance === null) {
      new Color$Companion();
    }
    return Color$Companion_instance;
  }
  Color.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Color',
    interfaces: []
  };
  function Color_init(r, g, b, a, $this) {
    if (a === void 0)
      a = 255;
    $this = $this || Object.create(Color.prototype);
    Color.call($this, r / 255.0, g / 255.0, b / 255.0, a / 255.0);
    return $this;
  }
  function Font(glyphMap) {
    Font$Companion_getInstance();
    this.glyphMap = glyphMap;
    this.charWidth_rjaqfz$_0 = lazy(Font$charWidth$lambda(this));
    this.charHeight_a55zh6$_0 = lazy(Font$charHeight$lambda(this));
  }
  Object.defineProperty(Font.prototype, 'charWidth', {
    get: function () {
      return this.charWidth_rjaqfz$_0.value;
    }
  });
  Object.defineProperty(Font.prototype, 'charHeight', {
    get: function () {
      return this.charHeight_a55zh6$_0.value;
    }
  });
  Font.prototype.calcWidth_61zpoe$ = function (str) {
    var tmp$, tmp$_0;
    var w = 0.0;
    tmp$ = iterator(str);
    while (tmp$.hasNext()) {
      var c = unboxChar(tmp$.next());
      tmp$_0 = this.glyphMap.get_11rb$(toBoxedChar(c));
      if (tmp$_0 == null) {
        continue;
      }
      var glyph = tmp$_0;
      w += glyph.xAdv;
    }
    return w;
  };
  Font.prototype.calcHeight_61zpoe$ = function (str) {
    var tmp$, tmp$_0;
    var h = 0.0;
    tmp$ = iterator(str);
    while (tmp$.hasNext()) {
      var c = unboxChar(tmp$.next());
      tmp$_0 = this.glyphMap.get_11rb$(toBoxedChar(c));
      if (tmp$_0 == null) {
        continue;
      }
      var glyph = tmp$_0;
      var a = h;
      var b = glyph.hh + glyph.yOff;
      h = Math_0.max(a, b);
    }
    return h;
  };
  Font.prototype.draw_qd67v9$ = function (batch, text, x, y) {
    var tmp$, tmp$_0;
    var xPos = x;
    tmp$ = iterator(text);
    while (tmp$.hasNext()) {
      var c = unboxChar(tmp$.next());
      tmp$_0 = this.glyphMap.get_11rb$(toBoxedChar(c));
      if (tmp$_0 == null) {
        continue;
      }
      var glyph = tmp$_0;
      batch.drawTexture_5ir0qv$(glyph, xPos + glyph.xOff, y + glyph.yOff);
      xPos += glyph.xAdv;
    }
  };
  Font.prototype.drawMultiline_qd67v9$ = function (batch, text, x, y) {
    var tmp$, tmp$_0, tmp$_1;
    var xPos = x;
    var yPos = y;
    tmp$ = Font$Companion_getInstance().newlinePattern_0.split_905azu$(text).iterator();
    while (tmp$.hasNext()) {
      var line = tmp$.next();
      tmp$_0 = iterator(line);
      while (tmp$_0.hasNext()) {
        var c = unboxChar(tmp$_0.next());
        tmp$_1 = this.glyphMap.get_11rb$(toBoxedChar(c));
        if (tmp$_1 == null) {
          continue;
        }
        var glyph = tmp$_1;
        batch.drawTexture_5ir0qv$(glyph, xPos + glyph.xOff, yPos + glyph.yOff);
        xPos += glyph.xAdv;
      }
      xPos = x;
      yPos += this.charHeight;
    }
  };
  function Font$Glyph(texture, xMin, yMin, xMax, yMax, xOff, yOff, xAdv) {
    this.texture_a21ziw$_0 = texture;
    this.xMin_jfu721$_0 = xMin;
    this.yMin_jfaego$_0 = yMin;
    this.xMax_jfucqz$_0 = xMax;
    this.yMax_jfak5m$_0 = yMax;
    this.xOff = xOff;
    this.yOff = yOff;
    this.xAdv = xAdv;
  }
  Object.defineProperty(Font$Glyph.prototype, 'texture', {
    get: function () {
      return this.texture_a21ziw$_0;
    }
  });
  Object.defineProperty(Font$Glyph.prototype, 'xMin', {
    get: function () {
      return this.xMin_jfu721$_0;
    }
  });
  Object.defineProperty(Font$Glyph.prototype, 'yMin', {
    get: function () {
      return this.yMin_jfaego$_0;
    }
  });
  Object.defineProperty(Font$Glyph.prototype, 'xMax', {
    get: function () {
      return this.xMax_jfucqz$_0;
    }
  });
  Object.defineProperty(Font$Glyph.prototype, 'yMax', {
    get: function () {
      return this.yMax_jfak5m$_0;
    }
  });
  Font$Glyph.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Glyph',
    interfaces: [TextureRegion]
  };
  Font$Glyph.prototype.component1 = function () {
    return this.texture;
  };
  Font$Glyph.prototype.component2 = function () {
    return this.xMin;
  };
  Font$Glyph.prototype.component3 = function () {
    return this.yMin;
  };
  Font$Glyph.prototype.component4 = function () {
    return this.xMax;
  };
  Font$Glyph.prototype.component5 = function () {
    return this.yMax;
  };
  Font$Glyph.prototype.component6 = function () {
    return this.xOff;
  };
  Font$Glyph.prototype.component7 = function () {
    return this.yOff;
  };
  Font$Glyph.prototype.component8 = function () {
    return this.xAdv;
  };
  Font$Glyph.prototype.copy_ue3dig$ = function (texture, xMin, yMin, xMax, yMax, xOff, yOff, xAdv) {
    return new Font$Glyph(texture === void 0 ? this.texture : texture, xMin === void 0 ? this.xMin : xMin, yMin === void 0 ? this.yMin : yMin, xMax === void 0 ? this.xMax : xMax, yMax === void 0 ? this.yMax : yMax, xOff === void 0 ? this.xOff : xOff, yOff === void 0 ? this.yOff : yOff, xAdv === void 0 ? this.xAdv : xAdv);
  };
  Font$Glyph.prototype.toString = function () {
    return 'Glyph(texture=' + Kotlin.toString(this.texture) + (', xMin=' + Kotlin.toString(this.xMin)) + (', yMin=' + Kotlin.toString(this.yMin)) + (', xMax=' + Kotlin.toString(this.xMax)) + (', yMax=' + Kotlin.toString(this.yMax)) + (', xOff=' + Kotlin.toString(this.xOff)) + (', yOff=' + Kotlin.toString(this.yOff)) + (', xAdv=' + Kotlin.toString(this.xAdv)) + ')';
  };
  Font$Glyph.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.texture) | 0;
    result = result * 31 + Kotlin.hashCode(this.xMin) | 0;
    result = result * 31 + Kotlin.hashCode(this.yMin) | 0;
    result = result * 31 + Kotlin.hashCode(this.xMax) | 0;
    result = result * 31 + Kotlin.hashCode(this.yMax) | 0;
    result = result * 31 + Kotlin.hashCode(this.xOff) | 0;
    result = result * 31 + Kotlin.hashCode(this.yOff) | 0;
    result = result * 31 + Kotlin.hashCode(this.xAdv) | 0;
    return result;
  };
  Font$Glyph.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.texture, other.texture) && Kotlin.equals(this.xMin, other.xMin) && Kotlin.equals(this.yMin, other.yMin) && Kotlin.equals(this.xMax, other.xMax) && Kotlin.equals(this.yMax, other.yMax) && Kotlin.equals(this.xOff, other.xOff) && Kotlin.equals(this.yOff, other.yOff) && Kotlin.equals(this.xAdv, other.xAdv)))));
  };
  function Font$Companion() {
    Font$Companion_instance = this;
    this.OPEN_SANS_za3at$_0 = lazy(Font$Companion$OPEN_SANS$lambda(this));
    this.SQUAREWAVE_4xyu8b$_0 = lazy(Font$Companion$SQUAREWAVE$lambda(this));
    this.newlinePattern_0 = Regex_init('\r|\n|\r\n');
    this.pattern_0 = Regex_init('char\\s+id=([0-9]+)\\s+x=([0-9]+)\\s+y=([0-9]+)\\s+width=([0-9]+)\\s+height=([0-9]+)\\s+xoffset=(-?[0-9]+)\\s+yoffset=(-?[0-9]+)\\s+xadvance=([0-9]+)');
  }
  Object.defineProperty(Font$Companion.prototype, 'OPEN_SANS', {
    get: function () {
      return this.OPEN_SANS_za3at$_0.value;
    }
  });
  Object.defineProperty(Font$Companion.prototype, 'SQUAREWAVE', {
    get: function () {
      return this.SQUAREWAVE_4xyu8b$_0.value;
    }
  });
  Font$Companion.prototype.load_drrezf$ = function (texture, info) {
    var tmp$;
    var glyphMap = HashMap_init();
    tmp$ = this.pattern_0.findAll_905azu$(info).iterator();
    while (tmp$.hasNext()) {
      var match = tmp$.next();
      var id = toChar(toInt(match.groupValues.get_za3lpa$(1)));
      var x = toDouble(match.groupValues.get_za3lpa$(2));
      var y = toDouble(match.groupValues.get_za3lpa$(3));
      var w = toDouble(match.groupValues.get_za3lpa$(4));
      var h = toDouble(match.groupValues.get_za3lpa$(5));
      var xOff = toDouble(match.groupValues.get_za3lpa$(6));
      var yOff = toDouble(match.groupValues.get_za3lpa$(7));
      var xAdv = toDouble(match.groupValues.get_za3lpa$(8));
      var key = toBoxedChar(id);
      var value = new Font$Glyph(texture, x, y, x + w, y + h, xOff, yOff, xAdv);
      glyphMap.put_xwzc9p$(key, value);
    }
    return new Font(glyphMap);
  };
  function Font$Companion$OPEN_SANS$lambda(this$Font$) {
    return function () {
      return this$Font$.load_drrezf$(new Texture(Game$Companion_getInstance().INSTANCE.assets.get_3zqiyt$('spriteOpenSans')), Game$Companion_getInstance().INSTANCE.assets.get_3zqiyt$('infoOpenSans'));
    };
  }
  function Font$Companion$SQUAREWAVE$lambda(this$Font$) {
    return function () {
      return this$Font$.load_drrezf$(new Texture(Game$Companion_getInstance().INSTANCE.assets.get_3zqiyt$('spriteSquarewave')), Game$Companion_getInstance().INSTANCE.assets.get_3zqiyt$('infoSquarewave'));
    };
  }
  Font$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Font$Companion_instance = null;
  function Font$Companion_getInstance() {
    if (Font$Companion_instance === null) {
      new Font$Companion();
    }
    return Font$Companion_instance;
  }
  function Font$charWidth$lambda(this$Font) {
    return function () {
      var $receiver = this$Font.glyphMap.values;
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(item.xAdv);
      }
      var value = max(destination);
      var requireNotNull$result;
      if (value == null) {
        var message = 'Required value was null.';
        throw IllegalArgumentException_init(message.toString());
      }
       else {
        requireNotNull$result = value;
      }
      return requireNotNull$result;
    };
  }
  function Font$charHeight$lambda(this$Font) {
    return function () {
      var $receiver = this$Font.glyphMap.values;
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(item.hh);
      }
      var value = max(destination);
      var requireNotNull$result;
      if (value == null) {
        var message = 'Required value was null.';
        throw IllegalArgumentException_init(message.toString());
      }
       else {
        requireNotNull$result = value;
      }
      return requireNotNull$result;
    };
  }
  Font.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Font',
    interfaces: []
  };
  function GLEnum(value) {
    this.value = value;
  }
  GLEnum.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GLEnum',
    interfaces: []
  };
  GLEnum.prototype.unbox = function () {
    return this.value;
  };
  GLEnum.prototype.toString = function () {
    return 'GLEnum(value=' + Kotlin.toString(this.value) + ')';
  };
  GLEnum.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  GLEnum.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function GLEnums() {
    GLEnums_instance = this;
    this.DEPTH_BUFFER_BIT = new GLEnum(256);
    this.STENCIL_BUFFER_BIT = new GLEnum(1024);
    this.COLOR_BUFFER_BIT = new GLEnum(16384);
    this.POINTS = new GLEnum(0);
    this.LINES = new GLEnum(1);
    this.LINE_LOOP = new GLEnum(2);
    this.LINE_STRIP = new GLEnum(3);
    this.TRIANGLES = new GLEnum(4);
    this.TRIANGLE_STRIP = new GLEnum(5);
    this.TRIANGLE_FAN = new GLEnum(6);
    this.ZERO = new GLEnum(0);
    this.ONE = new GLEnum(1);
    this.SRC_COLOR = new GLEnum(768);
    this.ONE_MINUS_SRC_COLOR = new GLEnum(769);
    this.SRC_ALPHA = new GLEnum(770);
    this.ONE_MINUS_SRC_ALPHA = new GLEnum(771);
    this.DST_ALPHA = new GLEnum(772);
    this.ONE_MINUS_DST_ALPHA = new GLEnum(773);
    this.DST_COLOR = new GLEnum(774);
    this.ONE_MINUS_DST_COLOR = new GLEnum(775);
    this.SRC_ALPHA_SATURATE = new GLEnum(776);
    this.FUNC_ADD = new GLEnum(32774);
    this.BLEND_EQUATION = new GLEnum(32777);
    this.BLEND_EQUATION_RGB = new GLEnum(32777);
    this.BLEND_EQUATION_ALPHA = new GLEnum(34877);
    this.FUNC_SUBTRACT = new GLEnum(32778);
    this.FUNC_REVERSE_SUBTRACT = new GLEnum(32779);
    this.BLEND_DST_RGB = new GLEnum(32968);
    this.BLEND_SRC_RGB = new GLEnum(32969);
    this.BLEND_DST_ALPHA = new GLEnum(32970);
    this.BLEND_SRC_ALPHA = new GLEnum(32971);
    this.CONSTANT_COLOR = new GLEnum(32769);
    this.ONE_MINUS_CONSTANT_COLOR = new GLEnum(32770);
    this.CONSTANT_ALPHA = new GLEnum(32771);
    this.ONE_MINUS_CONSTANT_ALPHA = new GLEnum(32772);
    this.BLEND_COLOR = new GLEnum(32773);
    this.ARRAY_BUFFER = new GLEnum(34962);
    this.ELEMENT_ARRAY_BUFFER = new GLEnum(34963);
    this.ARRAY_BUFFER_BINDING = new GLEnum(34964);
    this.ELEMENT_ARRAY_BUFFER_BINDING = new GLEnum(34965);
    this.STREAM_DRAW = new GLEnum(35040);
    this.STATIC_DRAW = new GLEnum(35044);
    this.DYNAMIC_DRAW = new GLEnum(35048);
    this.BUFFER_SIZE = new GLEnum(34660);
    this.BUFFER_USAGE = new GLEnum(34661);
    this.CURRENT_VERTEX_ATTRIB = new GLEnum(34342);
    this.FRONT = new GLEnum(1028);
    this.BACK = new GLEnum(1029);
    this.FRONT_AND_BACK = new GLEnum(1032);
    this.CULL_FACE = new GLEnum(2884);
    this.BLEND = new GLEnum(3042);
    this.DITHER = new GLEnum(3024);
    this.STENCIL_TEST = new GLEnum(2960);
    this.DEPTH_TEST = new GLEnum(2929);
    this.SCISSOR_TEST = new GLEnum(3089);
    this.POLYGON_OFFSET_FILL = new GLEnum(32823);
    this.SAMPLE_ALPHA_TO_COVERAGE = new GLEnum(32926);
    this.SAMPLE_COVERAGE = new GLEnum(32928);
    this.NO_ERROR = new GLEnum(0);
    this.INVALID_ENUM = new GLEnum(1280);
    this.INVALID_VALUE = new GLEnum(1281);
    this.INVALID_OPERATION = new GLEnum(1282);
    this.OUT_OF_MEMORY = new GLEnum(1285);
    this.CW = new GLEnum(2304);
    this.CCW = new GLEnum(2305);
    this.LINE_WIDTH = new GLEnum(2849);
    this.ALIASED_POINT_SIZE_RANGE = new GLEnum(33901);
    this.ALIASED_LINE_WIDTH_RANGE = new GLEnum(33902);
    this.CULL_FACE_MODE = new GLEnum(2885);
    this.FRONT_FACE = new GLEnum(2886);
    this.DEPTH_RANGE = new GLEnum(2928);
    this.DEPTH_WRITEMASK = new GLEnum(2930);
    this.DEPTH_CLEAR_VALUE = new GLEnum(2931);
    this.DEPTH_FUNC = new GLEnum(2932);
    this.STENCIL_CLEAR_VALUE = new GLEnum(2961);
    this.STENCIL_FUNC = new GLEnum(2962);
    this.STENCIL_FAIL = new GLEnum(2964);
    this.STENCIL_PASS_DEPTH_FAIL = new GLEnum(2965);
    this.STENCIL_PASS_DEPTH_PASS = new GLEnum(2966);
    this.STENCIL_REF = new GLEnum(2967);
    this.STENCIL_VALUE_MASK = new GLEnum(2963);
    this.STENCIL_WRITEMASK = new GLEnum(2968);
    this.STENCIL_BACK_FUNC = new GLEnum(34816);
    this.STENCIL_BACK_FAIL = new GLEnum(34817);
    this.STENCIL_BACK_PASS_DEPTH_FAIL = new GLEnum(34818);
    this.STENCIL_BACK_PASS_DEPTH_PASS = new GLEnum(34819);
    this.STENCIL_BACK_REF = new GLEnum(36003);
    this.STENCIL_BACK_VALUE_MASK = new GLEnum(36004);
    this.STENCIL_BACK_WRITEMASK = new GLEnum(36005);
    this.VIEWPORT = new GLEnum(2978);
    this.SCISSOR_BOX = new GLEnum(3088);
    this.COLOR_CLEAR_VALUE = new GLEnum(3106);
    this.COLOR_WRITEMASK = new GLEnum(3107);
    this.UNPACK_ALIGNMENT = new GLEnum(3317);
    this.PACK_ALIGNMENT = new GLEnum(3333);
    this.MAX_TEXTURE_SIZE = new GLEnum(3379);
    this.MAX_VIEWPORT_DIMS = new GLEnum(3386);
    this.SUBPIXEL_BITS = new GLEnum(3408);
    this.RED_BITS = new GLEnum(3410);
    this.GREEN_BITS = new GLEnum(3411);
    this.BLUE_BITS = new GLEnum(3412);
    this.ALPHA_BITS = new GLEnum(3413);
    this.DEPTH_BITS = new GLEnum(3414);
    this.STENCIL_BITS = new GLEnum(3415);
    this.POLYGON_OFFSET_UNITS = new GLEnum(10752);
    this.POLYGON_OFFSET_FACTOR = new GLEnum(32824);
    this.TEXTURE_BINDING_2D = new GLEnum(32873);
    this.SAMPLE_BUFFERS = new GLEnum(32936);
    this.SAMPLES = new GLEnum(32937);
    this.SAMPLE_COVERAGE_VALUE = new GLEnum(32938);
    this.SAMPLE_COVERAGE_INVERT = new GLEnum(32939);
    this.COMPRESSED_TEXTURE_FORMATS = new GLEnum(34467);
    this.DONT_CARE = new GLEnum(4352);
    this.FASTEST = new GLEnum(4353);
    this.NICEST = new GLEnum(4354);
    this.GENERATE_MIPMAP_HINT = new GLEnum(33170);
    this.BYTE = new GLEnum(5120);
    this.UNSIGNED_BYTE = new GLEnum(5121);
    this.SHORT = new GLEnum(5122);
    this.UNSIGNED_SHORT = new GLEnum(5123);
    this.INT = new GLEnum(5124);
    this.UNSIGNED_INT = new GLEnum(5125);
    this.FLOAT = new GLEnum(5126);
    this.DEPTH_COMPONENT = new GLEnum(6402);
    this.ALPHA = new GLEnum(6406);
    this.RGB = new GLEnum(6407);
    this.RGBA = new GLEnum(6408);
    this.LUMINANCE = new GLEnum(6409);
    this.LUMINANCE_ALPHA = new GLEnum(6410);
    this.UNSIGNED_SHORT_4_4_4_4 = new GLEnum(32819);
    this.UNSIGNED_SHORT_5_5_5_1 = new GLEnum(32820);
    this.UNSIGNED_SHORT_5_6_5 = new GLEnum(33635);
    this.FRAGMENT_SHADER = new GLEnum(35632);
    this.VERTEX_SHADER = new GLEnum(35633);
    this.MAX_VERTEX_ATTRIBS = new GLEnum(34921);
    this.MAX_VERTEX_UNIFORM_VECTORS = new GLEnum(36347);
    this.MAX_VARYING_VECTORS = new GLEnum(36348);
    this.MAX_COMBINED_TEXTURE_IMAGE_UNITS = new GLEnum(35661);
    this.MAX_VERTEX_TEXTURE_IMAGE_UNITS = new GLEnum(35660);
    this.MAX_TEXTURE_IMAGE_UNITS = new GLEnum(34930);
    this.MAX_FRAGMENT_UNIFORM_VECTORS = new GLEnum(36349);
    this.SHADER_TYPE = new GLEnum(35663);
    this.DELETE_STATUS = new GLEnum(35712);
    this.LINK_STATUS = new GLEnum(35714);
    this.VALIDATE_STATUS = new GLEnum(35715);
    this.ATTACHED_SHADERS = new GLEnum(35717);
    this.ACTIVE_UNIFORMS = new GLEnum(35718);
    this.ACTIVE_ATTRIBUTES = new GLEnum(35721);
    this.SHADING_LANGUAGE_VERSION = new GLEnum(35724);
    this.CURRENT_PROGRAM = new GLEnum(35725);
    this.NEVER = new GLEnum(512);
    this.LESS = new GLEnum(513);
    this.EQUAL = new GLEnum(514);
    this.LEQUAL = new GLEnum(515);
    this.GREATER = new GLEnum(516);
    this.NOTEQUAL = new GLEnum(517);
    this.GEQUAL = new GLEnum(518);
    this.ALWAYS = new GLEnum(519);
    this.KEEP = new GLEnum(7680);
    this.REPLACE = new GLEnum(7681);
    this.INCR = new GLEnum(7682);
    this.DECR = new GLEnum(7683);
    this.INVERT = new GLEnum(5386);
    this.INCR_WRAP = new GLEnum(34055);
    this.DECR_WRAP = new GLEnum(34056);
    this.VENDOR = new GLEnum(7936);
    this.RENDERER = new GLEnum(7937);
    this.VERSION = new GLEnum(7938);
    this.NEAREST = new GLEnum(9728);
    this.LINEAR = new GLEnum(9729);
    this.NEAREST_MIPMAP_NEAREST = new GLEnum(9984);
    this.LINEAR_MIPMAP_NEAREST = new GLEnum(9985);
    this.NEAREST_MIPMAP_LINEAR = new GLEnum(9986);
    this.LINEAR_MIPMAP_LINEAR = new GLEnum(9987);
    this.TEXTURE_MAG_FILTER = new GLEnum(10240);
    this.TEXTURE_MIN_FILTER = new GLEnum(10241);
    this.TEXTURE_WRAP_S = new GLEnum(10242);
    this.TEXTURE_WRAP_T = new GLEnum(10243);
    this.TEXTURE_2D = new GLEnum(3553);
    this.TEXTURE = new GLEnum(5890);
    this.TEXTURE_CUBE_MAP = new GLEnum(34067);
    this.TEXTURE_BINDING_CUBE_MAP = new GLEnum(34068);
    this.TEXTURE_CUBE_MAP_POSITIVE_X = new GLEnum(34069);
    this.TEXTURE_CUBE_MAP_NEGATIVE_X = new GLEnum(34070);
    this.TEXTURE_CUBE_MAP_POSITIVE_Y = new GLEnum(34071);
    this.TEXTURE_CUBE_MAP_NEGATIVE_Y = new GLEnum(34072);
    this.TEXTURE_CUBE_MAP_POSITIVE_Z = new GLEnum(34073);
    this.TEXTURE_CUBE_MAP_NEGATIVE_Z = new GLEnum(34074);
    this.MAX_CUBE_MAP_TEXTURE_SIZE = new GLEnum(34076);
    this.TEXTURE0 = new GLEnum(33984);
    this.TEXTURE1 = new GLEnum(33985);
    this.TEXTURE2 = new GLEnum(33986);
    this.TEXTURE3 = new GLEnum(33987);
    this.TEXTURE4 = new GLEnum(33988);
    this.TEXTURE5 = new GLEnum(33989);
    this.TEXTURE6 = new GLEnum(33990);
    this.TEXTURE7 = new GLEnum(33991);
    this.TEXTURE8 = new GLEnum(33992);
    this.TEXTURE9 = new GLEnum(33993);
    this.TEXTURE10 = new GLEnum(33994);
    this.TEXTURE11 = new GLEnum(33995);
    this.TEXTURE12 = new GLEnum(33996);
    this.TEXTURE13 = new GLEnum(33997);
    this.TEXTURE14 = new GLEnum(33998);
    this.TEXTURE15 = new GLEnum(33999);
    this.TEXTURE16 = new GLEnum(34000);
    this.TEXTURE17 = new GLEnum(34001);
    this.TEXTURE18 = new GLEnum(34002);
    this.TEXTURE19 = new GLEnum(34003);
    this.TEXTURE20 = new GLEnum(34004);
    this.TEXTURE21 = new GLEnum(34005);
    this.TEXTURE22 = new GLEnum(34006);
    this.TEXTURE23 = new GLEnum(34007);
    this.TEXTURE24 = new GLEnum(34008);
    this.TEXTURE25 = new GLEnum(34009);
    this.TEXTURE26 = new GLEnum(34010);
    this.TEXTURE27 = new GLEnum(34011);
    this.TEXTURE28 = new GLEnum(34012);
    this.TEXTURE29 = new GLEnum(34013);
    this.TEXTURE30 = new GLEnum(34014);
    this.TEXTURE31 = new GLEnum(34015);
    this.ACTIVE_TEXTURE = new GLEnum(34016);
    this.REPEAT = new GLEnum(10497);
    this.CLAMP_TO_EDGE = new GLEnum(33071);
    this.MIRRORED_REPEAT = new GLEnum(33648);
    this.FLOAT_VEC2 = new GLEnum(35664);
    this.FLOAT_VEC3 = new GLEnum(35665);
    this.FLOAT_VEC4 = new GLEnum(35666);
    this.INT_VEC2 = new GLEnum(35667);
    this.INT_VEC3 = new GLEnum(35668);
    this.INT_VEC4 = new GLEnum(35669);
    this.BOOL = new GLEnum(35670);
    this.BOOL_VEC2 = new GLEnum(35671);
    this.BOOL_VEC3 = new GLEnum(35672);
    this.BOOL_VEC4 = new GLEnum(35673);
    this.FLOAT_MAT2 = new GLEnum(35674);
    this.FLOAT_MAT3 = new GLEnum(35675);
    this.FLOAT_MAT4 = new GLEnum(35676);
    this.SAMPLER_2D = new GLEnum(35678);
    this.SAMPLER_CUBE = new GLEnum(35680);
    this.VERTEX_ATTRIB_ARRAY_ENABLED = new GLEnum(34338);
    this.VERTEX_ATTRIB_ARRAY_SIZE = new GLEnum(34339);
    this.VERTEX_ATTRIB_ARRAY_STRIDE = new GLEnum(34340);
    this.VERTEX_ATTRIB_ARRAY_TYPE = new GLEnum(34341);
    this.VERTEX_ATTRIB_ARRAY_NORMALIZED = new GLEnum(34922);
    this.VERTEX_ATTRIB_ARRAY_POINTER = new GLEnum(34373);
    this.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = new GLEnum(34975);
    this.IMPLEMENTATION_COLOR_READ_TYPE = new GLEnum(35738);
    this.IMPLEMENTATION_COLOR_READ_FORMAT = new GLEnum(35739);
    this.COMPILE_STATUS = new GLEnum(35713);
    this.LOW_FLOAT = new GLEnum(36336);
    this.MEDIUM_FLOAT = new GLEnum(36337);
    this.HIGH_FLOAT = new GLEnum(36338);
    this.LOW_INT = new GLEnum(36339);
    this.MEDIUM_INT = new GLEnum(36340);
    this.HIGH_INT = new GLEnum(36341);
    this.FRAMEBUFFER = new GLEnum(36160);
    this.RENDERBUFFER = new GLEnum(36161);
    this.RGBA4 = new GLEnum(32854);
    this.RGB5_A1 = new GLEnum(32855);
    this.RGB565 = new GLEnum(36194);
    this.DEPTH_COMPONENT16 = new GLEnum(33189);
    this.STENCIL_INDEX = new GLEnum(6401);
    this.STENCIL_INDEX8 = new GLEnum(36168);
    this.DEPTH_STENCIL = new GLEnum(34041);
    this.RENDERBUFFER_WIDTH = new GLEnum(36162);
    this.RENDERBUFFER_HEIGHT = new GLEnum(36163);
    this.RENDERBUFFER_INTERNAL_FORMAT = new GLEnum(36164);
    this.RENDERBUFFER_RED_SIZE = new GLEnum(36176);
    this.RENDERBUFFER_GREEN_SIZE = new GLEnum(36177);
    this.RENDERBUFFER_BLUE_SIZE = new GLEnum(36178);
    this.RENDERBUFFER_ALPHA_SIZE = new GLEnum(36179);
    this.RENDERBUFFER_DEPTH_SIZE = new GLEnum(36180);
    this.RENDERBUFFER_STENCIL_SIZE = new GLEnum(36181);
    this.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = new GLEnum(36048);
    this.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = new GLEnum(36049);
    this.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = new GLEnum(36050);
    this.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = new GLEnum(36051);
    this.COLOR_ATTACHMENT0 = new GLEnum(36064);
    this.DEPTH_ATTACHMENT = new GLEnum(36096);
    this.STENCIL_ATTACHMENT = new GLEnum(36128);
    this.DEPTH_STENCIL_ATTACHMENT = new GLEnum(33306);
    this.NONE = new GLEnum(0);
    this.FRAMEBUFFER_COMPLETE = new GLEnum(36053);
    this.FRAMEBUFFER_INCOMPLETE_ATTACHMENT = new GLEnum(36054);
    this.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = new GLEnum(36055);
    this.FRAMEBUFFER_INCOMPLETE_DIMENSIONS = new GLEnum(36057);
    this.FRAMEBUFFER_UNSUPPORTED = new GLEnum(36061);
    this.FRAMEBUFFER_BINDING = new GLEnum(36006);
    this.RENDERBUFFER_BINDING = new GLEnum(36007);
    this.MAX_RENDERBUFFER_SIZE = new GLEnum(34024);
    this.INVALID_FRAMEBUFFER_OPERATION = new GLEnum(1286);
    this.UNPACK_FLIP_Y_WEBGL = new GLEnum(37440);
    this.UNPACK_PREMULTIPLY_ALPHA_WEBGL = new GLEnum(37441);
    this.CONTEXT_LOST_WEBGL = new GLEnum(37442);
    this.UNPACK_COLORSPACE_CONVERSION_WEBGL = new GLEnum(37443);
    this.BROWSER_DEFAULT_WEBGL = new GLEnum(37444);
  }
  GLEnums.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'GLEnums',
    interfaces: []
  };
  var GLEnums_instance = null;
  function GLEnums_getInstance() {
    if (GLEnums_instance === null) {
      new GLEnums();
    }
    return GLEnums_instance;
  }
  function Graphics(screen) {
    Graphics$Companion_getInstance();
    this.gl_0 = Graphics$Companion_getInstance().gl();
    this.shapeMesh_0 = new ShapeMesh();
    this.spriteMesh_0 = new SpriteMesh();
    this.states_0 = ArrayList_init();
    this.currentMesh_0 = null;
    this.dirty_0 = true;
    this.shapeMesh_0.setup();
    this.spriteMesh_0.setup();
    this.gl_0.enable_b3xsnb$(GLEnums_getInstance().CULL_FACE);
    this.gl_0.frontFace_b3xsnb$(GLEnums_getInstance().FRONT);
    this.gl_0.cullFace_b3xsnb$(GLEnums_getInstance().CCW);
    this.gl_0.enable_b3xsnb$(GLEnums_getInstance().BLEND);
    this.gl_0.blendFunc_rpnrdq$(GLEnums_getInstance().SRC_ALPHA, GLEnums_getInstance().ONE_MINUS_SRC_ALPHA);
    this.gl_0.clearColor_7b5o5w$(0.0, 0.0, 0.0, 1.0);
    this.gl_0.viewport_tjonv8$(0, 0, screen.width, screen.height);
    var state = push(this.states_0, Graphics$Graphics$State_init());
    state.projection = state.projection.times_90d5i2$(Matrix4_init().ortho_w8lrqs$(0.0, screen.width, screen.height, 0.0, -1.0, 1.0));
  }
  Graphics.prototype.clear = function () {
    this.gl_0.clear_b3xsnb$(GLEnums_getInstance().COLOR_BUFFER_BIT);
  };
  Graphics.prototype.save = function () {
    push(this.states_0, peek(this.states_0).copy());
  };
  Graphics.prototype.restore = function () {
    if (!(this.states_0.size >= 2)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }
    pop(this.states_0);
    this.dirty_0 = true;
  };
  Graphics.prototype.scale_dleff0$ = function (sx, sy) {
    var tmp$;
    tmp$ = peek(this.states_0);
    tmp$.projection = tmp$.projection.times_90d5i2$(Matrix4_init().scale_y2kzbl$(sx, sy));
    this.dirty_0 = true;
  };
  Graphics.prototype.translate_dleff0$ = function (tx, ty) {
    var tmp$;
    tmp$ = peek(this.states_0);
    tmp$.projection = tmp$.projection.times_90d5i2$(Matrix4_init().translate_y2kzbl$(tx, ty));
    this.dirty_0 = true;
  };
  Graphics.prototype.rotate_mx4ult$ = function (theta) {
    var tmp$;
    tmp$ = peek(this.states_0);
    tmp$.projection = tmp$.projection.times_90d5i2$(Matrix4_init().rotateZ_mx4ult$(theta));
    this.dirty_0 = true;
  };
  Graphics.prototype.tint_2elpnp$ = function (tint) {
    peek(this.states_0).tint = tint;
    this.dirty_0 = true;
  };
  Graphics.prototype.auto = function () {
    return new AutoBatch(this);
  };
  Graphics.prototype.withAuto_yl25su$ = function (callback) {
    var batch = this.auto();
    callback(batch);
    batch.end();
  };
  Graphics.prototype.shape = function () {
    this.updateMesh_0(this.shapeMesh_0);
    return new ShapeBatchImpl(this.shapeMesh_0);
  };
  Graphics.prototype.withShape_ch4ima$ = function (callback) {
    var batch = this.shape();
    callback(batch);
    batch.end();
  };
  Graphics.prototype.sprite = function () {
    this.updateMesh_0(this.spriteMesh_0);
    return new SpriteBatchImpl(this.spriteMesh_0);
  };
  Graphics.prototype.withSprite_9asa4o$ = function (callback) {
    var batch = this.sprite();
    callback(batch);
    batch.end();
  };
  Graphics.prototype.dispose = function () {
    this.spriteMesh_0.dispose();
    this.shapeMesh_0.dispose();
  };
  Graphics.prototype.updateMesh_0 = function (mesh) {
    var tmp$;
    if (!equals(this.currentMesh_0, mesh)) {
      mesh.bind();
      this.currentMesh_0 = mesh;
      this.dirty_0 = true;
    }
    if (this.dirty_0) {
      (tmp$ = this.currentMesh_0) != null ? (tmp$.updateUniforms_rvug9i$(peek(this.states_0)), Unit) : null;
      this.dirty_0 = false;
    }
  };
  function Graphics$Companion() {
    Graphics$Companion_instance = this;
    this.glHolder_uykm18$_0 = null;
  }
  Object.defineProperty(Graphics$Companion.prototype, 'glHolder_0', {
    get: function () {
      return this.glHolder_uykm18$_0;
    },
    set: function (value) {
      if (!(this.glHolder_uykm18$_0 == null)) {
        var message = 'Check failed.';
        throw IllegalStateException_init(message.toString());
      }
      this.glHolder_uykm18$_0 = value;
    }
  });
  Graphics$Companion.prototype.setup_kicwpe$ = function (screen) {
    this.glHolder_0 = new GLMethod(screen);
  };
  Graphics$Companion.prototype.gl = function () {
    var value = this.glHolder_0;
    var requireNotNull$result;
    if (value == null) {
      var message = 'Required value was null.';
      throw IllegalArgumentException_init(message.toString());
    }
     else {
      requireNotNull$result = value;
    }
    return requireNotNull$result;
  };
  Graphics$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Graphics$Companion_instance = null;
  function Graphics$Companion_getInstance() {
    if (Graphics$Companion_instance === null) {
      new Graphics$Companion();
    }
    return Graphics$Companion_instance;
  }
  function Graphics$State(projection, tint) {
    this.projection = projection;
    this.tint = tint;
  }
  Graphics$State.prototype.copy = function () {
    return new Graphics$State(this.projection.copy(), this.tint);
  };
  Graphics$State.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'State',
    interfaces: []
  };
  function Graphics$Graphics$State_init($this) {
    $this = $this || Object.create(Graphics$State.prototype);
    Graphics$State.call($this, Matrix4_init(), Color$Companion_getInstance().WHITE);
    return $this;
  }
  Graphics.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Graphics',
    interfaces: [Disposable]
  };
  function Image(width, height) {
    this.width = width;
    this.height = height;
    this.pixels = new Int32Array(Kotlin.imul(this.width, this.height));
  }
  Image.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Image',
    interfaces: []
  };
  function Mesh(vertSrc, fragSrc, capacity) {
    if (capacity === void 0)
      capacity = 65536;
    this.vertSrc_cyhksv$_0 = vertSrc;
    this.fragSrc_ih707k$_0 = fragSrc;
    this.capacity_ywispk$_0 = capacity;
    this.projection_vuphwj$_ysu7rs$_0 = this.projection_vuphwj$_ysu7rs$_0;
    this.tint_v9b5j$_jtglma$_0 = this.tint_v9b5j$_jtglma$_0;
    this.gl_1juq5v$_0 = Graphics$Companion_getInstance().gl();
    this.vbo_mxwxmn$_0 = this.gl_1juq5v$_0.createBuffer();
    this.program_t85ony$_0 = this.gl_1juq5v$_0.createProgram();
    this.vao_mxwwvy$_0 = this.gl_1juq5v$_0.createVertexArray();
    this.data = new Memory(this.capacity_ywispk$_0);
  }
  Object.defineProperty(Mesh.prototype, 'projection_vuphwj$_0', {
    get: function () {
      if (this.projection_vuphwj$_ysu7rs$_0 == null)
        return throwUPAE('projection');
      return this.projection_vuphwj$_ysu7rs$_0;
    },
    set: function (projection) {
      this.projection_vuphwj$_ysu7rs$_0 = projection;
    }
  });
  Object.defineProperty(Mesh.prototype, 'tint_v9b5j$_0', {
    get: function () {
      if (this.tint_v9b5j$_jtglma$_0 == null)
        return throwUPAE('tint');
      return this.tint_v9b5j$_jtglma$_0;
    },
    set: function (tint) {
      this.tint_v9b5j$_jtglma$_0 = tint;
    }
  });
  Mesh.prototype.setup = function () {
    var tmp$;
    this.gl_1juq5v$_0.bindBuffer_uxjef2$(GLEnums_getInstance().ARRAY_BUFFER, this.vbo_mxwxmn$_0);
    this.gl_1juq5v$_0.bufferData_bz8l6q$(GLEnums_getInstance().ARRAY_BUFFER, this.capacity_ywispk$_0, GLEnums_getInstance().STREAM_DRAW);
    this.gl_1juq5v$_0.attachShader_e6pmkj$(this.program_t85ony$_0, this.compileShader_p71h75$_0(GLEnums_getInstance().VERTEX_SHADER, this.vertSrc_cyhksv$_0));
    this.gl_1juq5v$_0.attachShader_e6pmkj$(this.program_t85ony$_0, this.compileShader_p71h75$_0(GLEnums_getInstance().FRAGMENT_SHADER, this.fragSrc_ih707k$_0));
    this.gl_1juq5v$_0.linkProgram_mdyveq$(this.program_t85ony$_0);
    if (!(this.gl_1juq5v$_0.getProgramParameter_jn0pzt$(this.program_t85ony$_0, GLEnums_getInstance().LINK_STATUS) !== 0)) {
      var message = this.gl_1juq5v$_0.getProgramInfoLog_mdyveq$(this.program_t85ony$_0);
      throw IllegalStateException_init(message.toString());
    }
    this.gl_1juq5v$_0.useProgram_ga3i4h$(this.program_t85ony$_0);
    this.gl_1juq5v$_0.bindVertexArray_f8kyr4$(this.vao_mxwwvy$_0);
    var tmp$_0;
    var sum = 0;
    tmp$_0 = this.attributes.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      sum = sum + element.offset() | 0;
    }
    var stride = sum;
    var offset = 0;
    tmp$ = this.attributes.iterator();
    while (tmp$.hasNext()) {
      var attribute = tmp$.next();
      var idx = this.gl_1juq5v$_0.getAttribLocation_odqm8g$(this.program_t85ony$_0, attribute.name);
      if (!(idx >= 0)) {
        var message_0 = 'Cannot find attribute ' + attribute.name;
        throw IllegalStateException_init(message_0.toString());
      }
      this.gl_1juq5v$_0.enableVertexAttribArray_za3lpa$(idx);
      this.gl_1juq5v$_0.vertexAttribPointer_ybuwio$(idx, attribute.size, attribute.type, attribute.normalized, stride, offset);
      offset = offset + attribute.offset() | 0;
    }
    this.findUniforms_mdyveq$(this.program_t85ony$_0);
  };
  Mesh.prototype.bind = function () {
    this.gl_1juq5v$_0.bindBuffer_uxjef2$(GLEnums_getInstance().ARRAY_BUFFER, this.vbo_mxwxmn$_0);
    this.gl_1juq5v$_0.useProgram_ga3i4h$(this.program_t85ony$_0);
    this.gl_1juq5v$_0.bindVertexArray_f8kyr4$(this.vao_mxwwvy$_0);
  };
  Mesh.prototype.begin = function () {
    this.data.clear();
  };
  Mesh.prototype.end = function () {
    this.data.flip();
    this.gl_1juq5v$_0.bufferSubData_oer25m$(GLEnums_getInstance().ARRAY_BUFFER, 0, this.data);
  };
  Mesh.prototype.dispose = function () {
    this.gl_1juq5v$_0.deleteVertexArray_itlgq9$(this.vao_mxwwvy$_0);
    this.gl_1juq5v$_0.deleteProgram_mdyveq$(this.program_t85ony$_0);
    this.gl_1juq5v$_0.deleteBuffer_k6pjba$(this.vbo_mxwxmn$_0);
  };
  Mesh.prototype.updateUniforms_rvug9i$ = function (state) {
    this.gl_1juq5v$_0.uniformMatrix4fv_k9ftqa$(this.projection_vuphwj$_0, false, state.projection.values);
    this.gl_1juq5v$_0.uniform4fv_ta9ilb$(this.tint_v9b5j$_0, state.tint.values);
  };
  Mesh.prototype.findUniforms_mdyveq$ = function (program) {
    var value = this.gl_1juq5v$_0.getUniformLocation_odqm8g$(program, 'projection');
    var requireNotNull$result;
    if (value == null) {
      var message = 'Required value was null.';
      throw IllegalArgumentException_init(message.toString());
    }
     else {
      requireNotNull$result = value;
    }
    this.projection_vuphwj$_0 = requireNotNull$result;
    var value_0 = this.gl_1juq5v$_0.getUniformLocation_odqm8g$(program, 'tint');
    var requireNotNull$result_0;
    if (value_0 == null) {
      var message_0 = 'Required value was null.';
      throw IllegalArgumentException_init(message_0.toString());
    }
     else {
      requireNotNull$result_0 = value_0;
    }
    this.tint_v9b5j$_0 = requireNotNull$result_0;
  };
  Mesh.prototype.compileShader_p71h75$_0 = function (type, src) {
    var shader = this.gl_1juq5v$_0.createShader_b3xsnb$(type);
    this.gl_1juq5v$_0.shaderSource_vdrxx9$(shader, src);
    this.gl_1juq5v$_0.compileShader_s18jvv$(shader);
    if (!(this.gl_1juq5v$_0.getShaderParameter_fxhix2$(shader, GLEnums_getInstance().COMPILE_STATUS) !== 0)) {
      var message = this.gl_1juq5v$_0.getShaderInfoLog_s18jvv$(shader);
      throw IllegalStateException_init(message.toString());
    }
    return shader;
  };
  function Mesh$Attribute(name, size, type, normalized) {
    this.name = name;
    this.size = size;
    this.type = type;
    this.normalized = normalized;
  }
  Mesh$Attribute.prototype.offset = function () {
    var tmp$, tmp$_0, tmp$_1;
    tmp$_1 = this.size;
    tmp$ = this.type;
    if (equals(tmp$, GLEnums_getInstance().BYTE) || equals(tmp$, GLEnums_getInstance().UNSIGNED_BYTE))
      tmp$_0 = 1;
    else if (equals(tmp$, GLEnums_getInstance().SHORT) || equals(tmp$, GLEnums_getInstance().UNSIGNED_SHORT))
      tmp$_0 = 2;
    else if (equals(tmp$, GLEnums_getInstance().FLOAT))
      tmp$_0 = 4;
    else
      throw IllegalArgumentException_init('Unsupported type ' + this.type);
    return Kotlin.imul(tmp$_1, tmp$_0);
  };
  Mesh$Attribute.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Attribute',
    interfaces: []
  };
  Mesh.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Mesh',
    interfaces: [Disposable]
  };
  function ShapeMesh() {
    Mesh.call(this, Game$Companion_getInstance().INSTANCE.assets.get_3zqiyt$('shaderShapeVert'), Game$Companion_getInstance().INSTANCE.assets.get_3zqiyt$('shaderShapeFrag'));
  }
  Object.defineProperty(ShapeMesh.prototype, 'attributes', {
    get: function () {
      return listOf([new Mesh$Attribute('position', 2, GLEnums_getInstance().FLOAT, false), new Mesh$Attribute('color', 4, GLEnums_getInstance().UNSIGNED_BYTE, true)]);
    }
  });
  ShapeMesh.prototype.vertex_a5xegy$ = function (x, y, color) {
    this.data.writeFloat_mx4ult$(x);
    this.data.writeFloat_mx4ult$(y);
    this.data.writeInt_za3lpa$(color);
  };
  ShapeMesh.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ShapeMesh',
    interfaces: [Mesh]
  };
  function SpriteMesh() {
    Mesh.call(this, Game$Companion_getInstance().INSTANCE.assets.get_3zqiyt$('shaderSpriteVert'), Game$Companion_getInstance().INSTANCE.assets.get_3zqiyt$('shaderSpriteFrag'));
  }
  Object.defineProperty(SpriteMesh.prototype, 'attributes', {
    get: function () {
      return listOf([new Mesh$Attribute('position', 2, GLEnums_getInstance().FLOAT, false), new Mesh$Attribute('texCoord', 2, GLEnums_getInstance().FLOAT, false), new Mesh$Attribute('color', 4, GLEnums_getInstance().UNSIGNED_BYTE, true)]);
    }
  });
  SpriteMesh.prototype.vertex_un7uzm$ = function (x, y, s, t, color) {
    this.data.writeFloat_mx4ult$(x);
    this.data.writeFloat_mx4ult$(y);
    this.data.writeFloat_mx4ult$(s);
    this.data.writeFloat_mx4ult$(t);
    this.data.writeInt_za3lpa$(color);
  };
  SpriteMesh.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SpriteMesh',
    interfaces: [Mesh]
  };
  function Texture(image) {
    this.image = image;
    this.gl_0 = Graphics$Companion_getInstance().gl();
    this.tex_0 = this.gl_0.createTexture();
    this.gl_0.bindTexture_qyn0wr$(GLEnums_getInstance().TEXTURE_2D, this.tex_0);
    this.gl_0.texImage2D_fc7h0x$(GLEnums_getInstance().TEXTURE_2D, 0, GLEnums_getInstance().RGBA, this.image.width, this.image.height, 0, GLEnums_getInstance().RGBA, GLEnums_getInstance().UNSIGNED_BYTE, this.copyImageData_0());
    this.gl_0.texParameteri_z760u5$(GLEnums_getInstance().TEXTURE_2D, GLEnums_getInstance().TEXTURE_WRAP_S, GLEnums_getInstance().CLAMP_TO_EDGE);
    this.gl_0.texParameteri_z760u5$(GLEnums_getInstance().TEXTURE_2D, GLEnums_getInstance().TEXTURE_WRAP_T, GLEnums_getInstance().CLAMP_TO_EDGE);
    this.gl_0.texParameteri_z760u5$(GLEnums_getInstance().TEXTURE_2D, GLEnums_getInstance().TEXTURE_MIN_FILTER, GLEnums_getInstance().NEAREST);
    this.gl_0.texParameteri_z760u5$(GLEnums_getInstance().TEXTURE_2D, GLEnums_getInstance().TEXTURE_MAG_FILTER, GLEnums_getInstance().NEAREST);
  }
  Object.defineProperty(Texture.prototype, 'texture', {
    get: function () {
      return this;
    }
  });
  Object.defineProperty(Texture.prototype, 'xMin', {
    get: function () {
      return 0.0;
    }
  });
  Object.defineProperty(Texture.prototype, 'yMin', {
    get: function () {
      return 0.0;
    }
  });
  Object.defineProperty(Texture.prototype, 'xMax', {
    get: function () {
      return this.image.width;
    }
  });
  Object.defineProperty(Texture.prototype, 'yMax', {
    get: function () {
      return this.image.height;
    }
  });
  Object.defineProperty(Texture.prototype, 'width', {
    get: function () {
      return this.image.width;
    }
  });
  Object.defineProperty(Texture.prototype, 'height', {
    get: function () {
      return this.image.height;
    }
  });
  Texture.prototype.bind = function () {
    this.gl_0.bindTexture_qyn0wr$(GLEnums_getInstance().TEXTURE_2D, this.tex_0);
  };
  Texture.prototype.dispose = function () {
    this.gl_0.deleteTexture_ub7p5h$(this.tex_0);
  };
  Texture.prototype.copyImageData_0 = function () {
    var tmp$;
    var memory = new Memory(Kotlin.imul(4 * this.image.width | 0, this.image.height));
    tmp$ = this.image.pixels;
    for (var i = 0; i !== tmp$.length; ++i) {
      memory.writeInt_za3lpa$(this.image.pixels[i]);
    }
    memory.flip();
    return memory;
  };
  Texture.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Texture',
    interfaces: [TextureRegion, Disposable]
  };
  function TextureRegion() {
  }
  Object.defineProperty(TextureRegion.prototype, 'sMin', {
    get: function () {
      return this.xMin / this.texture.width;
    }
  });
  Object.defineProperty(TextureRegion.prototype, 'tMin', {
    get: function () {
      return this.yMin / this.texture.height;
    }
  });
  Object.defineProperty(TextureRegion.prototype, 'sMax', {
    get: function () {
      return this.xMax / this.texture.width;
    }
  });
  Object.defineProperty(TextureRegion.prototype, 'tMax', {
    get: function () {
      return this.yMax / this.texture.height;
    }
  });
  TextureRegion.prototype.create_7b5o5w$ = function (x, y, w, h) {
    return new TextureRegion$Impl(this.texture, x + this.xMin, y + this.yMin, x + w + this.xMin, y + h + this.yMin);
  };
  function TextureRegion$Impl(texture, xMin, yMin, xMax, yMax) {
    this.texture_3jcziy$_0 = texture;
    this.xMin_k00y9z$_0 = xMin;
    this.yMin_jzh5om$_0 = yMin;
    this.xMax_k013yx$_0 = xMax;
    this.yMax_jzhbdk$_0 = yMax;
  }
  Object.defineProperty(TextureRegion$Impl.prototype, 'texture', {
    get: function () {
      return this.texture_3jcziy$_0;
    }
  });
  Object.defineProperty(TextureRegion$Impl.prototype, 'xMin', {
    get: function () {
      return this.xMin_k00y9z$_0;
    }
  });
  Object.defineProperty(TextureRegion$Impl.prototype, 'yMin', {
    get: function () {
      return this.yMin_jzh5om$_0;
    }
  });
  Object.defineProperty(TextureRegion$Impl.prototype, 'xMax', {
    get: function () {
      return this.xMax_k013yx$_0;
    }
  });
  Object.defineProperty(TextureRegion$Impl.prototype, 'yMax', {
    get: function () {
      return this.yMax_jzhbdk$_0;
    }
  });
  TextureRegion$Impl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Impl',
    interfaces: [TextureRegion]
  };
  TextureRegion.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TextureRegion',
    interfaces: [BoundingBox]
  };
  function Key(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Key_initFields() {
    Key_initFields = function () {
    };
    Key$A_instance = new Key('A', 0);
    Key$B_instance = new Key('B', 1);
    Key$C_instance = new Key('C', 2);
    Key$D_instance = new Key('D', 3);
    Key$E_instance = new Key('E', 4);
    Key$F_instance = new Key('F', 5);
    Key$G_instance = new Key('G', 6);
    Key$H_instance = new Key('H', 7);
    Key$I_instance = new Key('I', 8);
    Key$J_instance = new Key('J', 9);
    Key$K_instance = new Key('K', 10);
    Key$L_instance = new Key('L', 11);
    Key$M_instance = new Key('M', 12);
    Key$N_instance = new Key('N', 13);
    Key$O_instance = new Key('O', 14);
    Key$P_instance = new Key('P', 15);
    Key$Q_instance = new Key('Q', 16);
    Key$R_instance = new Key('R', 17);
    Key$S_instance = new Key('S', 18);
    Key$SPACE_instance = new Key('SPACE', 19);
    Key$T_instance = new Key('T', 20);
    Key$U_instance = new Key('U', 21);
    Key$V_instance = new Key('V', 22);
    Key$W_instance = new Key('W', 23);
    Key$X_instance = new Key('X', 24);
    Key$Y_instance = new Key('Y', 25);
    Key$Z_instance = new Key('Z', 26);
  }
  var Key$A_instance;
  function Key$A_getInstance() {
    Key_initFields();
    return Key$A_instance;
  }
  var Key$B_instance;
  function Key$B_getInstance() {
    Key_initFields();
    return Key$B_instance;
  }
  var Key$C_instance;
  function Key$C_getInstance() {
    Key_initFields();
    return Key$C_instance;
  }
  var Key$D_instance;
  function Key$D_getInstance() {
    Key_initFields();
    return Key$D_instance;
  }
  var Key$E_instance;
  function Key$E_getInstance() {
    Key_initFields();
    return Key$E_instance;
  }
  var Key$F_instance;
  function Key$F_getInstance() {
    Key_initFields();
    return Key$F_instance;
  }
  var Key$G_instance;
  function Key$G_getInstance() {
    Key_initFields();
    return Key$G_instance;
  }
  var Key$H_instance;
  function Key$H_getInstance() {
    Key_initFields();
    return Key$H_instance;
  }
  var Key$I_instance;
  function Key$I_getInstance() {
    Key_initFields();
    return Key$I_instance;
  }
  var Key$J_instance;
  function Key$J_getInstance() {
    Key_initFields();
    return Key$J_instance;
  }
  var Key$K_instance;
  function Key$K_getInstance() {
    Key_initFields();
    return Key$K_instance;
  }
  var Key$L_instance;
  function Key$L_getInstance() {
    Key_initFields();
    return Key$L_instance;
  }
  var Key$M_instance;
  function Key$M_getInstance() {
    Key_initFields();
    return Key$M_instance;
  }
  var Key$N_instance;
  function Key$N_getInstance() {
    Key_initFields();
    return Key$N_instance;
  }
  var Key$O_instance;
  function Key$O_getInstance() {
    Key_initFields();
    return Key$O_instance;
  }
  var Key$P_instance;
  function Key$P_getInstance() {
    Key_initFields();
    return Key$P_instance;
  }
  var Key$Q_instance;
  function Key$Q_getInstance() {
    Key_initFields();
    return Key$Q_instance;
  }
  var Key$R_instance;
  function Key$R_getInstance() {
    Key_initFields();
    return Key$R_instance;
  }
  var Key$S_instance;
  function Key$S_getInstance() {
    Key_initFields();
    return Key$S_instance;
  }
  var Key$SPACE_instance;
  function Key$SPACE_getInstance() {
    Key_initFields();
    return Key$SPACE_instance;
  }
  var Key$T_instance;
  function Key$T_getInstance() {
    Key_initFields();
    return Key$T_instance;
  }
  var Key$U_instance;
  function Key$U_getInstance() {
    Key_initFields();
    return Key$U_instance;
  }
  var Key$V_instance;
  function Key$V_getInstance() {
    Key_initFields();
    return Key$V_instance;
  }
  var Key$W_instance;
  function Key$W_getInstance() {
    Key_initFields();
    return Key$W_instance;
  }
  var Key$X_instance;
  function Key$X_getInstance() {
    Key_initFields();
    return Key$X_instance;
  }
  var Key$Y_instance;
  function Key$Y_getInstance() {
    Key_initFields();
    return Key$Y_instance;
  }
  var Key$Z_instance;
  function Key$Z_getInstance() {
    Key_initFields();
    return Key$Z_instance;
  }
  Key.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Key',
    interfaces: [Enum]
  };
  function Key$values() {
    return [Key$A_getInstance(), Key$B_getInstance(), Key$C_getInstance(), Key$D_getInstance(), Key$E_getInstance(), Key$F_getInstance(), Key$G_getInstance(), Key$H_getInstance(), Key$I_getInstance(), Key$J_getInstance(), Key$K_getInstance(), Key$L_getInstance(), Key$M_getInstance(), Key$N_getInstance(), Key$O_getInstance(), Key$P_getInstance(), Key$Q_getInstance(), Key$R_getInstance(), Key$S_getInstance(), Key$SPACE_getInstance(), Key$T_getInstance(), Key$U_getInstance(), Key$V_getInstance(), Key$W_getInstance(), Key$X_getInstance(), Key$Y_getInstance(), Key$Z_getInstance()];
  }
  Key.values = Key$values;
  function Key$valueOf(name) {
    switch (name) {
      case 'A':
        return Key$A_getInstance();
      case 'B':
        return Key$B_getInstance();
      case 'C':
        return Key$C_getInstance();
      case 'D':
        return Key$D_getInstance();
      case 'E':
        return Key$E_getInstance();
      case 'F':
        return Key$F_getInstance();
      case 'G':
        return Key$G_getInstance();
      case 'H':
        return Key$H_getInstance();
      case 'I':
        return Key$I_getInstance();
      case 'J':
        return Key$J_getInstance();
      case 'K':
        return Key$K_getInstance();
      case 'L':
        return Key$L_getInstance();
      case 'M':
        return Key$M_getInstance();
      case 'N':
        return Key$N_getInstance();
      case 'O':
        return Key$O_getInstance();
      case 'P':
        return Key$P_getInstance();
      case 'Q':
        return Key$Q_getInstance();
      case 'R':
        return Key$R_getInstance();
      case 'S':
        return Key$S_getInstance();
      case 'SPACE':
        return Key$SPACE_getInstance();
      case 'T':
        return Key$T_getInstance();
      case 'U':
        return Key$U_getInstance();
      case 'V':
        return Key$V_getInstance();
      case 'W':
        return Key$W_getInstance();
      case 'X':
        return Key$X_getInstance();
      case 'Y':
        return Key$Y_getInstance();
      case 'Z':
        return Key$Z_getInstance();
      default:throwISE('No enum constant dw.input.Key.' + name);
    }
  }
  Key.valueOf_61zpoe$ = Key$valueOf;
  function Keyboard() {
    this.$delegate_y9490a$_0 = new Listener$ManagerImpl();
    this.keys_0 = HashSet_init();
  }
  Keyboard.prototype.isKeyDown_ysv3wg$ = function (key) {
    return this.keys_0.contains_11rb$(key);
  };
  function Keyboard$updateKey$lambda(closure$key) {
    return function (it) {
      return it.keyPress_ysv3wg$(closure$key);
    };
  }
  function Keyboard$updateKey$lambda_0(closure$key) {
    return function (it) {
      return it.keyRelease_ysv3wg$(closure$key);
    };
  }
  Keyboard.prototype.updateKey_ukz1ca$ = function (key, pressed) {
    if (pressed) {
      this.keys_0.add_11rb$(key);
      this.notifyListeners_kzzaej$(Keyboard$updateKey$lambda(key));
    }
     else {
      this.keys_0.remove_11rb$(key);
      this.notifyListeners_kzzaej$(Keyboard$updateKey$lambda_0(key));
    }
  };
  function Keyboard$updateType$lambda(closure$c) {
    return function (it) {
      return it.keyType_s8itvh$(closure$c);
    };
  }
  Keyboard.prototype.updateType_8e8zqy$ = function (c) {
    this.notifyListeners_kzzaej$(Keyboard$updateType$lambda(c));
  };
  Keyboard.prototype.attachListener_g5nvwe$ = function (listener) {
    return this.$delegate_y9490a$_0.attachListener_g5nvwe$(listener);
  };
  Keyboard.prototype.detachListener_g5nvwe$ = function (listener) {
    return this.$delegate_y9490a$_0.detachListener_g5nvwe$(listener);
  };
  Keyboard.prototype.notifyListeners_kzzaej$ = function (callback) {
    return this.$delegate_y9490a$_0.notifyListeners_kzzaej$(callback);
  };
  Keyboard.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Keyboard',
    interfaces: [Listener$Manager]
  };
  function KeyListener() {
  }
  KeyListener.prototype.keyType_s8itvh$ = function (c) {
    return false;
  };
  KeyListener.prototype.keyPress_ysv3wg$ = function (key) {
    return false;
  };
  KeyListener.prototype.keyRelease_ysv3wg$ = function (key) {
    return false;
  };
  KeyListener.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'KeyListener',
    interfaces: [Listener]
  };
  function Mouse() {
    this.$delegate_b2wo7a$_0 = new Listener$ManagerImpl();
    this.buttons_0 = HashSet_init();
    this.clicks_0 = 0;
    this.lastPress_0 = 0.0;
    this.lastRelease_0 = 0.0;
    this.dragging_0 = false;
    this.lastX_0 = 0.0;
    this.lastY_0 = 0.0;
    this.dragX_0 = 0.0;
    this.dragY_0 = 0.0;
    this.x_qgu0bu$_0 = 0.0;
    this.y_qgu0cp$_0 = 0.0;
    this.clickDelay = 0.15;
  }
  Object.defineProperty(Mouse.prototype, 'x', {
    get: function () {
      return this.x_qgu0bu$_0;
    },
    set: function (x) {
      this.x_qgu0bu$_0 = x;
    }
  });
  Object.defineProperty(Mouse.prototype, 'y', {
    get: function () {
      return this.y_qgu0cp$_0;
    },
    set: function (y) {
      this.y_qgu0cp$_0 = y;
    }
  });
  Mouse.prototype.isButtonDown_8dmje0$ = function (button) {
    return this.buttons_0.contains_11rb$(button);
  };
  function Mouse$refresh$lambda(this$Mouse) {
    return function (it) {
      return it.mouseClick_nhq4am$(this$Mouse.clicks_0, this$Mouse.x, this$Mouse.y);
    };
  }
  function Mouse$refresh$lambda_0(this$Mouse) {
    return function (it) {
      return it.mouseDragEnter_dleff0$(this$Mouse.x, this$Mouse.y);
    };
  }
  function Mouse$refresh$lambda_1(closure$dx, closure$dy) {
    return function (it) {
      return it.mouseDragUpdate_dleff0$(closure$dx, closure$dy);
    };
  }
  Mouse.prototype.refresh_8be2vx$ = function () {
    if (this.clicks_0 > 0) {
      this.notifyListeners_kzzaej$(Mouse$refresh$lambda(this));
      this.clicks_0 = 0;
    }
    var tmp$ = this.isButtonDown_8dmje0$(MouseButton$LEFT_getInstance()) && this.lastPress_0 - this.lastRelease_0 >= this.clickDelay;
    if (tmp$) {
      var x = this.lastX_0 - this.x;
      var tmp$_0 = Math_0.abs(x) >= 5.0;
      if (!tmp$_0) {
        var x_0 = this.lastY_0 - this.y;
        tmp$_0 = Math_0.abs(x_0) >= 5.0;
      }
      tmp$ = tmp$_0;
    }
    if (tmp$ && !this.dragging_0) {
      this.dragX_0 = this.x;
      this.dragY_0 = this.y;
      this.dragging_0 = true;
      this.notifyListeners_kzzaej$(Mouse$refresh$lambda_0(this));
    }
    if (this.dragging_0) {
      var dx = this.x - this.dragX_0;
      var dy = this.y - this.dragY_0;
      if (dx !== 0.0 || dy !== 0.0) {
        this.notifyListeners_kzzaej$(Mouse$refresh$lambda_1(dx, dy));
        this.dragX_0 = this.x;
        this.dragY_0 = this.y;
      }
    }
  };
  function Mouse$updatePos$lambda(closure$x, closure$y) {
    return function (it) {
      return it.mouseMove_dleff0$(closure$x, closure$y);
    };
  }
  Mouse.prototype.updatePos_dob1fz$ = function (x, y) {
    this.lastX_0 = this.x;
    this.lastY_0 = this.y;
    this.x = x;
    this.y = y;
    this.notifyListeners_kzzaej$(Mouse$updatePos$lambda(x, y));
  };
  function Mouse$updateButton$lambda(closure$button, this$Mouse) {
    return function (it) {
      return it.mouseButtonPress_9wjh2w$(closure$button, this$Mouse.x, this$Mouse.y);
    };
  }
  function Mouse$updateButton$lambda_0(closure$button, this$Mouse) {
    return function (it) {
      return it.mouseButtonRelease_9wjh2w$(closure$button, this$Mouse.x, this$Mouse.y);
    };
  }
  function Mouse$updateButton$lambda_1(this$Mouse) {
    return function (it) {
      return it.mouseDragLeave_dleff0$(this$Mouse.x, this$Mouse.y);
    };
  }
  Mouse.prototype.updateButton_9zb49a$ = function (button, pressed) {
    if (pressed) {
      this.buttons_0.add_11rb$(button);
      this.notifyListeners_kzzaej$(Mouse$updateButton$lambda(button, this));
      if (button === MouseButton$LEFT_getInstance()) {
        this.lastPress_0 = elapsedTime();
      }
    }
     else {
      this.buttons_0.remove_11rb$(button);
      this.notifyListeners_kzzaej$(Mouse$updateButton$lambda_0(button, this));
      if (button === MouseButton$LEFT_getInstance()) {
        if (elapsedTime() - this.lastPress_0 < this.clickDelay) {
          this.clicks_0 = this.clicks_0 + 1 | 0;
        }
        if (this.dragging_0) {
          this.dragging_0 = false;
          this.notifyListeners_kzzaej$(Mouse$updateButton$lambda_1(this));
        }
        this.lastRelease_0 = elapsedTime();
      }
    }
  };
  Mouse.prototype.attachListener_g5nvwe$ = function (listener) {
    return this.$delegate_b2wo7a$_0.attachListener_g5nvwe$(listener);
  };
  Mouse.prototype.detachListener_g5nvwe$ = function (listener) {
    return this.$delegate_b2wo7a$_0.detachListener_g5nvwe$(listener);
  };
  Mouse.prototype.notifyListeners_kzzaej$ = function (callback) {
    return this.$delegate_b2wo7a$_0.notifyListeners_kzzaej$(callback);
  };
  Mouse.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Mouse',
    interfaces: [Listener$Manager]
  };
  function MouseButton(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MouseButton_initFields() {
    MouseButton_initFields = function () {
    };
    MouseButton$LEFT_instance = new MouseButton('LEFT', 0);
    MouseButton$MIDDLE_instance = new MouseButton('MIDDLE', 1);
    MouseButton$RIGHT_instance = new MouseButton('RIGHT', 2);
  }
  var MouseButton$LEFT_instance;
  function MouseButton$LEFT_getInstance() {
    MouseButton_initFields();
    return MouseButton$LEFT_instance;
  }
  var MouseButton$MIDDLE_instance;
  function MouseButton$MIDDLE_getInstance() {
    MouseButton_initFields();
    return MouseButton$MIDDLE_instance;
  }
  var MouseButton$RIGHT_instance;
  function MouseButton$RIGHT_getInstance() {
    MouseButton_initFields();
    return MouseButton$RIGHT_instance;
  }
  MouseButton.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MouseButton',
    interfaces: [Enum]
  };
  function MouseButton$values() {
    return [MouseButton$LEFT_getInstance(), MouseButton$MIDDLE_getInstance(), MouseButton$RIGHT_getInstance()];
  }
  MouseButton.values = MouseButton$values;
  function MouseButton$valueOf(name) {
    switch (name) {
      case 'LEFT':
        return MouseButton$LEFT_getInstance();
      case 'MIDDLE':
        return MouseButton$MIDDLE_getInstance();
      case 'RIGHT':
        return MouseButton$RIGHT_getInstance();
      default:throwISE('No enum constant dw.input.MouseButton.' + name);
    }
  }
  MouseButton.valueOf_61zpoe$ = MouseButton$valueOf;
  function MouseListener() {
  }
  MouseListener.prototype.mouseMove_dleff0$ = function (x, y) {
    return false;
  };
  MouseListener.prototype.mouseButtonPress_9wjh2w$ = function (button, x, y) {
    return false;
  };
  MouseListener.prototype.mouseButtonRelease_9wjh2w$ = function (button, x, y) {
    return false;
  };
  MouseListener.prototype.mouseClick_nhq4am$ = function (clicks, x, y) {
    return false;
  };
  MouseListener.prototype.mouseDragEnter_dleff0$ = function (x, y) {
    return false;
  };
  MouseListener.prototype.mouseDragUpdate_dleff0$ = function (dx, dy) {
    return false;
  };
  MouseListener.prototype.mouseDragLeave_dleff0$ = function (x, y) {
    return false;
  };
  MouseListener.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MouseListener',
    interfaces: [Listener]
  };
  function InputQueue(game) {
    this.game_0 = game;
    this.queue_0 = ArrayList_init();
  }
  InputQueue.prototype.process_8be2vx$ = function () {
    var iterator = this.queue_0.iterator();
    while (iterator.hasNext()) {
      var event = iterator.next();
      if (Kotlin.isType(event, MouseUpdate$Press))
        this.game_0.mouse.updateButton_9zb49a$(event.button, true);
      else if (Kotlin.isType(event, MouseUpdate$Release))
        this.game_0.mouse.updateButton_9zb49a$(event.button, false);
      else if (Kotlin.isType(event, MouseUpdate$Move))
        this.game_0.mouse.updatePos_dob1fz$(event.x, event.y);
      else if (Kotlin.isType(event, KeyUpdate$Press))
        this.game_0.keyboard.updateKey_ukz1ca$(event.key, true);
      else if (Kotlin.isType(event, KeyUpdate$Release))
        this.game_0.keyboard.updateKey_ukz1ca$(event.key, false);
      else if (Kotlin.isType(event, KeyUpdate$Type))
        this.game_0.keyboard.updateType_8e8zqy$(unboxChar(event.c));
      else
        throw IllegalStateException_init('Cannot process event ' + Kotlin.getKClassFromExpression(event));
      iterator.remove();
    }
  };
  InputQueue.prototype.submit_o4y3mt$ = function (update) {
    this.queue_0.add_11rb$(update);
  };
  InputQueue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InputQueue',
    interfaces: []
  };
  function KeyUpdate() {
  }
  function KeyUpdate$Type(c) {
    KeyUpdate.call(this);
    this.c = toBoxedChar(c);
  }
  KeyUpdate$Type.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Type',
    interfaces: [KeyUpdate]
  };
  function KeyUpdate$Press(key) {
    KeyUpdate.call(this);
    this.key = key;
  }
  KeyUpdate$Press.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Press',
    interfaces: [KeyUpdate]
  };
  function KeyUpdate$Release(key) {
    KeyUpdate.call(this);
    this.key = key;
  }
  KeyUpdate$Release.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Release',
    interfaces: [KeyUpdate]
  };
  KeyUpdate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KeyUpdate',
    interfaces: [QueueUpdate]
  };
  function MouseUpdate() {
  }
  function MouseUpdate$Move(x, y) {
    MouseUpdate.call(this);
    this.x = x;
    this.y = y;
  }
  MouseUpdate$Move.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Move',
    interfaces: [MouseUpdate]
  };
  function MouseUpdate$Press(button) {
    MouseUpdate.call(this);
    this.button = button;
  }
  MouseUpdate$Press.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Press',
    interfaces: [MouseUpdate]
  };
  function MouseUpdate$Release(button) {
    MouseUpdate.call(this);
    this.button = button;
  }
  MouseUpdate$Release.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Release',
    interfaces: [MouseUpdate]
  };
  MouseUpdate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MouseUpdate',
    interfaces: [QueueUpdate]
  };
  function QueueUpdate() {
  }
  QueueUpdate.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'QueueUpdate',
    interfaces: []
  };
  function BoundingBox() {
  }
  Object.defineProperty(BoundingBox.prototype, 'ww', {
    get: function () {
      return this.xMax - this.xMin;
    }
  });
  Object.defineProperty(BoundingBox.prototype, 'hh', {
    get: function () {
      return this.yMax - this.yMin;
    }
  });
  BoundingBox.prototype.inside_dleff0$ = function (x, y) {
    return x >= this.xMin && x <= this.xMax && y >= this.yMin && y <= this.yMax;
  };
  BoundingBox.prototype.inside_13o58c$ = function (box) {
    return this.xMin <= box.xMin && this.xMax >= box.xMax && this.yMin <= box.yMin && this.yMax >= box.yMax;
  };
  BoundingBox.prototype.intersects_13o58c$ = function (box) {
    return !(box.xMin > this.xMax || box.xMax < this.xMin || box.yMin > this.yMax || box.yMax < this.yMin);
  };
  BoundingBox.prototype.union_13o58c$ = function (box) {
    var a = this.xMin;
    var b = box.xMin;
    var tmp$ = Math_0.min(a, b);
    var a_0 = this.yMin;
    var b_0 = box.yMin;
    var tmp$_0 = Math_0.min(a_0, b_0);
    var a_1 = this.xMax;
    var b_1 = box.xMax;
    var tmp$_1 = Math_0.max(a_1, b_1);
    var a_2 = this.yMax;
    var b_2 = box.yMax;
    return new BoundingBox$Impl(tmp$, tmp$_0, tmp$_1, Math_0.max(a_2, b_2));
  };
  function BoundingBox$Impl(xMin, yMin, xMax, yMax) {
    this.xMin_n7ibp8$_0 = xMin;
    this.yMin_n6yj3v$_0 = yMin;
    this.xMax_n7ihe6$_0 = xMax;
    this.yMax_n6yost$_0 = yMax;
  }
  Object.defineProperty(BoundingBox$Impl.prototype, 'xMin', {
    get: function () {
      return this.xMin_n7ibp8$_0;
    }
  });
  Object.defineProperty(BoundingBox$Impl.prototype, 'yMin', {
    get: function () {
      return this.yMin_n6yj3v$_0;
    }
  });
  Object.defineProperty(BoundingBox$Impl.prototype, 'xMax', {
    get: function () {
      return this.xMax_n7ihe6$_0;
    }
  });
  Object.defineProperty(BoundingBox$Impl.prototype, 'yMax', {
    get: function () {
      return this.yMax_n6yost$_0;
    }
  });
  BoundingBox$Impl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Impl',
    interfaces: [BoundingBox]
  };
  BoundingBox.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BoundingBox',
    interfaces: []
  };
  function clamp($receiver, lower, upper) {
    var b = Math_0.min(upper, $receiver);
    return Math_0.max(lower, b);
  }
  function interpolate(f0, f1, alpha) {
    return alpha * f0 + (1.0 - alpha) * f1;
  }
  function deg2rad(angle) {
    return math.PI * (angle / 180.0);
  }
  function rad2deg(angle) {
    return 180.0 * (angle / math.PI);
  }
  function Matrix4(values) {
    MatrixBase.call(this, values);
  }
  Object.defineProperty(Matrix4.prototype, 'xx', {
    get: defineInlineFunction('DungeonWorld.dw.math.Matrix4.get_xx', function () {
      return this.values[0];
    }),
    set: defineInlineFunction('DungeonWorld.dw.math.Matrix4.set_xx_mx4ult$', function (value) {
      this.values[0] = value;
    })
  });
  Object.defineProperty(Matrix4.prototype, 'yx', {
    get: defineInlineFunction('DungeonWorld.dw.math.Matrix4.get_yx', function () {
      return this.values[1];
    }),
    set: defineInlineFunction('DungeonWorld.dw.math.Matrix4.set_yx_mx4ult$', function (value) {
      this.values[1] = value;
    })
  });
  Object.defineProperty(Matrix4.prototype, 'zx', {
    get: defineInlineFunction('DungeonWorld.dw.math.Matrix4.get_zx', function () {
      return this.values[2];
    }),
    set: defineInlineFunction('DungeonWorld.dw.math.Matrix4.set_zx_mx4ult$', function (value) {
      this.values[2] = value;
    })
  });
  Object.defineProperty(Matrix4.prototype, 'wx', {
    get: defineInlineFunction('DungeonWorld.dw.math.Matrix4.get_wx', function () {
      return this.values[3];
    }),
    set: defineInlineFunction('DungeonWorld.dw.math.Matrix4.set_wx_mx4ult$', function (value) {
      this.values[3] = value;
    })
  });
  Object.defineProperty(Matrix4.prototype, 'xy', {
    get: defineInlineFunction('DungeonWorld.dw.math.Matrix4.get_xy', function () {
      return this.values[4];
    }),
    set: defineInlineFunction('DungeonWorld.dw.math.Matrix4.set_xy_mx4ult$', function (value) {
      this.values[4] = value;
    })
  });
  Object.defineProperty(Matrix4.prototype, 'yy', {
    get: defineInlineFunction('DungeonWorld.dw.math.Matrix4.get_yy', function () {
      return this.values[5];
    }),
    set: defineInlineFunction('DungeonWorld.dw.math.Matrix4.set_yy_mx4ult$', function (value) {
      this.values[5] = value;
    })
  });
  Object.defineProperty(Matrix4.prototype, 'zy', {
    get: defineInlineFunction('DungeonWorld.dw.math.Matrix4.get_zy', function () {
      return this.values[6];
    }),
    set: defineInlineFunction('DungeonWorld.dw.math.Matrix4.set_zy_mx4ult$', function (value) {
      this.values[6] = value;
    })
  });
  Object.defineProperty(Matrix4.prototype, 'wy', {
    get: defineInlineFunction('DungeonWorld.dw.math.Matrix4.get_wy', function () {
      return this.values[7];
    }),
    set: defineInlineFunction('DungeonWorld.dw.math.Matrix4.set_wy_mx4ult$', function (value) {
      this.values[7] = value;
    })
  });
  Object.defineProperty(Matrix4.prototype, 'xz', {
    get: defineInlineFunction('DungeonWorld.dw.math.Matrix4.get_xz', function () {
      return this.values[8];
    }),
    set: defineInlineFunction('DungeonWorld.dw.math.Matrix4.set_xz_mx4ult$', function (value) {
      this.values[8] = value;
    })
  });
  Object.defineProperty(Matrix4.prototype, 'yz', {
    get: defineInlineFunction('DungeonWorld.dw.math.Matrix4.get_yz', function () {
      return this.values[9];
    }),
    set: defineInlineFunction('DungeonWorld.dw.math.Matrix4.set_yz_mx4ult$', function (value) {
      this.values[9] = value;
    })
  });
  Object.defineProperty(Matrix4.prototype, 'zz', {
    get: defineInlineFunction('DungeonWorld.dw.math.Matrix4.get_zz', function () {
      return this.values[10];
    }),
    set: defineInlineFunction('DungeonWorld.dw.math.Matrix4.set_zz_mx4ult$', function (value) {
      this.values[10] = value;
    })
  });
  Object.defineProperty(Matrix4.prototype, 'wz', {
    get: defineInlineFunction('DungeonWorld.dw.math.Matrix4.get_wz', function () {
      return this.values[11];
    }),
    set: defineInlineFunction('DungeonWorld.dw.math.Matrix4.set_wz_mx4ult$', function (value) {
      this.values[11] = value;
    })
  });
  Object.defineProperty(Matrix4.prototype, 'xw', {
    get: defineInlineFunction('DungeonWorld.dw.math.Matrix4.get_xw', function () {
      return this.values[12];
    }),
    set: defineInlineFunction('DungeonWorld.dw.math.Matrix4.set_xw_mx4ult$', function (value) {
      this.values[12] = value;
    })
  });
  Object.defineProperty(Matrix4.prototype, 'yw', {
    get: defineInlineFunction('DungeonWorld.dw.math.Matrix4.get_yw', function () {
      return this.values[13];
    }),
    set: defineInlineFunction('DungeonWorld.dw.math.Matrix4.set_yw_mx4ult$', function (value) {
      this.values[13] = value;
    })
  });
  Object.defineProperty(Matrix4.prototype, 'zw', {
    get: defineInlineFunction('DungeonWorld.dw.math.Matrix4.get_zw', function () {
      return this.values[14];
    }),
    set: defineInlineFunction('DungeonWorld.dw.math.Matrix4.set_zw_mx4ult$', function (value) {
      this.values[14] = value;
    })
  });
  Object.defineProperty(Matrix4.prototype, 'ww', {
    get: defineInlineFunction('DungeonWorld.dw.math.Matrix4.get_ww', function () {
      return this.values[15];
    }),
    set: defineInlineFunction('DungeonWorld.dw.math.Matrix4.set_ww_mx4ult$', function (value) {
      this.values[15] = value;
    })
  });
  Matrix4.prototype.copy = function () {
    return new Matrix4(this.values.slice());
  };
  Matrix4.prototype.identity = function () {
    this.values[0] = 1.0;
    this.values[4] = 0.0;
    this.values[8] = 0.0;
    this.values[12] = 0.0;
    this.values[1] = 0.0;
    this.values[5] = 1.0;
    this.values[9] = 0.0;
    this.values[13] = 0.0;
    this.values[2] = 0.0;
    this.values[6] = 0.0;
    this.values[10] = 1.0;
    this.values[14] = 0.0;
    this.values[3] = 0.0;
    this.values[7] = 0.0;
    this.values[11] = 0.0;
    this.values[15] = 1.0;
    return this;
  };
  Matrix4.prototype.set_90d5i2$ = function (m) {
    var $receiver = m.values;
    arrayCopy($receiver, this.values, 0, 0, $receiver.length);
    return this;
  };
  Matrix4.prototype.times_90d5i2$ = function (m) {
    var c = this.copy();
    var value = c.values[0] * m.values[0] + c.values[4] * m.values[1] + c.values[8] * m.values[2] + c.values[12] * m.values[3];
    this.values[0] = value;
    var value_0 = c.values[0] * m.values[4] + c.values[4] * m.values[5] + c.values[8] * m.values[6] + c.values[12] * m.values[7];
    this.values[4] = value_0;
    var value_1 = c.values[0] * m.values[8] + c.values[4] * m.values[9] + c.values[8] * m.values[10] + c.values[12] * m.values[11];
    this.values[8] = value_1;
    var value_2 = c.values[0] * m.values[12] + c.values[4] * m.values[13] + c.values[8] * m.values[14] + c.values[12] * m.values[15];
    this.values[12] = value_2;
    var value_3 = c.values[1] * m.values[0] + c.values[5] * m.values[1] + c.values[9] * m.values[2] + c.values[13] * m.values[3];
    this.values[1] = value_3;
    var value_4 = c.values[1] * m.values[4] + c.values[5] * m.values[5] + c.values[9] * m.values[6] + c.values[13] * m.values[7];
    this.values[5] = value_4;
    var value_5 = c.values[1] * m.values[8] + c.values[5] * m.values[9] + c.values[9] * m.values[10] + c.values[13] * m.values[11];
    this.values[9] = value_5;
    var value_6 = c.values[1] * m.values[12] + c.values[5] * m.values[13] + c.values[9] * m.values[14] + c.values[13] * m.values[15];
    this.values[13] = value_6;
    var value_7 = c.values[2] * m.values[0] + c.values[6] * m.values[1] + c.values[10] * m.values[2] + c.values[14] * m.values[3];
    this.values[2] = value_7;
    var value_8 = c.values[2] * m.values[4] + c.values[6] * m.values[5] + c.values[10] * m.values[6] + c.values[14] * m.values[7];
    this.values[6] = value_8;
    var value_9 = c.values[2] * m.values[8] + c.values[6] * m.values[9] + c.values[10] * m.values[10] + c.values[14] * m.values[11];
    this.values[10] = value_9;
    var value_10 = c.values[2] * m.values[12] + c.values[6] * m.values[13] + c.values[10] * m.values[14] + c.values[14] * m.values[15];
    this.values[14] = value_10;
    var value_11 = c.values[3] * m.values[0] + c.values[7] * m.values[1] + c.values[11] * m.values[2] + c.values[15] * m.values[3];
    this.values[3] = value_11;
    var value_12 = c.values[3] * m.values[4] + c.values[7] * m.values[5] + c.values[11] * m.values[6] + c.values[15] * m.values[7];
    this.values[7] = value_12;
    var value_13 = c.values[3] * m.values[8] + c.values[7] * m.values[9] + c.values[11] * m.values[10] + c.values[15] * m.values[11];
    this.values[11] = value_13;
    var value_14 = c.values[3] * m.values[12] + c.values[7] * m.values[13] + c.values[11] * m.values[14] + c.values[15] * m.values[15];
    this.values[15] = value_14;
    return this;
  };
  Matrix4.prototype.ortho_w8lrqs$ = function (left, right, bottom, top, near, far) {
    var $receiver = this.identity();
    var value = 2.0 / (right - left);
    $receiver.values[0] = value;
    var value_0 = 2.0 / (top - bottom);
    $receiver.values[5] = value_0;
    var value_1 = -2.0 / (far - near);
    $receiver.values[10] = value_1;
    var value_2 = -(right + left) / (right - left);
    $receiver.values[12] = value_2;
    var value_3 = -(top + bottom) / (top - bottom);
    $receiver.values[13] = value_3;
    var value_4 = -(far + near) / (far - near);
    $receiver.values[14] = value_4;
    return $receiver;
  };
  Matrix4.prototype.rotateZ_mx4ult$ = function (theta) {
    var $receiver = this.identity();
    var value = Math_0.cos(theta);
    $receiver.values[0] = value;
    var value_0 = -Math_0.sin(theta);
    $receiver.values[4] = value_0;
    var value_1 = -$receiver.values[4];
    $receiver.values[1] = value_1;
    var value_2 = $receiver.values[0];
    $receiver.values[5] = value_2;
    return $receiver;
  };
  Matrix4.prototype.scale_y2kzbl$ = function (sx, sy, sz) {
    if (sz === void 0)
      sz = 1.0;
    var $receiver = this.identity();
    $receiver.values[0] = sx;
    $receiver.values[5] = sy;
    $receiver.values[10] = sz;
    return $receiver;
  };
  Matrix4.prototype.translate_y2kzbl$ = function (tx, ty, tz) {
    if (tz === void 0)
      tz = 0.0;
    var $receiver = this.identity();
    $receiver.values[12] = tx;
    $receiver.values[13] = ty;
    $receiver.values[14] = tz;
    return $receiver;
  };
  Matrix4.prototype.toString = function () {
    return 'Matrix4[(' + this.values[0] + ', ' + this.values[4] + ', ' + this.values[8] + ', ' + this.values[12] + '), (' + this.values[1] + ', ' + this.values[5] + ', ' + this.values[9] + ', ' + this.values[13] + '), (' + this.values[2] + ', ' + this.values[6] + ', ' + this.values[10] + ', ' + this.values[14] + '), (' + this.values[3] + ', ' + this.values[7] + ', ' + this.values[11] + ', ' + this.values[15] + ')]';
  };
  Matrix4.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Matrix4',
    interfaces: [MatrixBase]
  };
  function Matrix4_init($this) {
    $this = $this || Object.create(Matrix4.prototype);
    Matrix4.call($this, new Float32Array([1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0]));
    return $this;
  }
  function Matrix4_init_0(xx, xy, xz, xw, yx, yy, yz, yw, zx, zy, zz, zw, wx, wy, wz, ww, $this) {
    $this = $this || Object.create(Matrix4.prototype);
    Matrix4.call($this, new Float32Array([xx, xy, xz, xw, yx, yy, yz, yw, zx, zy, zz, zw, wx, wy, wz, ww]));
    return $this;
  }
  function MatrixBase(values) {
    this.values = values;
  }
  MatrixBase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MatrixBase',
    interfaces: []
  };
  function Disposable() {
  }
  Disposable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Disposable',
    interfaces: []
  };
  function Listener() {
  }
  function Listener$Manager() {
  }
  Listener$Manager.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Manager',
    interfaces: []
  };
  function Listener$ManagerImpl() {
    this.listeners_0 = ArrayList_init();
  }
  Listener$ManagerImpl.prototype.attachListener_g5nvwe$ = function (listener) {
    if (!this.listeners_0.contains_11rb$(listener)) {
      this.listeners_0.add_11rb$(listener);
    }
  };
  Listener$ManagerImpl.prototype.detachListener_g5nvwe$ = function (listener) {
    this.listeners_0.remove_11rb$(listener);
  };
  Listener$ManagerImpl.prototype.notifyListeners_kzzaej$ = function (callback) {
    var tmp$;
    tmp$ = this.listeners_0.iterator();
    while (tmp$.hasNext()) {
      var listener = tmp$.next();
      if (callback(listener)) {
        break;
      }
    }
  };
  Listener$ManagerImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ManagerImpl',
    interfaces: [Listener$Manager]
  };
  Listener.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Listener',
    interfaces: []
  };
  function Loadable() {
    this.holder_9eb92y$_0 = null;
  }
  Object.defineProperty(Loadable.prototype, 'value', {
    get: function () {
      var value = this.holder;
      var requireNotNull$result;
      if (value == null) {
        var message = 'Required value was null.';
        throw IllegalArgumentException_init(message.toString());
      }
       else {
        requireNotNull$result = value;
      }
      return requireNotNull$result;
    }
  });
  Object.defineProperty(Loadable.prototype, 'holder', {
    get: function () {
      return this.holder_9eb92y$_0;
    },
    set: function (value) {
      if (!(this.holder == null)) {
        var message = 'Check failed.';
        throw IllegalStateException_init(message.toString());
      }
      this.holder_9eb92y$_0 = value;
    }
  });
  Loadable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Loadable',
    interfaces: []
  };
  function swapBytes($receiver) {
    return $receiver >> 24 | 65280 & $receiver >> 8 | 16711680 & $receiver << 8 | $receiver << 24;
  }
  function peek($receiver) {
    return last($receiver);
  }
  function push($receiver, element) {
    $receiver.add_11rb$(element);
    return element;
  }
  function pop($receiver) {
    return $receiver.removeAt_za3lpa$(get_lastIndex($receiver));
  }
  function AbsoluteContainer() {
    Container.call(this);
  }
  AbsoluteContainer.prototype.add_6p229r$ = function (widget, x, y) {
    this.addWidgetInternal_6p229r$(widget, x, y);
    return widget;
  };
  AbsoluteContainer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbsoluteContainer',
    interfaces: [Container]
  };
  function Container() {
    Element.call(this);
    this.widgets_dg9bxg$_0 = ArrayList_init();
    this.pendingWidgets_4j009$_0 = ArrayList_init();
    this.w_jmksd8$_0 = 0.0;
    this.h_jmks0b$_0 = 0.0;
    this.frame_dqkn4q$_0 = this.frame_dqkn4q$_0;
  }
  Object.defineProperty(Container.prototype, 'xMax', {
    get: function () {
      return this.xMin + this.w_jmksd8$_0;
    }
  });
  Object.defineProperty(Container.prototype, 'yMax', {
    get: function () {
      return this.yMin + this.h_jmks0b$_0;
    }
  });
  Object.defineProperty(Container.prototype, 'frame', {
    get: function () {
      if (this.frame_dqkn4q$_0 == null)
        return throwUPAE('frame');
      return this.frame_dqkn4q$_0;
    },
    set: function (frame) {
      this.frame_dqkn4q$_0 = frame;
    }
  });
  Container.prototype.attach_4a6gng$ = function (style, frame, x, y, w, h) {
    this.frame = frame;
    this.w_jmksd8$_0 = w;
    this.h_jmks0b$_0 = h;
    Element.prototype.attach_wb50q6$.call(this, style, x, y);
  };
  Container.prototype.spawnWidget_8ip3dt$ = function (widget) {
    this.pendingWidgets_4j009$_0.add_11rb$(widget);
    return widget;
  };
  Container.prototype.onTick_6taknv$ = function (slow) {
    this.widgets_dg9bxg$_0.addAll_brywnq$(this.pendingWidgets_4j009$_0);
    this.pendingWidgets_4j009$_0.clear();
    var iterator = this.widgets_dg9bxg$_0.iterator();
    while (iterator.hasNext()) {
      var widget = iterator.next();
      widget.onTick_6taknv$(slow);
      if (widget.despawn) {
        iterator.remove();
      }
    }
  };
  Container.prototype.onDraw_5ymifz$ = function (batch, delta) {
    var tmp$;
    tmp$ = this.widgets_dg9bxg$_0.iterator();
    while (tmp$.hasNext()) {
      var widget = tmp$.next();
      widget.onDraw_5ymifz$(batch, delta);
      if (false) {
        batch.color = Color$Companion_getInstance().RED;
        batch.drawRectangle_7b5o5w$(widget.xMin, widget.yMin, widget.ww, widget.hh);
      }
    }
  };
  Container.prototype.onHoverEnter_dleff0$ = function (x, y) {
    var tmp$;
    tmp$ = reversed(this.widgets_dg9bxg$_0).iterator();
    while (tmp$.hasNext()) {
      var widget = tmp$.next();
      var flag = widget.hovered;
      widget.hovered = widget.inside_dleff0$(x, y);
      if (!flag && widget.hovered)
        widget.onHoverEnter_dleff0$(x, y);
      else if (flag && !widget.hovered)
        widget.onHoverLeave_dleff0$(x, y);
      else if (flag && widget.hovered)
        widget.onHoverUpdate_dleff0$(x, y);
    }
  };
  Container.prototype.onClick_dleff0$ = function (x, y) {
    var tmp$;
    tmp$ = reversed(this.widgets_dg9bxg$_0).iterator();
    while (tmp$.hasNext()) {
      var widget = tmp$.next();
      widget.focused = widget.inside_dleff0$(x, y);
      if (widget.focused) {
        widget.onClick_dleff0$(x, y);
        break;
      }
    }
  };
  Container.prototype.onDrag_7b5o5w$ = function (srcX, srcY, dstX, dstY) {
    var tmp$;
    tmp$ = reversed(this.widgets_dg9bxg$_0).iterator();
    while (tmp$.hasNext()) {
      var widget = tmp$.next();
      if (widget.inside_dleff0$(srcX, srcY) && widget.inside_dleff0$(dstX, dstY)) {
        widget.onDrag_7b5o5w$(srcX, srcY, dstX, dstY);
        break;
      }
    }
  };
  Container.prototype.addWidgetInternal_6p229r$ = function (widget, x, y) {
    widget.attach_9lpu9x$(this.style, x, y, this);
    this.widgets_dg9bxg$_0.add_11rb$(widget);
    return widget;
  };
  Container.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Container',
    interfaces: [Element]
  };
  function VerticalContainer() {
    Container.call(this);
    this.nextY_0 = 0.0;
  }
  VerticalContainer.prototype.onAttach = function () {
    this.nextY_0 = this.style.offset;
  };
  VerticalContainer.prototype.add_8ip3dt$ = function (widget) {
    this.nextY_0 += this.addWidgetInternal_6p229r$(widget, this.style.offset, this.nextY_0).h + this.style.offset;
    return widget;
  };
  VerticalContainer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VerticalContainer',
    interfaces: [Container]
  };
  function Element() {
    this.xPos = 0.0;
    this.yPos = 0.0;
    this.style_mxqhve$_0 = this.style_mxqhve$_0;
  }
  Object.defineProperty(Element.prototype, 'xMin', {
    get: function () {
      return this.xPos;
    }
  });
  Object.defineProperty(Element.prototype, 'yMin', {
    get: function () {
      return this.yPos;
    }
  });
  Object.defineProperty(Element.prototype, 'style', {
    get: function () {
      if (this.style_mxqhve$_0 == null)
        return throwUPAE('style');
      return this.style_mxqhve$_0;
    },
    set: function (style) {
      this.style_mxqhve$_0 = style;
    }
  });
  Object.defineProperty(Element.prototype, 'font', {
    get: function () {
      return this.style.font;
    }
  });
  Object.defineProperty(Element.prototype, 'offset', {
    get: function () {
      return this.style.offset;
    }
  });
  Element.prototype.attach_wb50q6$ = function (style, x, y) {
    this.style = style;
    this.xPos = x;
    this.yPos = y;
    this.onAttach();
  };
  Element.prototype.onAttach = function () {
  };
  Element.prototype.onTick_6taknv$ = function (slow) {
  };
  Element.prototype.onDraw_5ymifz$ = function (batch, delta) {
  };
  Element.prototype.onHoverEnter_dleff0$ = function (x, y) {
  };
  Element.prototype.onHoverUpdate_dleff0$ = function (x, y) {
  };
  Element.prototype.onHoverLeave_dleff0$ = function (x, y) {
  };
  Element.prototype.onDrag_7b5o5w$ = function (srcX, srcY, dstX, dstY) {
  };
  Element.prototype.onClick_dleff0$ = function (x, y) {
  };
  Element.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Element',
    interfaces: [BoundingBox]
  };
  function Frame(container, w, h, style) {
    if (style === void 0)
      style = new Style();
    this.container = container;
    this.w = w;
    this.h = h;
    this.style = style;
    this.dragging_0 = false;
    this.dragX_0 = 0.0;
    this.dragY_0 = 0.0;
    this.xPos = 0.0;
    this.yPos = 0.0;
    this.mouseX = 0.0;
    this.mouseY = 0.0;
    this.container.attach_4a6gng$(this.style, this, 0.0, 0.0, this.w, this.h);
  }
  Object.defineProperty(Frame.prototype, 'xMin', {
    get: function () {
      return this.xPos;
    }
  });
  Object.defineProperty(Frame.prototype, 'yMin', {
    get: function () {
      return this.yPos;
    }
  });
  Object.defineProperty(Frame.prototype, 'xMax', {
    get: function () {
      return this.xPos + this.w;
    }
  });
  Object.defineProperty(Frame.prototype, 'yMax', {
    get: function () {
      return this.yPos + this.h;
    }
  });
  Frame.prototype.enable_msja8c$ = function (game) {
    game.mouse.attachListener_g5nvwe$(this);
  };
  Frame.prototype.tick_6taknv$ = function (slow) {
    this.container.onTick_6taknv$(slow);
  };
  Frame.prototype.draw_jpp8rp$ = function (graphics, delta) {
    graphics.save();
    graphics.translate_dleff0$(this.xPos, this.yPos);
    var batch = graphics.auto();
    batch.color = this.style.background;
    batch.fillRectangle_7b5o5w$(0.0, 0.0, this.w, this.h);
    batch.color = this.style.border;
    batch.drawRectangle_7b5o5w$(0.0, 0.0, this.w, this.h);
    this.container.onDraw_5ymifz$(batch, delta);
    batch.end();
    graphics.restore();
  };
  Frame.prototype.disable_msja8c$ = function (game) {
    game.mouse.detachListener_g5nvwe$(this);
  };
  Frame.prototype.mouseMove_dleff0$ = function (x, y) {
    if (this.inside_dleff0$(x, y)) {
      this.mouseX = x - this.xPos;
      this.mouseY = y - this.yPos;
      this.container.onHoverEnter_dleff0$(this.mouseX, this.mouseY);
    }
    return false;
  };
  Frame.prototype.mouseClick_nhq4am$ = function (clicks, x, y) {
    if (clicks === 1 && this.inside_dleff0$(x, y)) {
      var mx = x - this.xPos;
      var my = y - this.yPos;
      this.container.onClick_dleff0$(mx, my);
    }
    return false;
  };
  Frame.prototype.mouseDragEnter_dleff0$ = function (x, y) {
    if (this.inside_dleff0$(x, y)) {
      this.dragX_0 = x - this.xPos;
      this.dragY_0 = y - this.yPos;
      this.dragging_0 = true;
    }
    return false;
  };
  Frame.prototype.mouseDragUpdate_dleff0$ = function (dx, dy) {
    if (this.dragging_0) {
      this.container.onDrag_7b5o5w$(this.dragX_0, this.dragY_0, this.dragX_0 + dx, this.dragY_0 + dy);
      this.dragX_0 += dx;
      this.dragY_0 += dy;
    }
    return false;
  };
  Frame.prototype.mouseDragLeave_dleff0$ = function (x, y) {
    this.dragging_0 = false;
    return false;
  };
  Frame.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Frame',
    interfaces: [MouseListener, BoundingBox]
  };
  function Style(font, offset, background, base, normal, border, hover, focus) {
    Style$Companion_getInstance();
    if (font === void 0)
      font = Font$Companion_getInstance().SQUAREWAVE;
    if (offset === void 0)
      offset = 4.0;
    if (background === void 0)
      background = Color_init(4, 15, 22);
    if (base === void 0)
      base = Color_init(56, 59, 83);
    if (normal === void 0)
      normal = Color_init(235, 242, 250);
    if (border === void 0)
      border = Color_init(0, 148, 198);
    if (hover === void 0)
      hover = Color_init(198, 192, 19);
    if (focus === void 0)
      focus = Color_init(204, 41, 54);
    this.font = font;
    this.offset = offset;
    this.background = background;
    this.base = base;
    this.normal = normal;
    this.border = border;
    this.hover = hover;
    this.focus = focus;
  }
  function Style$Companion() {
    Style$Companion_instance = this;
    this.OVERLAY = new Style(void 0, void 0, Color_init(0, 0, 0, 0));
  }
  Style$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Style$Companion_instance = null;
  function Style$Companion_getInstance() {
    if (Style$Companion_instance === null) {
      new Style$Companion();
    }
    return Style$Companion_instance;
  }
  Style.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Style',
    interfaces: []
  };
  function Button(label, callback) {
    if (callback === void 0)
      callback = null;
    Widget.call(this);
    this.label = label;
    this.callback = callback;
  }
  Object.defineProperty(Button.prototype, 'w', {
    get: function () {
      return this.font.calcWidth_61zpoe$(this.label) + 2 * this.offset;
    }
  });
  Object.defineProperty(Button.prototype, 'h', {
    get: function () {
      return this.font.calcHeight_61zpoe$(this.label) + this.offset;
    }
  });
  Button.prototype.onDraw_5ymifz$ = function (batch, delta) {
    batch.color = this.style.base;
    batch.fillRectangle_7b5o5w$(this.xPos, this.yPos, this.w, this.h);
    batch.color = this.color();
    batch.drawRectangle_7b5o5w$(this.xPos, this.yPos, this.w, this.h);
    batch.drawString_lkl5tj$(this.font, this.label, this.xPos + this.offset, this.yPos);
  };
  Button.prototype.onClick_dleff0$ = function (x, y) {
    var tmp$;
    (tmp$ = this.callback) != null ? tmp$() : null;
    this.focused = false;
  };
  Button.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Button',
    interfaces: [Widget]
  };
  function Checkbox(label, checked) {
    if (checked === void 0)
      checked = false;
    Widget.call(this);
    this.label = label;
    this.checked = checked;
  }
  Object.defineProperty(Checkbox.prototype, 'w', {
    get: function () {
      return this.font.calcWidth_61zpoe$(this.label) + 2 * this.offset + this.font.charHeight;
    }
  });
  Object.defineProperty(Checkbox.prototype, 'h', {
    get: function () {
      return this.font.calcHeight_61zpoe$(this.label) + this.offset;
    }
  });
  Checkbox.prototype.onDraw_5ymifz$ = function (batch, delta) {
    var boxSize = this.font.charHeight;
    batch.color = this.color();
    batch.drawSquare_y2kzbl$(this.xPos, this.yPos, boxSize);
    if (this.checked) {
      batch.fillSquare_y2kzbl$(this.xPos + this.offset, this.yPos + this.offset, boxSize - 2.0 * this.offset);
    }
    batch.drawString_lkl5tj$(this.font, this.label, this.xPos + this.offset + boxSize, this.yPos - this.offset / 2.0);
  };
  Checkbox.prototype.onClick_dleff0$ = function (x, y) {
    this.checked = !this.checked;
    this.focused = false;
  };
  Checkbox.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Checkbox',
    interfaces: [Widget]
  };
  function Dropdown(values, selection) {
    if (selection === void 0)
      selection = 0;
    Widget.call(this);
    this.values = values;
    this.selection = selection;
    this.child_0 = null;
  }
  Object.defineProperty(Dropdown.prototype, 'w', {
    get: function () {
      var tmp$ = this.font;
      var $receiver = this.values;
      var maxBy$result;
      maxBy$break: do {
        var iterator = $receiver.iterator();
        if (!iterator.hasNext()) {
          maxBy$result = null;
          break maxBy$break;
        }
        var maxElem = iterator.next();
        if (!iterator.hasNext()) {
          maxBy$result = maxElem;
          break maxBy$break;
        }
        var maxValue = maxElem.length;
        do {
          var e = iterator.next();
          var v = e.length;
          if (Kotlin.compareTo(maxValue, v) < 0) {
            maxElem = e;
            maxValue = v;
          }
        }
         while (iterator.hasNext());
        maxBy$result = maxElem;
      }
       while (false);
      return tmp$.calcWidth_61zpoe$(ensureNotNull(maxBy$result)) + 4 * this.offset + this.font.charHeight;
    }
  });
  Object.defineProperty(Dropdown.prototype, 'h', {
    get: function () {
      return this.font.charHeight + this.offset;
    }
  });
  Object.defineProperty(Dropdown.prototype, 'current', {
    get: function () {
      return this.values.get_za3lpa$(this.selection);
    }
  });
  Dropdown.prototype.onTick_6taknv$ = function (slow) {
    var tmp$;
    Widget.prototype.onTick_6taknv$.call(this, slow);
    if (this.focused && this.child_0 == null) {
      this.child_0 = new Dropdown$Child(this);
      ensureNotNull(this.child_0).attach_9lpu9x$(this.style, this.xPos, this.yPos + this.h, this.container);
      this.container.spawnWidget_8ip3dt$(ensureNotNull(this.child_0));
    }
     else if (!this.focused) {
      (tmp$ = this.child_0) != null ? (tmp$.despawn = true) : null;
      this.child_0 = null;
    }
  };
  Dropdown.prototype.onDraw_5ymifz$ = function (batch, delta) {
    var boxSize = this.font.charHeight;
    batch.color = this.style.base;
    batch.fillRectangle_7b5o5w$(this.xPos, this.yPos, this.w, this.h);
    batch.color = this.color();
    batch.drawRectangle_7b5o5w$(this.xPos, this.yPos, this.w, this.h);
    batch.drawString_lkl5tj$(this.font, this.current, this.xPos + this.offset, this.yPos);
    batch.drawSquare_y2kzbl$(this.xPos + this.w - boxSize - this.offset, this.yPos, this.h);
    batch.fillSquare_y2kzbl$(this.xPos + this.w - boxSize, this.yPos + this.offset, this.h - 2.0 * this.offset);
  };
  function Dropdown$Child($outer) {
    this.$outer = $outer;
    Widget.call(this);
    this.entries_0 = ArrayList_init();
  }
  Object.defineProperty(Dropdown$Child.prototype, 'w', {
    get: function () {
      return this.$outer.w;
    }
  });
  Object.defineProperty(Dropdown$Child.prototype, 'h', {
    get: function () {
      return this.$outer.values.size * this.$outer.h;
    }
  });
  Dropdown$Child.prototype.onAttach = function () {
    var tmp$;
    var yNext = this.yPos;
    tmp$ = this.$outer.values.iterator();
    while (tmp$.hasNext()) {
      var value = tmp$.next();
      var $receiver = this.entries_0;
      var element = new Dropdown$Entry(value, this.xPos, yNext, this.xPos + this.$outer.w, yNext + this.$outer.h);
      $receiver.add_11rb$(element);
      yNext += this.$outer.h;
    }
  };
  Dropdown$Child.prototype.onDraw_5ymifz$ = function (batch, delta) {
    var tmp$;
    batch.color = this.style.base;
    batch.fillRectangle_7b5o5w$(this.xPos, this.yPos, this.w, this.h);
    batch.color = this.style.border;
    batch.drawRectangle_7b5o5w$(this.xPos, this.yPos, this.w, this.h);
    tmp$ = this.entries_0.iterator();
    while (tmp$.hasNext()) {
      var entry = tmp$.next();
      batch.color = entry.hovered ? this.style.hover : this.style.normal;
      batch.drawString_lkl5tj$(this.font, entry.label, entry.xMin + this.style.offset, entry.yMin);
    }
  };
  Dropdown$Child.prototype.onClick_dleff0$ = function (x, y) {
    var idx = 0;
    for (var tmp$ = this.entries_0.iterator(); tmp$.hasNext(); ++idx) {
      var entry = tmp$.next();
      if (entry.inside_dleff0$(x, y)) {
        this.$outer.selection = idx;
        this.$outer.focused = false;
        break;
      }
    }
  };
  Dropdown$Child.prototype.onHoverEnter_dleff0$ = function (x, y) {
    var tmp$;
    tmp$ = this.entries_0.iterator();
    while (tmp$.hasNext()) {
      var entry = tmp$.next();
      entry.hovered = entry.inside_dleff0$(x, y);
    }
  };
  Dropdown$Child.prototype.onHoverUpdate_dleff0$ = function (x, y) {
    var tmp$;
    tmp$ = this.entries_0.iterator();
    while (tmp$.hasNext()) {
      var entry = tmp$.next();
      entry.hovered = entry.inside_dleff0$(x, y);
    }
  };
  Dropdown$Child.prototype.onHoverLeave_dleff0$ = function (x, y) {
    var tmp$;
    tmp$ = this.entries_0.iterator();
    while (tmp$.hasNext()) {
      var entry = tmp$.next();
      entry.hovered = false;
    }
  };
  Dropdown$Child.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Child',
    interfaces: [Widget]
  };
  function Dropdown$Entry(label, xMin, yMin, xMax, yMax) {
    this.label = label;
    this.xMin_834rle$_0 = xMin;
    this.yMin_83ok6r$_0 = yMin;
    this.xMax_834lwg$_0 = xMax;
    this.yMax_83oeht$_0 = yMax;
    this.hovered = false;
  }
  Object.defineProperty(Dropdown$Entry.prototype, 'xMin', {
    get: function () {
      return this.xMin_834rle$_0;
    }
  });
  Object.defineProperty(Dropdown$Entry.prototype, 'yMin', {
    get: function () {
      return this.yMin_83ok6r$_0;
    }
  });
  Object.defineProperty(Dropdown$Entry.prototype, 'xMax', {
    get: function () {
      return this.xMax_834lwg$_0;
    }
  });
  Object.defineProperty(Dropdown$Entry.prototype, 'yMax', {
    get: function () {
      return this.yMax_83oeht$_0;
    }
  });
  Dropdown$Entry.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Entry',
    interfaces: [BoundingBox]
  };
  Dropdown.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Dropdown',
    interfaces: [Widget]
  };
  function Label(label) {
    Widget.call(this);
    this.value_qvv2mm$_0 = '';
    this.value = label;
  }
  Object.defineProperty(Label.prototype, 'w', {
    get: function () {
      return this.font.calcWidth_61zpoe$(this.value) + 2 * this.offset;
    }
  });
  Object.defineProperty(Label.prototype, 'h', {
    get: function () {
      return this.font.calcHeight_61zpoe$(this.value) + this.offset;
    }
  });
  Object.defineProperty(Label.prototype, 'value', {
    get: function () {
      return this.value_qvv2mm$_0;
    },
    set: function (value) {
      this.markDirty();
      this.value_qvv2mm$_0 = value;
    }
  });
  Label.prototype.onDraw_5ymifz$ = function (batch, delta) {
    batch.color = this.color();
    batch.drawString_lkl5tj$(this.font, this.value, this.xPos + this.offset, this.yPos);
  };
  Label.prototype.onClick_dleff0$ = function (x, y) {
    this.focused = false;
  };
  Label.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Label',
    interfaces: [Widget]
  };
  function Radio(label, selector) {
    Widget.call(this);
    this.label = label;
    this.selector = selector;
  }
  Object.defineProperty(Radio.prototype, 'w', {
    get: function () {
      return this.font.calcWidth_61zpoe$(this.label) + 2 * this.offset + this.font.charHeight;
    }
  });
  Object.defineProperty(Radio.prototype, 'h', {
    get: function () {
      return this.font.calcHeight_61zpoe$(this.label) + this.offset;
    }
  });
  Object.defineProperty(Radio.prototype, 'selected', {
    get: function () {
      return this.selector.get();
    }
  });
  Radio.prototype.onDraw_5ymifz$ = function (batch, delta) {
    var boxSize = this.font.charHeight;
    batch.color = this.color();
    batch.drawCircle_y2kzbl$(this.xPos + boxSize / 2.0, this.yPos + boxSize / 2.0, boxSize / 2.0);
    if (this.selected) {
      batch.fillCircle_y2kzbl$(this.xPos + boxSize / 2.0, this.yPos + boxSize / 2.0, boxSize / 2.0 - this.offset);
    }
    batch.drawString_lkl5tj$(this.font, this.label, this.xPos + this.offset + boxSize, this.yPos - this.offset / 2.0);
  };
  Radio.prototype.onClick_dleff0$ = function (x, y) {
    this.selector.set();
    this.focused = false;
  };
  function Radio$Selection() {
    this.value = 0;
  }
  Radio$Selection.prototype.item_za3lpa$ = function (idx) {
    return new Radio$Selector(this, idx);
  };
  Radio$Selection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Selection',
    interfaces: []
  };
  function Radio$Selector(selection, idx) {
    this.selection_0 = selection;
    this.idx_0 = idx;
  }
  Radio$Selector.prototype.set = function () {
    this.selection_0.value = this.idx_0;
  };
  Radio$Selector.prototype.get = function () {
    return this.selection_0.value === this.idx_0;
  };
  Radio$Selector.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Selector',
    interfaces: []
  };
  Radio.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Radio',
    interfaces: [Widget]
  };
  function Slider() {
    Widget.call(this);
    this.knob_crdv4u$_0 = this.knob_crdv4u$_0;
    this.xOff_0 = 0.0;
  }
  Object.defineProperty(Slider.prototype, 'w', {
    get: function () {
      return 250.0;
    }
  });
  Object.defineProperty(Slider.prototype, 'h', {
    get: function () {
      return this.font.charHeight;
    }
  });
  Object.defineProperty(Slider.prototype, 'value', {
    get: function () {
      return this.xOff_0 / (this.w - this.h);
    }
  });
  Object.defineProperty(Slider.prototype, 'knob_0', {
    get: function () {
      if (this.knob_crdv4u$_0 == null)
        return throwUPAE('knob');
      return this.knob_crdv4u$_0;
    },
    set: function (knob) {
      this.knob_crdv4u$_0 = knob;
    }
  });
  Slider.prototype.onAttach = function () {
    this.knob_0 = new Slider$Knob(this);
  };
  Slider.prototype.onDraw_5ymifz$ = function (batch, delta) {
    batch.color = this.style.base;
    batch.fillRectangle_7b5o5w$(this.xPos, this.yPos, this.w, this.h);
    batch.color = this.color();
    batch.drawRectangle_7b5o5w$(this.xPos, this.yPos, this.w, this.h);
    batch.fillSquare_y2kzbl$(this.knob_0.xMin, this.knob_0.yMin, this.h);
  };
  Slider.prototype.onClick_dleff0$ = function (x, y) {
    this.xOff_0 = clamp(x - this.h / 2, 0.0, this.w - this.h);
  };
  Slider.prototype.onDrag_7b5o5w$ = function (srcX, srcY, dstX, dstY) {
    this.xOff_0 = clamp(dstX - this.xPos - this.h / 2, 0.0, this.w - this.h);
    this.focused = true;
  };
  function Slider$Knob($outer) {
    this.$outer = $outer;
  }
  Object.defineProperty(Slider$Knob.prototype, 'xMin', {
    get: function () {
      return this.$outer.xPos + this.$outer.xOff_0;
    }
  });
  Object.defineProperty(Slider$Knob.prototype, 'yMin', {
    get: function () {
      return this.$outer.yPos;
    }
  });
  Object.defineProperty(Slider$Knob.prototype, 'xMax', {
    get: function () {
      return this.xMin + this.$outer.font.charHeight;
    }
  });
  Object.defineProperty(Slider$Knob.prototype, 'yMax', {
    get: function () {
      return this.yMin + this.$outer.font.charHeight;
    }
  });
  Slider$Knob.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Knob',
    interfaces: [BoundingBox]
  };
  Slider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Slider',
    interfaces: [Widget]
  };
  function Tooltip(label) {
    Widget.call(this);
    this.label = label;
  }
  Object.defineProperty(Tooltip.prototype, 'w', {
    get: function () {
      return this.font.calcWidth_61zpoe$(this.label) + 2 * this.offset;
    }
  });
  Object.defineProperty(Tooltip.prototype, 'h', {
    get: function () {
      return this.font.calcHeight_61zpoe$(this.label) + this.offset;
    }
  });
  Tooltip.prototype.onDraw_5ymifz$ = function (batch, delta) {
    batch.color = this.style.base;
    batch.fillRectangle_7b5o5w$(this.xPos, this.yPos, this.w, this.h);
    batch.color = this.style.border;
    batch.drawRectangle_7b5o5w$(this.xPos, this.yPos, this.w, this.h);
    batch.color = this.style.normal;
    batch.drawString_lkl5tj$(this.font, this.label, this.xPos + this.offset, this.yPos);
  };
  Tooltip.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Tooltip',
    interfaces: [Widget]
  };
  function Widget() {
    Element.call(this);
    this.dirty_f7cq2h$_0 = true;
    this.cw_2xatzb$_h9wlib$_0 = 0.0;
    this.ch_2xatme$_50g77i$_0 = 0.0;
    this.tooltipWidget_9mw6z6$_0 = null;
    this.container_cvsfgo$_0 = this.container_cvsfgo$_0;
    this.despawn = false;
    this.focused = false;
    this.hovered = false;
    this.tooltip = null;
  }
  Object.defineProperty(Widget.prototype, 'xMax', {
    get: function () {
      return this.xMin + this.cw_2xatzb$_0;
    }
  });
  Object.defineProperty(Widget.prototype, 'yMax', {
    get: function () {
      return this.yMin + this.ch_2xatme$_0;
    }
  });
  Object.defineProperty(Widget.prototype, 'cw_2xatzb$_0', {
    get: function () {
      if (this.dirty_f7cq2h$_0) {
        this.cw_2xatzb$_h9wlib$_0 = this.w;
        this.ch_2xatme$_0 = this.h;
      }
      return this.cw_2xatzb$_h9wlib$_0;
    },
    set: function (cw) {
      this.cw_2xatzb$_h9wlib$_0 = cw;
    }
  });
  Object.defineProperty(Widget.prototype, 'ch_2xatme$_0', {
    get: function () {
      if (this.dirty_f7cq2h$_0) {
        this.cw_2xatzb$_0 = this.w;
        this.ch_2xatme$_50g77i$_0 = this.h;
      }
      return this.ch_2xatme$_50g77i$_0;
    },
    set: function (ch) {
      this.ch_2xatme$_50g77i$_0 = ch;
    }
  });
  Object.defineProperty(Widget.prototype, 'container', {
    get: function () {
      if (this.container_cvsfgo$_0 == null)
        return throwUPAE('container');
      return this.container_cvsfgo$_0;
    },
    set: function (container) {
      this.container_cvsfgo$_0 = container;
    }
  });
  Object.defineProperty(Widget.prototype, 'mouseX', {
    get: function () {
      return this.container.frame.mouseX;
    }
  });
  Object.defineProperty(Widget.prototype, 'mouseY', {
    get: function () {
      return this.container.frame.mouseY;
    }
  });
  Widget.prototype.attach_9lpu9x$ = function (style, x, y, container) {
    this.container = container;
    Element.prototype.attach_wb50q6$.call(this, style, x, y);
  };
  Widget.prototype.color = function () {
    var tmp$;
    if (this.focused)
      tmp$ = this.style.focus;
    else if (this.hovered)
      tmp$ = this.style.hover;
    else
      tmp$ = this.style.normal;
    return tmp$;
  };
  Widget.prototype.onTick_6taknv$ = function (slow) {
    var tmp$;
    if (this.hovered && this.tooltip != null && this.tooltipWidget_9mw6z6$_0 == null) {
      this.tooltipWidget_9mw6z6$_0 = new Tooltip(ensureNotNull(this.tooltip));
      ensureNotNull(this.tooltipWidget_9mw6z6$_0).attach_9lpu9x$(this.style, this.mouseX + this.style.offset, this.mouseY + this.style.offset, this.container);
      this.container.spawnWidget_8ip3dt$(ensureNotNull(this.tooltipWidget_9mw6z6$_0));
    }
     else if (!this.hovered) {
      (tmp$ = this.tooltipWidget_9mw6z6$_0) != null ? (tmp$.despawn = true) : null;
      this.tooltipWidget_9mw6z6$_0 = null;
    }
  };
  Widget.prototype.onHoverUpdate_dleff0$ = function (x, y) {
    var tmp$, tmp$_0;
    (tmp$ = this.tooltipWidget_9mw6z6$_0) != null ? (tmp$.xPos = x + 2.0 * this.style.offset) : null;
    (tmp$_0 = this.tooltipWidget_9mw6z6$_0) != null ? (tmp$_0.yPos = y + 2.0 * this.style.offset) : null;
  };
  Widget.prototype.markDirty = function () {
    this.dirty_f7cq2h$_0 = true;
  };
  Widget.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Widget',
    interfaces: [Element]
  };
  function Music() {
  }
  Music.prototype.dispose = function () {
  };
  Music.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Music',
    interfaces: [Disposable]
  };
  function Sound() {
  }
  Sound.prototype.play = function () {
    return null;
  };
  Sound.prototype.dispose = function () {
  };
  function Sound$Instance() {
  }
  Sound$Instance.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Instance',
    interfaces: []
  };
  Sound.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Sound',
    interfaces: [Disposable]
  };
  function Screen(game) {
    this.game_0 = game;
    this.frameCallback_0 = null;
    this.firstFrame_0 = true;
    this.frameTimestamp_0 = 0.0;
    var tmp$, tmp$_0;
    this.canvas_0 = Kotlin.isType(tmp$ = document.getElementById('screen'), HTMLCanvasElement) ? tmp$ : throwCCE();
    this.glContext_8be2vx$ = Kotlin.isType(tmp$_0 = this.canvas_0.getContext('webgl'), WebGLRenderingContext) ? tmp$_0 : throwCCE();
  }
  Object.defineProperty(Screen.prototype, 'title', {
    get: function () {
      return document.title;
    },
    set: function (value) {
      document.title = value;
    }
  });
  Object.defineProperty(Screen.prototype, 'width', {
    get: function () {
      return this.canvas_0.width;
    },
    set: function (value) {
      this.canvas_0.width = value;
    }
  });
  Object.defineProperty(Screen.prototype, 'height', {
    get: function () {
      return this.canvas_0.height;
    },
    set: function (value) {
      this.canvas_0.height = value;
    }
  });
  Screen.prototype.loop_s2x38j$ = function (callback) {
    MouseHandler_getInstance().install_ucpmpf$(this.canvas_0, this.game_0.inputQueue);
    KeyboardHandler_getInstance().install_ucpmpf$(this.canvas_0, this.game_0.inputQueue);
    this.frameCallback_0 = callback;
    window.requestAnimationFrame(getCallableRef('frame', function ($receiver, elapsed) {
      return $receiver.frame_0(elapsed), Unit;
    }.bind(null, this)));
    return false;
  };
  Screen.prototype.dispose = function () {
  };
  Screen.prototype.frame_0 = function (elapsed) {
    var tmp$;
    if (this.firstFrame_0) {
      this.frameTimestamp_0 = elapsed;
      this.firstFrame_0 = false;
    }
    var delta = (elapsed - this.frameTimestamp_0) / 1000.0;
    this.frameTimestamp_0 = elapsed;
    if (((tmp$ = this.frameCallback_0) != null ? tmp$(delta) : null) === true) {
      window.requestAnimationFrame(getCallableRef('frame', function ($receiver, elapsed) {
        return $receiver.frame_0(elapsed), Unit;
      }.bind(null, this)));
    }
  };
  Screen.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Screen',
    interfaces: [Disposable]
  };
  function GLBuffer(self_0) {
    this.self_8be2vx$ = self_0;
  }
  GLBuffer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GLBuffer',
    interfaces: []
  };
  function GLMethod(screen) {
    this.gl_0 = screen.glContext_8be2vx$;
    this.vertexArrayExt_0 = this.gl_0.getExtension('OES_vertex_array_object');
  }
  GLMethod.prototype.attachShader_e6pmkj$ = function (program, shader) {
    this.gl_0.attachShader(program.self_8be2vx$, shader.self_8be2vx$);
  };
  GLMethod.prototype.bindBuffer_uxjef2$ = function (target, buffer) {
    this.gl_0.bindBuffer(target.value, buffer != null ? buffer.self_8be2vx$ : null);
  };
  GLMethod.prototype.bindTexture_qyn0wr$ = function (target, texture) {
    this.gl_0.bindTexture(target.value, texture != null ? texture.self_8be2vx$ : null);
  };
  GLMethod.prototype.bindVertexArray_f8kyr4$ = function (vertexArray) {
    this.vertexArrayExt_0.bindVertexArrayOES(vertexArray != null ? vertexArray.self_8be2vx$ : null);
  };
  GLMethod.prototype.blendFunc_rpnrdq$ = function (sFactor, dFactor) {
    this.gl_0.blendFunc(sFactor.value, dFactor.value);
  };
  GLMethod.prototype.bufferData_bz8l6q$ = function (target, size, usage) {
    this.gl_0.bufferData(target.value, size, usage.value);
  };
  GLMethod.prototype.bufferData_muw567$ = function (target, data, usage) {
    this.gl_0.bufferData(target.value, data.array_8be2vx$.subarray(0, data.limit), usage.value);
  };
  GLMethod.prototype.bufferSubData_oer25m$ = function (target, offset, data) {
    this.gl_0.bufferSubData(target.value, 0, data.array_8be2vx$.subarray(0, data.limit));
  };
  GLMethod.prototype.clear_b3xsnb$ = function (mask) {
    this.gl_0.clear(mask.value);
  };
  GLMethod.prototype.clearColor_7b5o5w$ = function (red, green, blue, alpha) {
    this.gl_0.clearColor(red, green, blue, alpha);
  };
  GLMethod.prototype.compileShader_s18jvv$ = function (shader) {
    this.gl_0.compileShader(shader.self_8be2vx$);
  };
  GLMethod.prototype.createBuffer = function () {
    var value = this.gl_0.createBuffer();
    var requireNotNull$result;
    if (value == null) {
      var message = 'Required value was null.';
      throw IllegalArgumentException_init(message.toString());
    }
     else {
      requireNotNull$result = value;
    }
    return new GLBuffer(requireNotNull$result);
  };
  GLMethod.prototype.createProgram = function () {
    var value = this.gl_0.createProgram();
    var requireNotNull$result;
    if (value == null) {
      var message = 'Required value was null.';
      throw IllegalArgumentException_init(message.toString());
    }
     else {
      requireNotNull$result = value;
    }
    return new GLProgram(requireNotNull$result);
  };
  GLMethod.prototype.createShader_b3xsnb$ = function (type) {
    var value = this.gl_0.createShader(type.value);
    var requireNotNull$result;
    if (value == null) {
      var message = 'Required value was null.';
      throw IllegalArgumentException_init(message.toString());
    }
     else {
      requireNotNull$result = value;
    }
    return new GLShader(requireNotNull$result);
  };
  GLMethod.prototype.createTexture = function () {
    var value = this.gl_0.createTexture();
    var requireNotNull$result;
    if (value == null) {
      var message = 'Required value was null.';
      throw IllegalArgumentException_init(message.toString());
    }
     else {
      requireNotNull$result = value;
    }
    return new GLTexture(requireNotNull$result);
  };
  GLMethod.prototype.createVertexArray = function () {
    var value = this.vertexArrayExt_0.createVertexArrayOES();
    var requireNotNull$result;
    if (value == null) {
      var message = 'Required value was null.';
      throw IllegalArgumentException_init(message.toString());
    }
     else {
      requireNotNull$result = value;
    }
    return new GLVertexArray(requireNotNull$result);
  };
  GLMethod.prototype.cullFace_b3xsnb$ = function (mode) {
    this.gl_0.cullFace(mode.value);
  };
  GLMethod.prototype.deleteBuffer_k6pjba$ = function (buffer) {
    this.gl_0.deleteBuffer(buffer.self_8be2vx$);
  };
  GLMethod.prototype.deleteProgram_mdyveq$ = function (program) {
    this.gl_0.deleteProgram(program.self_8be2vx$);
  };
  GLMethod.prototype.deleteShader_s18jvv$ = function (shader) {
    this.gl_0.deleteShader(shader.self_8be2vx$);
  };
  GLMethod.prototype.deleteTexture_ub7p5h$ = function (texture) {
    this.gl_0.deleteTexture(texture.self_8be2vx$);
  };
  GLMethod.prototype.deleteVertexArray_itlgq9$ = function (vertexArray) {
    this.vertexArrayExt_0.deleteVertexArrayOES(vertexArray.self_8be2vx$);
  };
  GLMethod.prototype.disable_b3xsnb$ = function (cap) {
    this.gl_0.disable(cap.value);
  };
  GLMethod.prototype.disableVertexAttribArray_za3lpa$ = function (idx) {
    this.gl_0.disableVertexAttribArray(idx);
  };
  GLMethod.prototype.drawArrays_6yoam1$ = function (mode, first, count) {
    this.gl_0.drawArrays(mode.value, first, count);
  };
  GLMethod.prototype.enable_b3xsnb$ = function (cap) {
    this.gl_0.enable(cap.value);
  };
  GLMethod.prototype.enableVertexAttribArray_za3lpa$ = function (idx) {
    this.gl_0.enableVertexAttribArray(idx);
  };
  GLMethod.prototype.frontFace_b3xsnb$ = function (mode) {
    this.gl_0.frontFace(mode.value);
  };
  GLMethod.prototype.getAttribLocation_odqm8g$ = function (program, name) {
    return this.gl_0.getAttribLocation(program.self_8be2vx$, name);
  };
  GLMethod.prototype.getProgramInfoLog_mdyveq$ = function (program) {
    var tmp$;
    return (tmp$ = this.gl_0.getProgramInfoLog(program.self_8be2vx$)) != null ? tmp$ : '';
  };
  GLMethod.prototype.getProgramParameter_jn0pzt$ = function (program, pName) {
    var tmp$;
    return (tmp$ = this.gl_0.getProgramParameter(program.self_8be2vx$, pName.value)) != null ? tmp$ : 0;
  };
  GLMethod.prototype.getShaderInfoLog_s18jvv$ = function (shader) {
    var tmp$;
    return (tmp$ = this.gl_0.getShaderInfoLog(shader.self_8be2vx$)) != null ? tmp$ : '';
  };
  GLMethod.prototype.getShaderParameter_fxhix2$ = function (shader, pName) {
    var tmp$;
    return (tmp$ = this.gl_0.getShaderParameter(shader.self_8be2vx$, pName.value)) != null ? tmp$ : 0;
  };
  GLMethod.prototype.getUniformLocation_odqm8g$ = function (program, name) {
    var self_0 = this.gl_0.getUniformLocation(program.self_8be2vx$, name);
    return self_0 != null ? new GLUniformLocation(self_0) : null;
  };
  GLMethod.prototype.linkProgram_mdyveq$ = function (program) {
    this.gl_0.linkProgram(program.self_8be2vx$);
  };
  GLMethod.prototype.shaderSource_vdrxx9$ = function (shader, source) {
    this.gl_0.shaderSource(shader.self_8be2vx$, source);
  };
  GLMethod.prototype.texImage2D_fc7h0x$ = function (target, level, internalFormat, width, height, border, format, type, source) {
    this.gl_0.texImage2D(target.value, level, internalFormat.value, width, height, border, format.value, type.value, source.array_8be2vx$.subarray(0, source.limit));
  };
  GLMethod.prototype.texParameteri_z760u5$ = function (target, pName, param) {
    this.gl_0.texParameteri(target.value, pName.value, param.value);
  };
  GLMethod.prototype.uniform4fv_ta9ilb$ = function (location, values) {
    this.gl_0.uniform4fv(location.self_8be2vx$, toTypedArray(values));
  };
  GLMethod.prototype.uniformMatrix4fv_k9ftqa$ = function (location, transpose, values) {
    this.gl_0.uniformMatrix4fv(location.self_8be2vx$, transpose, toTypedArray(values));
  };
  GLMethod.prototype.useProgram_ga3i4h$ = function (program) {
    this.gl_0.useProgram(program != null ? program.self_8be2vx$ : null);
  };
  GLMethod.prototype.vertexAttribPointer_ybuwio$ = function (idx, size, type, normalized, stride, offset) {
    this.gl_0.vertexAttribPointer(idx, size, type.value, normalized, stride, offset);
  };
  GLMethod.prototype.viewport_tjonv8$ = function (x, y, w, h) {
    this.gl_0.viewport(x, y, w, h);
  };
  GLMethod.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GLMethod',
    interfaces: []
  };
  function GLProgram(self_0) {
    this.self_8be2vx$ = self_0;
  }
  GLProgram.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GLProgram',
    interfaces: []
  };
  function GLShader(self_0) {
    this.self_8be2vx$ = self_0;
  }
  GLShader.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GLShader',
    interfaces: []
  };
  function GLTexture(self_0) {
    this.self_8be2vx$ = self_0;
  }
  GLTexture.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GLTexture',
    interfaces: []
  };
  function GLUniformLocation(self_0) {
    this.self_8be2vx$ = self_0;
  }
  GLUniformLocation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GLUniformLocation',
    interfaces: []
  };
  function GLVertexArray(self_0) {
    this.self_8be2vx$ = self_0;
  }
  GLVertexArray.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GLVertexArray',
    interfaces: []
  };
  function KeyboardHandler() {
    KeyboardHandler_instance = this;
  }
  function KeyboardHandler$install$lambda(closure$inputQueue) {
    return function (it) {
      if (!Kotlin.isType(it, KeyboardEvent)) {
        var message = 'Check failed.';
        throw IllegalStateException_init(message.toString());
      }
      if (it.isComposing || it.keyCode === 229) {
        return;
      }
      try {
        var mapped = Key$valueOf(it.code.toUpperCase());
        closure$inputQueue.submit_o4y3mt$(new KeyUpdate$Press(mapped));
      }
       catch (ignored) {
        if (!Kotlin.isType(ignored, Exception))
          throw ignored;
      }
      return Unit;
    };
  }
  function KeyboardHandler$install$lambda_0(closure$inputQueue) {
    return function (it) {
      if (!Kotlin.isType(it, KeyboardEvent)) {
        var message = 'Check failed.';
        throw IllegalStateException_init(message.toString());
      }
      if (it.isComposing || it.keyCode === 229) {
        return;
      }
      try {
        var mapped = Key$valueOf(it.code.toUpperCase());
        closure$inputQueue.submit_o4y3mt$(new KeyUpdate$Release(mapped));
      }
       catch (ignored) {
        if (!Kotlin.isType(ignored, Exception))
          throw ignored;
      }
      return Unit;
    };
  }
  KeyboardHandler.prototype.install_ucpmpf$ = function (canvas, inputQueue) {
    window.addEventListener('keydown', KeyboardHandler$install$lambda(inputQueue));
    window.addEventListener('keyup', KeyboardHandler$install$lambda_0(inputQueue));
  };
  KeyboardHandler.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'KeyboardHandler',
    interfaces: []
  };
  var KeyboardHandler_instance = null;
  function KeyboardHandler_getInstance() {
    if (KeyboardHandler_instance === null) {
      new KeyboardHandler();
    }
    return KeyboardHandler_instance;
  }
  function MouseHandler() {
    MouseHandler_instance = this;
  }
  function MouseHandler$install$lambda(closure$canvas, this$MouseHandler, closure$inputQueue) {
    return function (it) {
      if (!Kotlin.isType(it, MouseEvent)) {
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init(message.toString());
      }
      var mx = this$MouseHandler.remapX_0(closure$canvas, it.clientX);
      var my = this$MouseHandler.remapY_0(closure$canvas, it.clientY);
      closure$inputQueue.submit_o4y3mt$(new MouseUpdate$Move(mx, my));
      return Unit;
    };
  }
  function MouseHandler$install$lambda_0(this$MouseHandler, closure$inputQueue) {
    return function (it) {
      if (!Kotlin.isType(it, MouseEvent)) {
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init(message.toString());
      }
      var mapped = this$MouseHandler.remapButton_0(it.button);
      if (mapped != null) {
        closure$inputQueue.submit_o4y3mt$(new MouseUpdate$Press(mapped));
      }
      return Unit;
    };
  }
  function MouseHandler$install$lambda_1(this$MouseHandler, closure$inputQueue) {
    return function (it) {
      if (!Kotlin.isType(it, MouseEvent)) {
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init(message.toString());
      }
      var mapped = this$MouseHandler.remapButton_0(it.button);
      if (mapped != null) {
        closure$inputQueue.submit_o4y3mt$(new MouseUpdate$Release(mapped));
      }
      return Unit;
    };
  }
  function MouseHandler$install$lambda_2(it) {
    if (!Kotlin.isType(it, TouchEvent)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init(message.toString());
    }
    return Unit;
  }
  function MouseHandler$install$lambda_3(it) {
    if (!Kotlin.isType(it, TouchEvent)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init(message.toString());
    }
    return Unit;
  }
  function MouseHandler$install$lambda_4(it) {
    if (!Kotlin.isType(it, TouchEvent)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init(message.toString());
    }
    return Unit;
  }
  MouseHandler.prototype.install_ucpmpf$ = function (canvas, inputQueue) {
    canvas.addEventListener('mousemove', MouseHandler$install$lambda(canvas, this, inputQueue));
    canvas.addEventListener('mousedown', MouseHandler$install$lambda_0(this, inputQueue));
    canvas.addEventListener('mouseup', MouseHandler$install$lambda_1(this, inputQueue));
    canvas.addEventListener('touchstart', MouseHandler$install$lambda_2);
    canvas.addEventListener('touchmove', MouseHandler$install$lambda_3);
    canvas.addEventListener('touchend', MouseHandler$install$lambda_4);
  };
  MouseHandler.prototype.remapX_0 = function (canvas, x) {
    var rect = canvas.getBoundingClientRect();
    return (x - rect.left) / (rect.right - rect.left) * canvas.width;
  };
  MouseHandler.prototype.remapY_0 = function (canvas, y) {
    var rect = canvas.getBoundingClientRect();
    return (y - rect.top) / (rect.bottom - rect.top) * canvas.height;
  };
  MouseHandler.prototype.remapButton_0 = function (idx) {
    var tmp$;
    switch (idx) {
      case 0:
        tmp$ = MouseButton$LEFT_getInstance();
        break;
      case 1:
        tmp$ = MouseButton$MIDDLE_getInstance();
        break;
      case 2:
        tmp$ = MouseButton$RIGHT_getInstance();
        break;
      default:tmp$ = null;
        break;
    }
    return tmp$;
  };
  MouseHandler.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MouseHandler',
    interfaces: []
  };
  var MouseHandler_instance = null;
  function MouseHandler_getInstance() {
    if (MouseHandler_instance === null) {
      new MouseHandler();
    }
    return MouseHandler_instance;
  }
  function main(args) {
    (new SlotGame()).run_kand9s$(args);
  }
  function AssetLoader() {
  }
  function AssetLoader$loadImage$lambda(closure$imgElement, closure$callback) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1;
      var canvas = Kotlin.isType(tmp$ = document.createElement('canvas'), HTMLCanvasElement) ? tmp$ : throwCCE();
      canvas.width = closure$imgElement.width;
      canvas.height = closure$imgElement.height;
      var ctx = Kotlin.isType(tmp$_0 = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$_0 : throwCCE();
      ctx.drawImage(closure$imgElement, 0.0, 0.0);
      var data = ctx.getImageData(0.0, 0.0, closure$imgElement.width, closure$imgElement.height).data;
      var image = new Image(closure$imgElement.width, closure$imgElement.height);
      tmp$_1 = Kotlin.imul(closure$imgElement.width, closure$imgElement.height);
      for (var i = 0; i < tmp$_1; i++) {
        var r = data[4 * i | 0];
        var g = data[(4 * i | 0) + 1 | 0];
        var b = data[(4 * i | 0) + 2 | 0];
        var a = data[(4 * i | 0) + 3 | 0];
        image.pixels[i] = a << 24 | b << 16 | g << 8 | r;
      }
      closure$callback(image);
      return null;
    };
  }
  AssetLoader.prototype.loadImage_3o09ro$ = function (location, callback) {
    var tmp$;
    var imgElement = Kotlin.isType(tmp$ = document.createElement('img'), HTMLImageElement) ? tmp$ : throwCCE();
    imgElement.onload = AssetLoader$loadImage$lambda(imgElement, callback);
    imgElement.src = location;
  };
  AssetLoader.prototype.loadMusic_xrfp2h$ = function (location, callback) {
  };
  AssetLoader.prototype.loadSound_5cnwnn$ = function (location, callback) {
  };
  function AssetLoader$loadText$lambda(it) {
    return it.text();
  }
  function AssetLoader$loadText$lambda_0(closure$callback) {
    return function (it) {
      closure$callback(it);
      return Unit;
    };
  }
  AssetLoader.prototype.loadText_hyc7mn$ = function (location, callback) {
    window.fetch(location).then(AssetLoader$loadText$lambda).then(AssetLoader$loadText$lambda_0(callback));
  };
  AssetLoader.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AssetLoader',
    interfaces: []
  };
  function Memory(capacity) {
    this.array_8be2vx$ = new Uint8Array(capacity);
    this.view_0 = new DataView(this.array_8be2vx$.buffer);
    this.idx_0 = 0;
    this.idxLimit_0 = 0;
  }
  Object.defineProperty(Memory.prototype, 'capacity', {
    get: function () {
      return this.array_8be2vx$.byteLength;
    }
  });
  Object.defineProperty(Memory.prototype, 'position', {
    get: function () {
      return this.idx_0;
    }
  });
  Object.defineProperty(Memory.prototype, 'limit', {
    get: function () {
      return this.idxLimit_0;
    }
  });
  Memory.prototype.clear = function () {
    this.idx_0 = 0;
    this.idxLimit_0 = 0;
  };
  Memory.prototype.flip = function () {
    this.idxLimit_0 = this.idx_0;
    this.idx_0 = 0;
  };
  Memory.prototype.rewind = function () {
    this.idx_0 = 0;
  };
  Memory.prototype.read = function () {
    var value = this.view_0.getInt8(this.idx_0);
    this.idx_0 = this.idx_0 + 1 | 0;
    return value;
  };
  Memory.prototype.readFloat = function () {
    var value = this.view_0.getFloat32(this.idx_0, true);
    this.idx_0 = this.idx_0 + 4 | 0;
    return value;
  };
  Memory.prototype.readInt = function () {
    var value = this.view_0.getInt32(this.idx_0, true);
    this.idx_0 = this.idx_0 + 4 | 0;
    return value;
  };
  Memory.prototype.write_s8j3t7$ = function (value) {
    this.view_0.setInt8(this.idx_0, value);
    this.idx_0 = this.idx_0 + 1 | 0;
  };
  Memory.prototype.writeFloat_mx4ult$ = function (value) {
    this.view_0.setFloat32(this.idx_0, value, true);
    this.idx_0 = this.idx_0 + 4 | 0;
  };
  Memory.prototype.writeInt_za3lpa$ = function (value) {
    this.view_0.setInt32(this.idx_0, value, true);
    this.idx_0 = this.idx_0 + 4 | 0;
  };
  Memory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Memory',
    interfaces: []
  };
  function elapsedTime() {
    return (new Date()).getTime() / 1000.0;
  }
  var package$dw = _.dw || (_.dw = {});
  var package$base = package$dw.base || (package$dw.base = {});
  package$base.Assets = Assets;
  Object.defineProperty(Game, 'Companion', {
    get: Game$Companion_getInstance
  });
  package$base.Game = Game;
  var package$demo = package$dw.demo || (package$dw.demo = {});
  package$demo.FrameDemo = FrameDemo;
  package$demo.ShapeDemo = ShapeDemo;
  Machine.Symbol = Machine$Symbol;
  Machine.Reel = Machine$Reel;
  Machine.Line = Machine$Line;
  var package$slot = package$demo.slot || (package$demo.slot = {});
  package$slot.Machine = Machine;
  package$slot.SlotGame = SlotGame;
  Object.defineProperty(package$slot, 'Symbols', {
    get: Symbols_getInstance
  });
  package$demo.SpriteDemo = SpriteDemo;
  var package$graphics = package$dw.graphics || (package$dw.graphics = {});
  var package$batch = package$graphics.batch || (package$graphics.batch = {});
  package$batch.AutoBatch = AutoBatch;
  Batch.State = Batch$State;
  package$batch.Batch = Batch;
  package$batch.BatchImpl = BatchImpl;
  package$batch.ShapeBatch = ShapeBatch;
  package$batch.ShapeBatchImpl = ShapeBatchImpl;
  package$batch.SpriteBatch = SpriteBatch;
  package$batch.SpriteBatchImpl = SpriteBatchImpl;
  $$importsForInline$$.DungeonWorld = _;
  Object.defineProperty(Color, 'Companion', {
    get: Color$Companion_getInstance
  });
  package$graphics.Color_init_tjonv8$ = Color_init;
  package$graphics.Color = Color;
  Font.Glyph = Font$Glyph;
  Object.defineProperty(Font, 'Companion', {
    get: Font$Companion_getInstance
  });
  package$graphics.Font = Font;
  var package$gl = package$graphics.gl || (package$graphics.gl = {});
  package$gl.GLEnum = GLEnum;
  Object.defineProperty(package$gl, 'GLEnums', {
    get: GLEnums_getInstance
  });
  Object.defineProperty(Graphics, 'Companion', {
    get: Graphics$Companion_getInstance
  });
  Graphics.State_init = Graphics$Graphics$State_init;
  Graphics.State = Graphics$State;
  package$graphics.Graphics = Graphics;
  package$graphics.Image = Image;
  Mesh.Attribute = Mesh$Attribute;
  var package$mesh = package$graphics.mesh || (package$graphics.mesh = {});
  package$mesh.Mesh = Mesh;
  package$mesh.ShapeMesh = ShapeMesh;
  package$mesh.SpriteMesh = SpriteMesh;
  package$graphics.Texture = Texture;
  TextureRegion.Impl = TextureRegion$Impl;
  package$graphics.TextureRegion = TextureRegion;
  Object.defineProperty(Key, 'A', {
    get: Key$A_getInstance
  });
  Object.defineProperty(Key, 'B', {
    get: Key$B_getInstance
  });
  Object.defineProperty(Key, 'C', {
    get: Key$C_getInstance
  });
  Object.defineProperty(Key, 'D', {
    get: Key$D_getInstance
  });
  Object.defineProperty(Key, 'E', {
    get: Key$E_getInstance
  });
  Object.defineProperty(Key, 'F', {
    get: Key$F_getInstance
  });
  Object.defineProperty(Key, 'G', {
    get: Key$G_getInstance
  });
  Object.defineProperty(Key, 'H', {
    get: Key$H_getInstance
  });
  Object.defineProperty(Key, 'I', {
    get: Key$I_getInstance
  });
  Object.defineProperty(Key, 'J', {
    get: Key$J_getInstance
  });
  Object.defineProperty(Key, 'K', {
    get: Key$K_getInstance
  });
  Object.defineProperty(Key, 'L', {
    get: Key$L_getInstance
  });
  Object.defineProperty(Key, 'M', {
    get: Key$M_getInstance
  });
  Object.defineProperty(Key, 'N', {
    get: Key$N_getInstance
  });
  Object.defineProperty(Key, 'O', {
    get: Key$O_getInstance
  });
  Object.defineProperty(Key, 'P', {
    get: Key$P_getInstance
  });
  Object.defineProperty(Key, 'Q', {
    get: Key$Q_getInstance
  });
  Object.defineProperty(Key, 'R', {
    get: Key$R_getInstance
  });
  Object.defineProperty(Key, 'S', {
    get: Key$S_getInstance
  });
  Object.defineProperty(Key, 'SPACE', {
    get: Key$SPACE_getInstance
  });
  Object.defineProperty(Key, 'T', {
    get: Key$T_getInstance
  });
  Object.defineProperty(Key, 'U', {
    get: Key$U_getInstance
  });
  Object.defineProperty(Key, 'V', {
    get: Key$V_getInstance
  });
  Object.defineProperty(Key, 'W', {
    get: Key$W_getInstance
  });
  Object.defineProperty(Key, 'X', {
    get: Key$X_getInstance
  });
  Object.defineProperty(Key, 'Y', {
    get: Key$Y_getInstance
  });
  Object.defineProperty(Key, 'Z', {
    get: Key$Z_getInstance
  });
  var package$input = package$dw.input || (package$dw.input = {});
  package$input.Key = Key;
  package$input.Keyboard = Keyboard;
  package$input.KeyListener = KeyListener;
  package$input.Mouse = Mouse;
  Object.defineProperty(MouseButton, 'LEFT', {
    get: MouseButton$LEFT_getInstance
  });
  Object.defineProperty(MouseButton, 'MIDDLE', {
    get: MouseButton$MIDDLE_getInstance
  });
  Object.defineProperty(MouseButton, 'RIGHT', {
    get: MouseButton$RIGHT_getInstance
  });
  package$input.MouseButton = MouseButton;
  package$input.MouseListener = MouseListener;
  var package$queue = package$input.queue || (package$input.queue = {});
  package$queue.InputQueue = InputQueue;
  KeyUpdate.Type = KeyUpdate$Type;
  KeyUpdate.Press = KeyUpdate$Press;
  KeyUpdate.Release = KeyUpdate$Release;
  package$queue.KeyUpdate = KeyUpdate;
  MouseUpdate.Move = MouseUpdate$Move;
  MouseUpdate.Press = MouseUpdate$Press;
  MouseUpdate.Release = MouseUpdate$Release;
  package$queue.MouseUpdate = MouseUpdate;
  package$queue.QueueUpdate = QueueUpdate;
  BoundingBox.Impl = BoundingBox$Impl;
  var package$math = package$dw.math || (package$dw.math = {});
  package$math.BoundingBox = BoundingBox;
  package$math.clamp_wj6e7o$ = clamp;
  package$math.interpolate_y2kzbl$ = interpolate;
  package$math.deg2rad_mx4ult$ = deg2rad;
  package$math.rad2deg_mx4ult$ = rad2deg;
  package$math.Matrix4_init = Matrix4_init;
  package$math.Matrix4_init_8odxlg$ = Matrix4_init_0;
  package$math.Matrix4 = Matrix4;
  package$math.MatrixBase = MatrixBase;
  var package$support = package$dw.support || (package$dw.support = {});
  package$support.Disposable = Disposable;
  Listener.Manager = Listener$Manager;
  Listener.ManagerImpl = Listener$ManagerImpl;
  package$support.Listener = Listener;
  package$support.Loadable = Loadable;
  package$support.swapBytes_s8ev3n$ = swapBytes;
  package$support.peek_2p1efm$ = peek;
  package$support.push_dwdffb$ = push;
  package$support.pop_vvxzk3$ = pop;
  var package$ui = package$dw.ui || (package$dw.ui = {});
  var package$container = package$ui.container || (package$ui.container = {});
  package$container.AbsoluteContainer = AbsoluteContainer;
  package$container.Container = Container;
  package$container.VerticalContainer = VerticalContainer;
  package$ui.Element = Element;
  package$ui.Frame = Frame;
  Object.defineProperty(Style, 'Companion', {
    get: Style$Companion_getInstance
  });
  package$ui.Style = Style;
  var package$widget = package$ui.widget || (package$ui.widget = {});
  package$widget.Button = Button;
  package$widget.Checkbox = Checkbox;
  package$widget.Dropdown = Dropdown;
  package$widget.Label = Label;
  Radio.Selection = Radio$Selection;
  Radio.Selector = Radio$Selector;
  package$widget.Radio = Radio;
  Slider.Knob = Slider$Knob;
  package$widget.Slider = Slider;
  package$widget.Tooltip = Tooltip;
  package$widget.Widget = Widget;
  var package$audio = package$dw.audio || (package$dw.audio = {});
  package$audio.Music = Music;
  Sound.Instance = Sound$Instance;
  package$audio.Sound = Sound;
  package$base.Screen = Screen;
  package$gl.GLBuffer = GLBuffer;
  package$gl.GLMethod = GLMethod;
  package$gl.GLProgram = GLProgram;
  package$gl.GLShader = GLShader;
  package$gl.GLTexture = GLTexture;
  package$gl.GLUniformLocation = GLUniformLocation;
  package$gl.GLVertexArray = GLVertexArray;
  var package$internal = package$dw.internal || (package$dw.internal = {});
  Object.defineProperty(package$internal, 'KeyboardHandler', {
    get: KeyboardHandler_getInstance
  });
  Object.defineProperty(package$internal, 'MouseHandler', {
    get: MouseHandler_getInstance
  });
  package$dw.main_kand9s$ = main;
  package$support.AssetLoader = AssetLoader;
  package$support.Memory = Memory;
  package$support.elapsedTime = elapsedTime;
  Game.prototype.keyPress_ysv3wg$ = KeyListener.prototype.keyPress_ysv3wg$;
  Game.prototype.keyRelease_ysv3wg$ = KeyListener.prototype.keyRelease_ysv3wg$;
  Game.prototype.keyType_s8itvh$ = KeyListener.prototype.keyType_s8itvh$;
  Game.prototype.mouseButtonPress_9wjh2w$ = MouseListener.prototype.mouseButtonPress_9wjh2w$;
  Game.prototype.mouseButtonRelease_9wjh2w$ = MouseListener.prototype.mouseButtonRelease_9wjh2w$;
  Game.prototype.mouseClick_nhq4am$ = MouseListener.prototype.mouseClick_nhq4am$;
  Game.prototype.mouseDragEnter_dleff0$ = MouseListener.prototype.mouseDragEnter_dleff0$;
  Game.prototype.mouseDragLeave_dleff0$ = MouseListener.prototype.mouseDragLeave_dleff0$;
  Game.prototype.mouseDragUpdate_dleff0$ = MouseListener.prototype.mouseDragUpdate_dleff0$;
  Game.prototype.mouseMove_dleff0$ = MouseListener.prototype.mouseMove_dleff0$;
  AutoBatch.prototype.drawArc_w8lrqs$ = ShapeBatch.prototype.drawArc_w8lrqs$;
  AutoBatch.prototype.drawCircle_y2kzbl$ = ShapeBatch.prototype.drawCircle_y2kzbl$;
  AutoBatch.prototype.drawEllipse_7b5o5w$ = ShapeBatch.prototype.drawEllipse_7b5o5w$;
  AutoBatch.prototype.drawRectangle_7b5o5w$ = ShapeBatch.prototype.drawRectangle_7b5o5w$;
  AutoBatch.prototype.drawSquare_y2kzbl$ = ShapeBatch.prototype.drawSquare_y2kzbl$;
  AutoBatch.prototype.drawTriangle_w8lrqs$ = ShapeBatch.prototype.drawTriangle_w8lrqs$;
  AutoBatch.prototype.fillArc_w8lrqs$ = ShapeBatch.prototype.fillArc_w8lrqs$;
  AutoBatch.prototype.fillCircle_y2kzbl$ = ShapeBatch.prototype.fillCircle_y2kzbl$;
  AutoBatch.prototype.fillEllipse_7b5o5w$ = ShapeBatch.prototype.fillEllipse_7b5o5w$;
  AutoBatch.prototype.fillRectangle_7b5o5w$ = ShapeBatch.prototype.fillRectangle_7b5o5w$;
  AutoBatch.prototype.fillSquare_y2kzbl$ = ShapeBatch.prototype.fillSquare_y2kzbl$;
  AutoBatch.prototype.fillTriangle_w8lrqs$ = ShapeBatch.prototype.fillTriangle_w8lrqs$;
  AutoBatch.prototype.line_7b5o5w$ = ShapeBatch.prototype.line_7b5o5w$;
  AutoBatch.prototype.point_dleff0$ = ShapeBatch.prototype.point_dleff0$;
  AutoBatch.prototype.drawString_lkl5tj$ = SpriteBatch.prototype.drawString_lkl5tj$;
  AutoBatch.prototype.drawStringMultiline_lkl5tj$ = SpriteBatch.prototype.drawStringMultiline_lkl5tj$;
  AutoBatch.prototype.drawTexture_5ir0qv$$default = SpriteBatch.prototype.drawTexture_5ir0qv$$default;
  AutoBatch.prototype.drawTexture_5ir0qv$ = SpriteBatch.prototype.drawTexture_5ir0qv$;
  ShapeBatchImpl.prototype.line_7b5o5w$ = ShapeBatch.prototype.line_7b5o5w$;
  ShapeBatchImpl.prototype.point_dleff0$ = ShapeBatch.prototype.point_dleff0$;
  ShapeBatchImpl.prototype.drawArc_w8lrqs$ = ShapeBatch.prototype.drawArc_w8lrqs$;
  ShapeBatchImpl.prototype.drawCircle_y2kzbl$ = ShapeBatch.prototype.drawCircle_y2kzbl$;
  ShapeBatchImpl.prototype.drawEllipse_7b5o5w$ = ShapeBatch.prototype.drawEllipse_7b5o5w$;
  ShapeBatchImpl.prototype.drawRectangle_7b5o5w$ = ShapeBatch.prototype.drawRectangle_7b5o5w$;
  ShapeBatchImpl.prototype.drawSquare_y2kzbl$ = ShapeBatch.prototype.drawSquare_y2kzbl$;
  ShapeBatchImpl.prototype.drawTriangle_w8lrqs$ = ShapeBatch.prototype.drawTriangle_w8lrqs$;
  ShapeBatchImpl.prototype.fillArc_w8lrqs$ = ShapeBatch.prototype.fillArc_w8lrqs$;
  ShapeBatchImpl.prototype.fillCircle_y2kzbl$ = ShapeBatch.prototype.fillCircle_y2kzbl$;
  ShapeBatchImpl.prototype.fillEllipse_7b5o5w$ = ShapeBatch.prototype.fillEllipse_7b5o5w$;
  ShapeBatchImpl.prototype.fillRectangle_7b5o5w$ = ShapeBatch.prototype.fillRectangle_7b5o5w$;
  ShapeBatchImpl.prototype.fillSquare_y2kzbl$ = ShapeBatch.prototype.fillSquare_y2kzbl$;
  ShapeBatchImpl.prototype.fillTriangle_w8lrqs$ = ShapeBatch.prototype.fillTriangle_w8lrqs$;
  SpriteBatchImpl.prototype.drawString_lkl5tj$ = SpriteBatch.prototype.drawString_lkl5tj$;
  SpriteBatchImpl.prototype.drawStringMultiline_lkl5tj$ = SpriteBatch.prototype.drawStringMultiline_lkl5tj$;
  SpriteBatchImpl.prototype.drawTexture_5ir0qv$$default = SpriteBatch.prototype.drawTexture_5ir0qv$$default;
  SpriteBatchImpl.prototype.drawTexture_5ir0qv$ = SpriteBatch.prototype.drawTexture_5ir0qv$;
  Object.defineProperty(TextureRegion.prototype, 'ww', Object.getOwnPropertyDescriptor(BoundingBox.prototype, 'ww'));
  Object.defineProperty(TextureRegion.prototype, 'hh', Object.getOwnPropertyDescriptor(BoundingBox.prototype, 'hh'));
  TextureRegion.prototype.inside_dleff0$ = BoundingBox.prototype.inside_dleff0$;
  TextureRegion.prototype.inside_13o58c$ = BoundingBox.prototype.inside_13o58c$;
  TextureRegion.prototype.intersects_13o58c$ = BoundingBox.prototype.intersects_13o58c$;
  TextureRegion.prototype.union_13o58c$ = BoundingBox.prototype.union_13o58c$;
  Object.defineProperty(Font$Glyph.prototype, 'sMin', Object.getOwnPropertyDescriptor(TextureRegion.prototype, 'sMin'));
  Object.defineProperty(Font$Glyph.prototype, 'tMin', Object.getOwnPropertyDescriptor(TextureRegion.prototype, 'tMin'));
  Object.defineProperty(Font$Glyph.prototype, 'sMax', Object.getOwnPropertyDescriptor(TextureRegion.prototype, 'sMax'));
  Object.defineProperty(Font$Glyph.prototype, 'tMax', Object.getOwnPropertyDescriptor(TextureRegion.prototype, 'tMax'));
  Font$Glyph.prototype.create_7b5o5w$ = TextureRegion.prototype.create_7b5o5w$;
  Object.defineProperty(Font$Glyph.prototype, 'ww', Object.getOwnPropertyDescriptor(TextureRegion.prototype, 'ww'));
  Object.defineProperty(Font$Glyph.prototype, 'hh', Object.getOwnPropertyDescriptor(TextureRegion.prototype, 'hh'));
  Font$Glyph.prototype.inside_dleff0$ = TextureRegion.prototype.inside_dleff0$;
  Font$Glyph.prototype.inside_13o58c$ = TextureRegion.prototype.inside_13o58c$;
  Font$Glyph.prototype.intersects_13o58c$ = TextureRegion.prototype.intersects_13o58c$;
  Font$Glyph.prototype.union_13o58c$ = TextureRegion.prototype.union_13o58c$;
  Object.defineProperty(Texture.prototype, 'sMin', Object.getOwnPropertyDescriptor(TextureRegion.prototype, 'sMin'));
  Object.defineProperty(Texture.prototype, 'tMin', Object.getOwnPropertyDescriptor(TextureRegion.prototype, 'tMin'));
  Object.defineProperty(Texture.prototype, 'sMax', Object.getOwnPropertyDescriptor(TextureRegion.prototype, 'sMax'));
  Object.defineProperty(Texture.prototype, 'tMax', Object.getOwnPropertyDescriptor(TextureRegion.prototype, 'tMax'));
  Texture.prototype.create_7b5o5w$ = TextureRegion.prototype.create_7b5o5w$;
  Object.defineProperty(Texture.prototype, 'ww', Object.getOwnPropertyDescriptor(TextureRegion.prototype, 'ww'));
  Object.defineProperty(Texture.prototype, 'hh', Object.getOwnPropertyDescriptor(TextureRegion.prototype, 'hh'));
  Texture.prototype.inside_dleff0$ = TextureRegion.prototype.inside_dleff0$;
  Texture.prototype.inside_13o58c$ = TextureRegion.prototype.inside_13o58c$;
  Texture.prototype.intersects_13o58c$ = TextureRegion.prototype.intersects_13o58c$;
  Texture.prototype.union_13o58c$ = TextureRegion.prototype.union_13o58c$;
  Object.defineProperty(TextureRegion$Impl.prototype, 'sMin', Object.getOwnPropertyDescriptor(TextureRegion.prototype, 'sMin'));
  Object.defineProperty(TextureRegion$Impl.prototype, 'tMin', Object.getOwnPropertyDescriptor(TextureRegion.prototype, 'tMin'));
  Object.defineProperty(TextureRegion$Impl.prototype, 'sMax', Object.getOwnPropertyDescriptor(TextureRegion.prototype, 'sMax'));
  Object.defineProperty(TextureRegion$Impl.prototype, 'tMax', Object.getOwnPropertyDescriptor(TextureRegion.prototype, 'tMax'));
  TextureRegion$Impl.prototype.create_7b5o5w$ = TextureRegion.prototype.create_7b5o5w$;
  Object.defineProperty(TextureRegion$Impl.prototype, 'ww', Object.getOwnPropertyDescriptor(TextureRegion.prototype, 'ww'));
  Object.defineProperty(TextureRegion$Impl.prototype, 'hh', Object.getOwnPropertyDescriptor(TextureRegion.prototype, 'hh'));
  TextureRegion$Impl.prototype.inside_dleff0$ = TextureRegion.prototype.inside_dleff0$;
  TextureRegion$Impl.prototype.inside_13o58c$ = TextureRegion.prototype.inside_13o58c$;
  TextureRegion$Impl.prototype.intersects_13o58c$ = TextureRegion.prototype.intersects_13o58c$;
  TextureRegion$Impl.prototype.union_13o58c$ = TextureRegion.prototype.union_13o58c$;
  Object.defineProperty(BoundingBox$Impl.prototype, 'ww', Object.getOwnPropertyDescriptor(BoundingBox.prototype, 'ww'));
  Object.defineProperty(BoundingBox$Impl.prototype, 'hh', Object.getOwnPropertyDescriptor(BoundingBox.prototype, 'hh'));
  BoundingBox$Impl.prototype.inside_dleff0$ = BoundingBox.prototype.inside_dleff0$;
  BoundingBox$Impl.prototype.inside_13o58c$ = BoundingBox.prototype.inside_13o58c$;
  BoundingBox$Impl.prototype.intersects_13o58c$ = BoundingBox.prototype.intersects_13o58c$;
  BoundingBox$Impl.prototype.union_13o58c$ = BoundingBox.prototype.union_13o58c$;
  Object.defineProperty(Element.prototype, 'hh', Object.getOwnPropertyDescriptor(BoundingBox.prototype, 'hh'));
  Object.defineProperty(Element.prototype, 'ww', Object.getOwnPropertyDescriptor(BoundingBox.prototype, 'ww'));
  Element.prototype.inside_13o58c$ = BoundingBox.prototype.inside_13o58c$;
  Element.prototype.inside_dleff0$ = BoundingBox.prototype.inside_dleff0$;
  Element.prototype.intersects_13o58c$ = BoundingBox.prototype.intersects_13o58c$;
  Element.prototype.union_13o58c$ = BoundingBox.prototype.union_13o58c$;
  Object.defineProperty(Frame.prototype, 'hh', Object.getOwnPropertyDescriptor(BoundingBox.prototype, 'hh'));
  Object.defineProperty(Frame.prototype, 'ww', Object.getOwnPropertyDescriptor(BoundingBox.prototype, 'ww'));
  Frame.prototype.inside_13o58c$ = BoundingBox.prototype.inside_13o58c$;
  Frame.prototype.inside_dleff0$ = BoundingBox.prototype.inside_dleff0$;
  Frame.prototype.intersects_13o58c$ = BoundingBox.prototype.intersects_13o58c$;
  Frame.prototype.union_13o58c$ = BoundingBox.prototype.union_13o58c$;
  Frame.prototype.mouseButtonPress_9wjh2w$ = MouseListener.prototype.mouseButtonPress_9wjh2w$;
  Frame.prototype.mouseButtonRelease_9wjh2w$ = MouseListener.prototype.mouseButtonRelease_9wjh2w$;
  Object.defineProperty(Dropdown$Entry.prototype, 'hh', Object.getOwnPropertyDescriptor(BoundingBox.prototype, 'hh'));
  Object.defineProperty(Dropdown$Entry.prototype, 'ww', Object.getOwnPropertyDescriptor(BoundingBox.prototype, 'ww'));
  Dropdown$Entry.prototype.inside_13o58c$ = BoundingBox.prototype.inside_13o58c$;
  Dropdown$Entry.prototype.inside_dleff0$ = BoundingBox.prototype.inside_dleff0$;
  Dropdown$Entry.prototype.intersects_13o58c$ = BoundingBox.prototype.intersects_13o58c$;
  Dropdown$Entry.prototype.union_13o58c$ = BoundingBox.prototype.union_13o58c$;
  Object.defineProperty(Slider$Knob.prototype, 'hh', Object.getOwnPropertyDescriptor(BoundingBox.prototype, 'hh'));
  Object.defineProperty(Slider$Knob.prototype, 'ww', Object.getOwnPropertyDescriptor(BoundingBox.prototype, 'ww'));
  Slider$Knob.prototype.inside_13o58c$ = BoundingBox.prototype.inside_13o58c$;
  Slider$Knob.prototype.inside_dleff0$ = BoundingBox.prototype.inside_dleff0$;
  Slider$Knob.prototype.intersects_13o58c$ = BoundingBox.prototype.intersects_13o58c$;
  Slider$Knob.prototype.union_13o58c$ = BoundingBox.prototype.union_13o58c$;
  main([]);
  Kotlin.defineModule('DungeonWorld', _);
  return _;
}));

//# sourceMappingURL=DungeonWorld.js.map
