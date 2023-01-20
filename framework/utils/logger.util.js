class Logger {
    static async info(text) {
        console.log(`[INFO] ${new Date()} | ${text} [INFO]`);
    }

    static async error(text) {
        console.log(`[ERROR] ${new Date()} | ${text} [ERROR]`);
    }

    static async warning(text) {
        console.log(`[WARNING] ${new Date()} | ${text} [WARNING]`);
    }
}

module.exports = Logger;
