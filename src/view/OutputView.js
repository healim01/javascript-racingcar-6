import { Console } from "@woowacourse/mission-utils";

const OutputView = {
  print(message) {
    Console.print(message);
  },

  printResultTitle() {
    this.print("실행 결과");
  },

  error(error) {
    this.print(error);
  },
};

export default OutputView;
