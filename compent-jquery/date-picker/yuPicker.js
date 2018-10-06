/**
 * @author sunny586
 * @description 基于Zepto封装的移动端日期选择组件,可以精确的yyyy - MM - dd hh: mm
 * 2017-02-23
 */
(function ($, w) {

    //构造函数
    function YuPicker(opts) {
        //构造函数需要的参数
        this.dom = opts.dom;
        this.picker = opts.picker || 'timePicker';
        this.size = opts.size;
        this.start = opts.start || (this.picker == 'timePicker' && new Date().Format('yyyy-MM-dd hh:mm'));
        this.onConfirm = opts.onConfirm;
        this.onChange = opts.onChange;
        this.init();
        this.renderDOM();
        this.bindDOM();
    };

    YuPicker.prototype.init = function () {
        this.config = [];
        if (this.picker == 'timePicker') {
            var str = this.dom.val() || new Date().Format('yyyy-MM-dd hh:mm'),
                a = str.split(' '),
                b = a[1].split(':');
            this.config.push(a[0]);
            this.config.push(parseInt(b[0]));
            this.config.push(parseInt(b[1]));
        }
        if (this.picker == 'datePicker') {
            var str = this.dom.val() || new Date().Format('yyyy-MM-dd');
            this.config = str.split('-');
        }
    };

    YuPicker.prototype.renderDOM = function () {
        var self = this,
            dom = self.dom,
            picker = self.picker,
            len = self.size,
            start = self.start,
            wrap = $('<div></div>'),
            mask = $('<div class="yuui-mask yuui-animate-fade-in"></div>'),
            box = $('<div class="yuui-picker yuui-animate-slide-up"></div>'),
            okCancelBtn = $('<div class="yuui-picker__hd"><a href="javascript:;" data-action="cancel"class="yuui-picker__action">取消</a><a href="javascript:;" data-action="select" class="yuui-picker__action">确定</a></div>'),
            container = $('<div class="yuui-picker__bd"></div>'),
            commHtml = function (array, len, config, $content, flag) {
                for (var i = 0; i < len; i++) {
                    var item, temp;
                    switch (flag) {
                        case 'date':
                            var y = parseInt(self.start.split('-')[0]),
                                m = parseInt(self.start.split('-')[1]) - 1,
                                d = parseInt(self.start.split('-')[2]),
                                start_date = new Date(y, m, d).getTime(),
                                day_mills = 24 * 60 * 60 * 1000;
                            item = new Date(start_date + i * day_mills).Format('yyyy-MM-dd');
                            temp = $('<div class="yuui-picker__item">' + item + '</div>');
                            array.push(item);
                            break;
                        case 'hours':
                            item = i + '点';
                            temp = $('<div class="yuui-picker__item">' + item + '</div>');
                            array.push(i);
                            break;
                        case 'minutes':
                            item = i + '分';
                            temp = $('<div class="yuui-picker__item">' + item + '</div>');
                            array.push(i);
                            break;
                        case 'years':
                            item = parseInt(self.start) + i + '年';
                            temp = $('<div class="yuui-picker__item">' + item + '</div>');
                            array.push(parseInt(self.start) + i + '');
                            break;
                        case 'months':
                            item = (i + 1) + '月';
                            temp = $('<div class="yuui-picker__item">' + item + '</div>');
                            array.push((i + 1) < 10 ? ('0' + (i + 1)) : ((i + 1) + ''));
                            break;
                        case 'days':
                            item = (i + 1) + '日';
                            temp = $('<div class="yuui-picker__item">' + item + '</div>');
                            array.push((i + 1) < 10 ? ('0' + (i + 1)) : ((i + 1) + ''));
                            break;
                        default:
                            break;
                    }
                    $content.append(temp);
                }
                if (config) {
                    var index = array.indexOf(config);
                    if (index < 0) index = 0;
                    $content.css({
                        'transform': 'translate3d(0px,' + (102 - 34 * index) + 'px,0px)',
                        '-webkit-transform': 'translate3d(0px,' + (102 - 34 * index) + 'px,0px)',
                    });
                }
            },
            setHtml = function (type) {
                var group = $('<div class="yuui-picker__group">' +
                        '<div class="yuui-picker__mask"></div>' +
                        '<div class="yuui-picker__indicator"></div>' +
                        '  </div>'),
                    $content = $('<div class="yuui-picker__content"></div>');
                $content.css({
                    transform: 'translate3d(0px,102px,0px)'
                });
                switch (type) {
                    case 'date':
                        self.dateArr = [];
                        group.attr('data-type', 'date');
                        self.lenD = len;
                        commHtml(self.dateArr, self.lenD, self.config[0], $content, 'date');
                        break;
                    case 'hours':
                        self.hoursArr = [];
                        group.attr('data-type', 'hours');
                        self.lenH = 24;
                        commHtml(self.hoursArr, self.lenH, self.config[1], $content, 'hours');
                        break;
                    case 'minutes':
                        self.minutesArr = [];
                        group.attr('data-type', 'minutes');
                        self.lenM = 60;
                        commHtml(self.minutesArr, self.lenM, self.config[2], $content, 'minutes');
                        break;
                    case 'years':
                        self.yearsArr = [];
                        group.attr('data-type', 'years');
                        self.lenY = len;
                        commHtml(self.yearsArr, self.lenY, self.config[0], $content, 'years');
                        break;
                    case 'months':
                        self.monthsArr = [];
                        group.attr('data-type', 'months');
                        self.lenMs = 12;
                        commHtml(self.monthsArr, self.lenMs, self.config[1], $content, 'months');
                        break;
                    case 'days':
                        self.daysArr = [];
                        group.attr('data-type', 'days');
                        var months = parseInt(self.config[1], 10);
                        var d = new Date(self.config[0], months, 0);
                        self.lenDs = d.getDate();
                        commHtml(self.daysArr, self.lenDs, self.config[2], $content, 'days');
                        break;
                    default:
                        break;
                }
                group.append($content);
                return group;
            };
        wrap.append(mask);
        box.append(okCancelBtn);
        if (picker == 'timePicker') {
            //添加年月日
            container.append(setHtml('date'));
            //添加小时
            container.append(setHtml('hours'));
            //添加分钟
            container.append(setHtml('minutes'));
        }
        if (picker == 'datePicker') {
            container.append(setHtml('years'));
            container.append(setHtml('months'));
            container.append(setHtml('days'));
        }
        box.append(container);
        wrap.append(box);
        $('body').append(wrap);
        this.wrap = wrap;
        this.container = container;
        this.okCancelBtn = okCancelBtn;
        this.mask = mask;
    };

    YuPicker.prototype.bindDOM = function () {
        var self = this,
            drop = self.container.find('.yuui-picker__group'),
            confirmBtn = self.okCancelBtn.find('a[data-action="select"]'),
            cancelBtn = self.okCancelBtn.find('a[data-action="cancel"]'),
            setDataHandler = function () {
                if (self.picker == 'datePicker') {
                    var y = 0,
                        m = 0,
                        d = 0;
                    if (self.config.length > 0) {
                        y = self.yearsArr.indexOf(self.config[0]);
                        m = self.monthsArr.indexOf(self.config[1]);
                        d = self.daysArr.indexOf(self.config[2]);
                    }
                    var years = self.yearsArr[self.yearsIndex == undefined ? y : self.yearsIndex];
                    var months = self.monthsArr[self.monthsIndex == undefined ? m : self.monthsIndex];
                    var days = self.daysArr[self.daysIndex == undefined ? d : self.daysIndex];
                    self.years = years;
                    self.months = months;
                    return `${years}-${months}-${days}`;
                } else {
                    var di = 0,
                        hi = 0,
                        mi = 0;
                    if (self.config.length > 0) {
                        di = self.dateArr.indexOf(self.config[0]);
                        hi = self.hoursArr.indexOf(self.config[1]);
                        mi = self.minutesArr.indexOf(self.config[2]);
                    }
                    var date = self.dateArr[self.dateIndex == undefined ? di : self.dateIndex];
                    var hours = self.hoursArr[self.hoursIndex == undefined ? hi : self.hoursIndex];
                    var minutes = self.minutesArr[self.minutesIndex == undefined ? mi : self.minutesIndex];
                    return date + ' ' + (hours < 10 ? ('0' + hours) : hours) + ':' + (minutes < 10 ? ('0' + minutes) : minutes);
                }
            },
            //手指按下的处理事件
            startHandler = function (evt) {
                evt.preventDefault();
                var _self = $(this),
                    $content = _self.find('.yuui-picker__content');
                //记录刚刚开始按下的transform位置
                if ($content.css('transform')) {
                    self.transformY = parseInt($content.css('transform').split(',')[1].split('px')[0].trim());
                } else {
                    self.transformY = parseInt($content.css('-webkit-transform').split(',')[1].split('px')[0].trim());
                }
                //记录刚刚开始按下的时间
                self.startTime = new Date() * 1;
                //记录手指按下的坐标
                self.startY = evt.targetTouches[0].pageY;
                //清除偏移量
                self.offsetY = 0;
                //事件对象
                //self.target = evt.target.parentNode;
            },
            //手指移动的处理事件
            moveHandler = function (evt) {
                evt.preventDefault();
                var _self = $(this),
                    $content = _self.find('.yuui-picker__content');
                //计算手指的偏移量
                self.offsetY = evt.targetTouches[0].pageY - self.startY;
                //设置transform的值
                $content.css({
                    'transform': 'translate3d(0px, ' + (self.transformY + self.offsetY) + 'px, 0px)',
                    '-webkit-transform': 'translate3d(0px, ' + (self.transformY + self.offsetY) + 'px, 0px)'
                });
            },
            //手指抬起的处理事件
            endHandler = function (evt) {
                evt.preventDefault();
                var _self = $(this),
                    type = _self.data('type'),
                    len = 0,
                    $content = _self.find('.yuui-picker__content'),
                    multiple = parseInt((self.offsetY / 34).toFixed(0)),
                    y = self.transformY + self.offsetY,
                    resultY = self.transformY + multiple * 34,
                    renderDaysDom = function () {
                        var target = self.wrap.find('.yuui-picker__group[data-type="days"]').find('.yuui-picker__content');
                        self.daysArr = [];
                        var months = parseInt(self.months, 10);
                        var d = new Date(self.years, months, 0);
                        self.lenDs = d.getDate();
                        target.empty();
                        for (var i = 0; i < self.lenDs; i++) {
                            var item = (i + 1) + '日';
                            var temp = $('<div class="yuui-picker__item">' + item + '</div>');
                            self.daysArr.push((i + 1) < 10 ? ('0' + (i + 1)) : ((i + 1) + ''));
                            target.append(temp);
                        }
                        target.css({
                            transform: 'translate3d(0px,102px,0px)'
                        });
                    };
                switch (type) {
                    case 'date':
                        len = self.lenD;
                        break;
                    case 'hours':
                        len = self.lenH;
                        break;
                    case 'minutes':
                        len = self.lenM;
                        break;
                    case 'years':
                        len = self.lenY;
                        break;
                    case 'months':
                        len = self.lenMs;
                        break;
                    case 'days':
                        len = self.lenDs;
                    default:
                        break;
                }
                if (y > 102) resultY = 102;
                if (y < (4 - len) * 34) resultY = (4 - len) * 34;
                $content.css({
                    'transform': 'translate3d(0px, ' + resultY + 'px, 0px)',
                    '-webkit-transform': 'translate3d(0px, ' + resultY + 'px, 0px)'
                });
                self[type + 'Index'] = (102 - resultY) / 34;
                var data = setDataHandler();
                if (Object.prototype.toString.call(self.onChange) == '[object Function]') {
                    self.onChange(data);
                }
                if (type == 'years' || type == 'months') renderDaysDom();
            },
            //确定按钮
            confirmHandler = function () {
                var data = setDataHandler();
                self.dom.val(data);
                if (Object.prototype.toString.call(self.onConfirm) == '[object Function]') {
                    self.onConfirm(data);
                }
                self.wrap.remove();
            },
            //取消按钮
            removeWrap = function () {
                self.wrap.remove();
            };
        //绑定事件
        // drop.on('touchstart', startHandler);
        // drop.on('touchmove', moveHandler);
        // drop.on('touchend', endHandler);
        drop.get(0).addEventListener('mousedown', startHandler, false);
        drop.get(0).addEventListener('mousemove', moveHandler, false);
        drop.get(0).addEventListener('mouseup', endHandler, false);
        confirmBtn.on('click', confirmHandler);
        cancelBtn.on('click', removeWrap);
        self.mask.on('click', removeWrap);
    };

    Date.prototype.Format = function (fmt) {
        var o = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            "S": this.getMilliseconds()
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    };

    w.YuPicker = YuPicker;

})(window.Zepto || window.jQuery, window);