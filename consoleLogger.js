class consoleLogger {

    async logStepCompletionProgress(text) {
        console.log('========================================================');
        console.log('PASS : ' + text);
        console.log('========================================================');
    }
   
    async logStartOfTest() {
        console.log('========================================================');
        console.log('Insurance Form end-to-end test Started');
        console.log('========================================================');
    }

}
module.exports = consoleLogger;