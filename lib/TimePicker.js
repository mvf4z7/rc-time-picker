'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcTrigger = require('rc-trigger');

var _rcTrigger2 = _interopRequireDefault(_rcTrigger);

var _Panel = require('./Panel');

var _Panel2 = _interopRequireDefault(_Panel);

var _placements = require('./placements');

var _placements2 = _interopRequireDefault(_placements);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function noop() {}

function refFn(field, component) {
  this[field] = component;
}

var Picker = _react2['default'].createClass({
  displayName: 'Picker',

  propTypes: {
    prefixCls: _react.PropTypes.string,
    clearText: _react.PropTypes.string,
    value: _react.PropTypes.object,
    defaultOpenValue: _react.PropTypes.object,
    disabled: _react.PropTypes.bool,
    allowEmpty: _react.PropTypes.bool,
    defaultValue: _react.PropTypes.object,
    open: _react.PropTypes.bool,
    defaultOpen: _react.PropTypes.bool,
    align: _react.PropTypes.object,
    placement: _react.PropTypes.any,
    transitionName: _react.PropTypes.string,
    getPopupContainer: _react.PropTypes.func,
    placeholder: _react.PropTypes.string,
    format: _react.PropTypes.string,
    showHour: _react.PropTypes.bool,
    showMinute: _react.PropTypes.bool,
    showSecond: _react.PropTypes.bool,
    style: _react.PropTypes.object,
    className: _react.PropTypes.string,
    disabledHours: _react.PropTypes.func,
    disabledMinutes: _react.PropTypes.func,
    disabledSeconds: _react.PropTypes.func,
    hideDisabledOptions: _react.PropTypes.bool,
    onChange: _react.PropTypes.func,
    onOpen: _react.PropTypes.func,
    onClose: _react.PropTypes.func,
    addon: _react.PropTypes.func,
    military: _react.PropTypes.bool,
    hoursDisplayFunc: _react.PropTypes.func,
    minutesDisplayFunc: _react.PropTypes.func,
    secondsDisplayFunc: _react.PropTypes.func
  },

  getDefaultProps: function () {
    function getDefaultProps() {
      return {
        clearText: 'clear',
        prefixCls: 'rc-time-picker',
        defaultOpen: false,
        style: {},
        className: '',
        align: {},
        defaultOpenValue: (0, _moment2['default'])(),
        allowEmpty: true,
        showHour: true,
        showMinute: true,
        showSecond: true,
        disabledHours: noop,
        disabledMinutes: noop,
        disabledSeconds: noop,
        hideDisabledOptions: false,
        placement: 'bottomLeft',
        onChange: noop,
        onOpen: noop,
        onClose: noop,
        addon: noop,
        military: false
      };
    }

    return getDefaultProps;
  }(),
  getInitialState: function () {
    function getInitialState() {
      this.savePanelRef = refFn.bind(this, 'panelInstance');
      var _props = this.props,
          defaultOpen = _props.defaultOpen,
          defaultValue = _props.defaultValue,
          _props$open = _props.open,
          open = _props$open === undefined ? defaultOpen : _props$open,
          _props$value = _props.value,
          value = _props$value === undefined ? defaultValue : _props$value;

      return {
        open: open,
        value: value
      };
    }

    return getInitialState;
  }(),
  componentWillReceiveProps: function () {
    function componentWillReceiveProps(nextProps) {
      var value = nextProps.value,
          open = nextProps.open;

      if ('value' in nextProps) {
        this.setState({
          value: value
        });
      }
      if (open !== undefined) {
        this.setState({ open: open });
      }
    }

    return componentWillReceiveProps;
  }(),
  onPanelChange: function () {
    function onPanelChange(value) {
      this.setValue(value);
    }

    return onPanelChange;
  }(),
  onPanelClear: function () {
    function onPanelClear() {
      this.setValue(null);
      this.setOpen(false);
    }

    return onPanelClear;
  }(),
  onVisibleChange: function () {
    function onVisibleChange(open) {
      this.setOpen(open);
    }

    return onVisibleChange;
  }(),
  onEsc: function () {
    function onEsc() {
      this.setOpen(false);
      this.refs.picker.focus();
    }

    return onEsc;
  }(),
  onKeyDown: function () {
    function onKeyDown(e) {
      if (e.keyCode === 40) {
        this.setOpen(true);
      }
    }

    return onKeyDown;
  }(),
  setValue: function () {
    function setValue(value) {
      if (!('value' in this.props)) {
        this.setState({
          value: value
        });
      }
      this.props.onChange(value);
    }

    return setValue;
  }(),
  getFormat: function () {
    function getFormat() {
      var _props2 = this.props,
          format = _props2.format,
          showHour = _props2.showHour,
          showMinute = _props2.showMinute,
          showSecond = _props2.showSecond;

      if (format) {
        return format;
      }
      return [showHour ? 'HH' : '', showMinute ? 'mm' : '', showSecond ? 'ss' : ''].filter(function (item) {
        return !!item;
      }).join(':');
    }

    return getFormat;
  }(),
  getPanelElement: function () {
    function getPanelElement() {
      var _props3 = this.props,
          prefixCls = _props3.prefixCls,
          placeholder = _props3.placeholder,
          disabledHours = _props3.disabledHours,
          disabledMinutes = _props3.disabledMinutes,
          disabledSeconds = _props3.disabledSeconds,
          hideDisabledOptions = _props3.hideDisabledOptions,
          allowEmpty = _props3.allowEmpty,
          showHour = _props3.showHour,
          showMinute = _props3.showMinute,
          showSecond = _props3.showSecond,
          defaultOpenValue = _props3.defaultOpenValue,
          clearText = _props3.clearText,
          addon = _props3.addon,
          military = _props3.military,
          hoursDisplayFunc = _props3.hoursDisplayFunc,
          minutesDisplayFunc = _props3.minutesDisplayFunc,
          secondsDisplayFunc = _props3.secondsDisplayFunc;

      return _react2['default'].createElement(_Panel2['default'], {
        clearText: clearText,
        prefixCls: prefixCls + '-panel',
        ref: this.savePanelRef,
        value: this.state.value,
        onChange: this.onPanelChange,
        onClear: this.onPanelClear,
        defaultOpenValue: defaultOpenValue,
        showHour: showHour,
        showMinute: showMinute,
        showSecond: showSecond,
        onEsc: this.onEsc,
        allowEmpty: allowEmpty,
        format: this.getFormat(),
        placeholder: placeholder,
        disabledHours: disabledHours,
        disabledMinutes: disabledMinutes,
        disabledSeconds: disabledSeconds,
        hideDisabledOptions: hideDisabledOptions,
        addon: addon,
        military: military,
        hoursDisplayFunc: hoursDisplayFunc,
        minutesDisplayFunc: minutesDisplayFunc,
        secondsDisplayFunc: secondsDisplayFunc
      });
    }

    return getPanelElement;
  }(),
  setOpen: function () {
    function setOpen(open, callback) {
      var _props4 = this.props,
          onOpen = _props4.onOpen,
          onClose = _props4.onClose;

      if (this.state.open !== open) {
        this.setState({
          open: open
        }, callback);
        var event = {
          open: open
        };
        if (open) {
          onOpen(event);
        } else {
          onClose(event);
        }
      }
    }

    return setOpen;
  }(),
  render: function () {
    function render() {
      var _props5 = this.props,
          prefixCls = _props5.prefixCls,
          placeholder = _props5.placeholder,
          placement = _props5.placement,
          align = _props5.align,
          disabled = _props5.disabled,
          transitionName = _props5.transitionName,
          style = _props5.style,
          className = _props5.className,
          showHour = _props5.showHour,
          showMinute = _props5.showMinute,
          showSecond = _props5.showSecond,
          getPopupContainer = _props5.getPopupContainer;
      var _state = this.state,
          open = _state.open,
          value = _state.value;

      var popupClassName = void 0;
      if (!showHour || !showMinute || !showSecond) {
        popupClassName = prefixCls + '-panel-narrow';
      }
      return _react2['default'].createElement(
        _rcTrigger2['default'],
        {
          prefixCls: prefixCls + '-panel',
          popupClassName: popupClassName,
          popup: this.getPanelElement(),
          popupAlign: align,
          builtinPlacements: _placements2['default'],
          popupPlacement: placement,
          action: disabled ? [] : ['click'],
          destroyPopupOnHide: true,
          getPopupContainer: getPopupContainer,
          popupTransitionName: transitionName,
          popupVisible: open,
          onPopupVisibleChange: this.onVisibleChange
        },
        _react2['default'].createElement(
          'span',
          { className: prefixCls + ' ' + className, style: style },
          _react2['default'].createElement('input', {
            className: prefixCls + '-input',
            ref: 'picker', type: 'text', placeholder: placeholder,
            readOnly: true,
            onKeyDown: this.onKeyDown,
            disabled: disabled, value: value && value.format(this.getFormat()) || ''
          }),
          _react2['default'].createElement('span', { className: prefixCls + '-icon' })
        )
      );
    }

    return render;
  }()
});

exports['default'] = Picker;