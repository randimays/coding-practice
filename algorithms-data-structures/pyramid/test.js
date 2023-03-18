const pyramid = require('./index');

beforeEach(() => {
    jest.spyOn(console, 'log');
});

afterEach(() => {
    console.log.mockRestore();
});

test('pyramid is a function', () => {
    expect(typeof pyramid).toEqual('function');
});

test('prints correctly for n = 1', () => {
    pyramid(1);
    expect(console.log.mock.calls[0][0]).toEqual('#');
    expect(console.log.mock.calls.length).toEqual(1);
});

test('prints a pyramid for n = 2', () => {
    pyramid(2);
    expect(console.log.mock.calls[0][0]).toEqual(' # ');
    expect(console.log.mock.calls[1][0]).toEqual('###');
    expect(console.log.mock.calls.length).toEqual(2);
});

test('prints a pyramid for n = 3', () => {
    pyramid(3);
    expect(console.log.mock.calls[0][0]).toEqual('  #  ');
    expect(console.log.mock.calls[1][0]).toEqual(' ### ');
    expect(console.log.mock.calls[2][0]).toEqual('#####');
    expect(console.log.mock.calls.length).toEqual(3);
});

test('prints a pyramid for n = 4', () => {
    pyramid(4);
    expect(console.log.mock.calls[0][0]).toEqual('   #   ');
    expect(console.log.mock.calls[1][0]).toEqual('  ###  ');
    expect(console.log.mock.calls[2][0]).toEqual(' ##### ');
    expect(console.log.mock.calls[3][0]).toEqual('#######');
    expect(console.log.mock.calls.length).toEqual(4);
});

test('prints a pyramid for n = 5', () => {
    pyramid(5);
    expect(console.log.mock.calls[0][0]).toEqual('    #    ');
    expect(console.log.mock.calls[1][0]).toEqual('   ###   ');
    expect(console.log.mock.calls[2][0]).toEqual('  #####  ');
    expect(console.log.mock.calls[3][0]).toEqual(' ####### ');
    expect(console.log.mock.calls[4][0]).toEqual('#########');
    expect(console.log.mock.calls.length).toEqual(5);
});

test('prints a pyramid for n = 6', () => {
    pyramid(6);
    expect(console.log.mock.calls[0][0]).toEqual('     #     ');
    expect(console.log.mock.calls[1][0]).toEqual('    ###    ');
    expect(console.log.mock.calls[2][0]).toEqual('   #####   ');
    expect(console.log.mock.calls[3][0]).toEqual('  #######  ');
    expect(console.log.mock.calls[4][0]).toEqual(' ######### ');
    expect(console.log.mock.calls[5][0]).toEqual('###########');
    expect(console.log.mock.calls.length).toEqual(6);
});

test('prints a pyramid for n = 7', () => {
    pyramid(7);
    expect(console.log.mock.calls[0][0]).toEqual('      #      ');
    expect(console.log.mock.calls[1][0]).toEqual('     ###     ');
    expect(console.log.mock.calls[2][0]).toEqual('    #####    ');
    expect(console.log.mock.calls[3][0]).toEqual('   #######   ');
    expect(console.log.mock.calls[4][0]).toEqual('  #########  ');
    expect(console.log.mock.calls[5][0]).toEqual(' ########### ');
    expect(console.log.mock.calls[6][0]).toEqual('#############');
    expect(console.log.mock.calls.length).toEqual(7);
});

test('prints a pyramid for n = 8', () => {
    pyramid(8);
    expect(console.log.mock.calls[0][0]).toEqual('       #       ');
    expect(console.log.mock.calls[1][0]).toEqual('      ###      ');
    expect(console.log.mock.calls[2][0]).toEqual('     #####     ');
    expect(console.log.mock.calls[3][0]).toEqual('    #######    ');
    expect(console.log.mock.calls[4][0]).toEqual('   #########   ');
    expect(console.log.mock.calls[5][0]).toEqual('  ###########  ');
    expect(console.log.mock.calls[6][0]).toEqual(' ############# ');
    expect(console.log.mock.calls[7][0]).toEqual('###############');
    expect(console.log.mock.calls.length).toEqual(8);
});

test('prints a pyramid for n = 20', () => {
    pyramid(20);
    expect(console.log.mock.calls[0][0]).toEqual('                   #                   ');
    expect(console.log.mock.calls[1][0]).toEqual('                  ###                  ');
    expect(console.log.mock.calls[2][0]).toEqual('                 #####                 ');
    expect(console.log.mock.calls[3][0]).toEqual('                #######                ');
    expect(console.log.mock.calls[4][0]).toEqual('               #########               ');
    expect(console.log.mock.calls[5][0]).toEqual('              ###########              ');
    expect(console.log.mock.calls[6][0]).toEqual('             #############             ');
    expect(console.log.mock.calls[7][0]).toEqual('            ###############            ');
    expect(console.log.mock.calls[8][0]).toEqual('           #################           ');
    expect(console.log.mock.calls[9][0]).toEqual('          ###################          ');
    expect(console.log.mock.calls[10][0]).toEqual('         #####################         ');
    expect(console.log.mock.calls[11][0]).toEqual('        #######################        ');
    expect(console.log.mock.calls[12][0]).toEqual('       #########################       ');
    expect(console.log.mock.calls[13][0]).toEqual('      ###########################      ');
    expect(console.log.mock.calls[14][0]).toEqual('     #############################     ');
    expect(console.log.mock.calls[15][0]).toEqual('    ###############################    ');
    expect(console.log.mock.calls[16][0]).toEqual('   #################################   ');
    expect(console.log.mock.calls[17][0]).toEqual('  ###################################  ');
    expect(console.log.mock.calls[18][0]).toEqual(' ##################################### ');
    expect(console.log.mock.calls[19][0]).toEqual('#######################################');
    expect(console.log.mock.calls.length).toEqual(20);
});