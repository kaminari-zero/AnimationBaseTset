var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Test;
(function (Test) {
    var TestBitCalr = (function () {
        function TestBitCalr() {
        }
        /**
         * 按位与(&):判断一个数是奇数还是偶数，我们会用求余数来判断：
         * 只有两个数的值为1时，才返回1.
         *  */
        TestBitCalr.judgeNumberOddOrEven = function (n) {
            //常规运算:
            if (n % 2 === 1) {
                console.log("n % 2:n是奇数");
            }
            else {
                console.log("n % 2:n是偶数");
            }
            //位运算
            if (n & 1) {
                console.log("n & 1:n是奇数");
            }
            else {
                console.log("n & 1:n是偶数");
            }
        };
        /**
         *  按位或(|):浮点数的向下取整
         *  只要两个数中有一个数为1，结果就为1，其他则为0。
         *  */
        TestBitCalr.getFloat2Int = function (n) {
            var num = Math.floor(1.1);
            console.log("Math.floor:", num);
            //其实浮点数是不支持位运算的，所以会先把1.1转成整数1再进行位运算，就好像是对浮点数向下求整。
            //所以1|0的结果就是1。
            var num = 1.1 | 0;
            console.log("1.1 | 0:", num);
        };
        /**
         * 按位非(~):
         * 按位非就是求二进制的反码：
         * 有符号的32位二进制的最高位也就是第一位数字代表着正负，1代表负数，0代表整数。
         * 最高位为1代表负数，负数的二进制转化为十进制：符号位不变，其他位取反加1。
         * 例:
         * 11111111111111111111111111111110
         * 取反
         * 10000000000000000000000000000010
         */
        TestBitCalr.getBitCounterCode = function () {
            var num = 1;
            var num2 = ~num;
            console.log("\"" + num + "\"\u53D6\u53CD\u540E,\u4E3A:" + num2);
        };
        /**
         * 按位异或(^):
         * 按位异或是两个数中只有一个1时返回1，其他情况返回0。
         */
        TestBitCalr.changeNum = function (x, y) {
            var num1 = x, num2 = y, temp;
            temp = num1;
            num1 = num2;
            num2 = temp;
            console.log("\u8F6C\u6362\u524D:x:" + x + ",y:" + y + ",\u8F6C\u6362\u540E=>x:" + num1 + ",y:" + num2);
            // var num1 = 1, num2 = 2;
            // num1 ^= num2; // num1 = num1 ^ num2 = 1 ^ 2 = 3
            // num2 ^= num1; // num2 = num2 ^ (num1 ^ num2) = 2 ^ (1 ^ 2) = 1
            // num1 ^= num2; // num1 = num1 ^ num2 = 3 ^ 1 = 2
        };
        TestBitCalr.changeNum2 = function (x, y) {
            // var num1 = 1, num2 = 2;
            var num1 = x, num2 = y;
            // num1 ^= num2; // num1 = num1 ^ num2 = 1 ^ 2 = 3
            // num2 ^= num1; // num2 = num2 ^ (num1 ^ num2) = 2 ^ (1 ^ 2) = 1
            // num1 ^= num2; // num1 = num1 ^ num2 = 3 ^ 1 = 2
            num1 += num2;
            num2 += num1;
            num1 -= num2;
            console.log("\u8F6C\u6362\u524D:x:" + x + ",y:" + y + ",\u8F6C\u6362\u540E=>x:" + num1 + ",y:" + num2);
        };
        return TestBitCalr;
    }());
    Test.TestBitCalr = TestBitCalr;
    __reflect(TestBitCalr.prototype, "Test.TestBitCalr");
})(Test || (Test = {}));
//# sourceMappingURL=位运算测试.js.map