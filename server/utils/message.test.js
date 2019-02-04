var expect  = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Jen';
    var text = 'Some message';
    var message = generateMessage(from, text);

    expect(typeof message.createdAt).toBe('number');
    expect(message).toInclude({from, text});
  });
});

describe('generateLocationMessage', () =>{
  it('should generate corrcet location object' , () => {
    var from = 'deb';
    var latitude = 15;
    var longitude = 19;
    var utl = 'https://www.google.com/maps?q=15,19';
    var message = generateLocationMessage(from. latitude, longitude);

    expect(typeof message.createdAt).toBe('number');
    expect(message).toInclude({from, url});
  });
});
