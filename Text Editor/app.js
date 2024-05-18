document.addEventListener("DOMContentLoaded", function() {
    const editor = document.getElementById('editor');
    const boldBtn = document.getElementById('boldBtn');
    const italicBtn = document.getElementById('italicBtn');
    const underlineBtn = document.getElementById('underlineBtn');
    const fontSizeSelect = document.getElementById('fontSize');
    const fontFamilySelect = document.getElementById('fontFamily');
    const textColorInput = document.getElementById('textColor');
    const alignLeftBtn = document.getElementById('alignLeftBtn');
    const alignCenterBtn = document.getElementById('alignCenterBtn');
    const alignRightBtn = document.getElementById('alignRightBtn');
    const textStyleSelect = document.getElementById('textStyle');

    boldBtn.addEventListener('click', function() {
        document.execCommand('bold', false, null);
    });

    italicBtn.addEventListener('click', function() {
        document.execCommand('italic', false, null);
    });

    underlineBtn.addEventListener('click', function() {
        document.execCommand('underline', false, null);
    });

    fontSizeSelect.addEventListener('change', function() {
        editor.style.fontSize = this.value + 'px';
    });

    fontFamilySelect.addEventListener('change', function() {
        editor.style.fontFamily = this.value;
    });

    textColorInput.addEventListener('input', function() {
        editor.style.color = this.value;
    });

    alignLeftBtn.addEventListener('click', function() {
        document.execCommand('justifyLeft', false, null);
    });

    alignCenterBtn.addEventListener('click', function() {
        document.execCommand('justifyCenter', false, null);
    });

    alignRightBtn.addEventListener('click', function() {
        document.execCommand('justifyRight', false, null);
    });

    textStyleSelect.addEventListener('change', function() {
        if (this.value === 'heading') {
            editor.style.fontWeight = 'bold';
            editor.style.fontSize = '24px';
            editor.style.color = 'black';
        } else {
            editor.style.fontWeight = 'normal';
            editor.style.fontSize = 'inherit';
            editor.style.color = 'inherit';
        }
    });
});
