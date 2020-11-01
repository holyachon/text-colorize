var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const ConstDefaultColorCode = "#DC00C7";
const HexToRGB = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16) / 255,
        g: parseInt(result[2], 16) / 255,
        b: parseInt(result[3], 16) / 255
    } : null;
};
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!figma.currentPage.selectedTextRange) {
            return "컬러를 입힐 텍스트를 선택해주세요";
        }
        const selectedTextRange = figma.currentPage.selectedTextRange;
        selectedTextRange.node.setRangeFills(selectedTextRange.start, selectedTextRange.end, [{
                type: 'SOLID',
                color: HexToRGB(ConstDefaultColorCode),
            }]);
        return ConstDefaultColorCode + " 컬러 적용 완료";
    });
}
main().then((message) => {
    figma.closePlugin(message);
});
