import React, { useState, useEffect } from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = ".inputWrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.inputLabel {\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n}\r\n\r\n.input {\r\n    padding: 10px;\r\n    border: 1px solid #DEDEDE;\r\n    border-radius: 5px;\r\n    outline: none;\r\n}\r\n\r\n.inputError {\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    color: red;\r\n}";
styleInject(css_248z$1);

const Input = (props) => {
    const { label, type, value, onChange, errorText, validator, wrapperClassname, labelClassname, inputClassname, errorClassname, } = props;
    const [showError, setShowError] = useState(false);
    useEffect(() => {
        const validated = validator(value);
        if (validated) {
            setShowError(false);
        }
        else {
            setShowError(true);
        }
    }, [value]);
    return (React.createElement("div", { className: wrapperClassname || 'inputWrapper' },
        React.createElement("div", { className: labelClassname || 'inputLabel' }, label),
        React.createElement("input", { type: type, value: value, onChange: (e) => onChange(e.target.value), className: inputClassname || 'input' }),
        showError && (React.createElement("div", { className: errorClassname || 'inputError' }, errorText))));
};
Input.defaultProps = {
    wrapperClassname: '',
    labelClassname: '',
    inputClassname: '',
    errorClassname: '',
};

var css_248z = ".dynamicFormWrapper {\r\n    background-color: white;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n}";
styleInject(css_248z);

const DynamicForm = (props) => {
    const { data, wrapperClassname } = props;
    return (React.createElement("div", { className: wrapperClassname || 'dynamicFormWrapper' }, data.map(item => {
        const { id, label, type, value, onChangeHandler, errorText, validator, } = item;
        return (React.createElement(Input, { key: id, label: label, type: type, value: value, onChange: onChangeHandler, errorText: errorText, validator: validator }));
    })));
};
DynamicForm.defaultProps = {
    wrapperClassname: '',
};

export { DynamicForm };
