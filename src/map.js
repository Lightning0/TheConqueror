const theMap = [["w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"], ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"], ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "0", "0", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"], ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "0", "0", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"], ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "0", "0", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"], ["w", "w", "w", "0", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "0", "0", "w", "0", "0", "0", "0", "0", "0", "w", "0", "0", "0", "0", "0", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "0", "0", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"], ["w", "w", "w", "0", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "0", "0", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"], ["w", "w", "w", "0", "0", "0", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "0", "0", "w", "0", "0", "w", "w", "0", "0", "w", "0", "0", "0", "0", "0", "w", "w", "0", "0", "0", "w", "0", "0", "0", "w", "0", "0", "0", "w", "w", "0", "w", "0", "w", "0", "w", "w", "w"], ["w", "w", "0", "0", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "0", "0", "w", "w", "0", "0", "w", "w", "w", "w", "w", "w", "w", "w", "w", "0", "w", "w", "w", "0", "w", "w", "w", "0", "w", "w", "w", "0", "w", "0", "w", "0", "w", "w", "w"], ["w", "w", "0", "0", "w", "w", "0", "0", "0", "0", "0", "0", "0", "0", "0", "m", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "m", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "w", "w"], ["w", "w", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "m", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "m", "0", "0", "0", "0", "0", "0", "0", "0", "0", "w", "w"], ["w", "w", "0", "0", "0", "0", "w", "w", "w", "0", "0", "w", "w", "w", "w", "w", "0", "0", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "0", "0", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "0", "w", "w", "w", "0", "w", "w", "w", "0", "w", "w", "w", "0", "w", "0", "w", "0", "w", "w", "w"], ["w", "w", "w", "0", "w", "w", "w", "w", "w", "0", "0", "w", "w", "w", "w", "w", "0", "0", "w", "w", "w", "w", "w", "w", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "w", "w", "w", "w", "w", "w", "0", "0", "0", "w", "0", "0", "0", "w", "0", "0", "0", "w", "w", "0", "w", "0", "w", "0", "w", "w", "w"], ["w", "w", "w", "0", "w", "w", "w", "w", "w", "0", "0", "w", "w", "0", "0", "0", "0", "0", "0", "0", "0", "w", "w", "w", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"], ["w", "w", "0", "0", "0", "0", "0", "w", "w", "0", "0", "w", "w", "0", "w", "0", "0", "0", "0", "w", "0", "w", "w", "w", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"], ["w", "w", "0", "0", "0", "0", "0", "w", "w", "0", "0", "w", "w", "0", "0", "0", "w", "w", "0", "0", "0", "w", "w", "w", "0", "0", "0", "p", "0", "0", "0", "m", "0", "0", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"], ["w", "w", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "w", "w", "0", "0", "0", "w", "w", "w", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"], ["w", "w", "0", "0", "0", "0", "0", "w", "w", "0", "0", "w", "w", "0", "0", "0", "0", "0", "0", "0", "0", "w", "w", "w", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"], ["w", "w", "0", "0", "w", "w", "w", "w", "w", "0", "0", "w", "w", "0", "w", "0", "0", "0", "0", "w", "0", "w", "w", "w", "0", "0", "0", "0", "w", "w", "0", "0", "0", "0", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"], ["w", "w", "w", "w", "w", "w", "w", "w", "w", "0", "0", "w", "w", "0", "0", "0", "0", "0", "0", "0", "0", "w", "w", "w", "0", "0", "0", "0", "w", "w", "0", "0", "0", "0", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"], ["w", "w", "w", "w", "w", "w", "w", "w", "w", "0", "0", "w", "w", "0", "0", "0", "0", "0", "0", "0", "0", "w", "w", "w", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"], ["w", "w", "w", "w", "w", "w", "w", "w", "w", "0", "0", "w", "w", "0", "0", "0", "w", "w", "0", "0", "m", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "0", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"], ["w", "w", "w", "w", "w", "w", "w", "w", "w", "0", "0", "w", "w", "0", "w", "0", "w", "w", "0", "w", "0", "w", "w", "w", "w", "w", "0", "0", "w", "w", "0", "0", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"], ["w", "w", "w", "w", "w", "w", "w", "w", "w", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "m", "0", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"], ["w", "w", "0", "0", "0", "0", "w", "w", "w", "0", "0", "w", "w", "0", "0", "0", "0", "0", "0", "0", "0", "w", "w", "w", "w", "w", "0", "0", "0", "0", "0", "0", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"], ["w", "w", "0", "w", "w", "0", "0", "0", "0", "0", "0", "w", "w", "0", "0", "0", "0", "0", "0", "0", "0", "w", "w", "w", "w", "w", "0", "0", "0", "0", "0", "0", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"], ["w", "w", "0", "w", "w", "0", "0", "0", "0", "0", "0", "w", "w", "w", "w", "w", "0", "0", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "0", "0", "0", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"], ["w", "w", "m", "0", "0", "0", "w", "w", "w", "0", "0", "w", "w", "w", "w", "w", "0", "0", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "0", "0", "0", "w", "w", "w", "w", "w", "w", "0", "0", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"], ["w", "w", "w", "w", "w", "w", "w", "w", "w", "0", "0", "w", "w", "w", "w", "w", "0", "0", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "w", "w", "0", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"], ["w", "w", "w", "w", "w", "w", "w", "w", "w", "0", "0", "w", "w", "w", "0", "0", "0", "0", "0", "0", "w", "w", "w", "0", "0", "0", "0", "w", "w", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "w", "w", "0", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"], ["w", "w", "w", "w", "w", "w", "w", "w", "w", "0", "0", "w", "w", "w", "0", "0", "0", "0", "0", "0", "w", "w", "w", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"], ["w", "w", "w", "w", "w", "w", "w", "w", "w", "0", "0", "w", "w", "w", "m", "0", "w", "w", "0", "0", "w", "w", "0", "m", "0", "0", "0", "0", "0", "0", "0", "0", "0", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"], ["w", "w", "w", "w", "w", "w", "w", "0", "0", "0", "0", "0", "0", "w", "0", "0", "w", "w", "0", "0", "w", "w", "0", "0", "0", "0", "0", "0", "w", "w", "0", "m", "0", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"], ["w", "w", "w", "w", "w", "w", "w", "w", "w", "0", "0", "w", "w", "w", "0", "0", "0", "0", "0", "0", "w", "w", "0", "0", "0", "w", "w", "0", "w", "w", "0", "0", "0", "0", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"], ["w", "w", "w", "w", "w", "w", "w", "w", "w", "0", "0", "w", "w", "w", "0", "0", "0", "0", "0", "0", "w", "w", "0", "0", "0", "w", "w", "0", "0", "w", "0", "0", "0", "0", "0", "0", "0", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"], ["w", "w", "w", "w", "w", "w", "w", "w", "w", "0", "0", "w", "w", "w", "0", "w", "w", "w", "w", "w", "w", "w", "0", "0", "0", "0", "0", "0", "0", "w", "0", "0", "0", "w", "w", "0", "0", "0", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"], ["w", "w", "w", "w", "w", "w", "w", "w", "w", "0", "0", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "0", "0", "0", "0", "0", "0", "w", "0", "0", "0", "w", "w", "0", "0", "0", "0", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"], ["w", "w", "w", "w", "w", "w", "w", "w", "w", "0", "0", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "0", "w", "w", "w", "0", "0", "0", "w", "w", "w", "w", "0", "0", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"], ["w", "w", "w", "w", "w", "w", "w", "w", "w", "0", "0", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "0", "0", "0", "0", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"], ["w", "w", "w", "w", "w", "w", "w", "w", "w", "0", "m", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "0", "0", "0", "0", "m", "0", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"], ["w", "w", "w", "w", "w", "w", "w", "w", "w", "0", "0", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "0", "0", "0", "0", "0", "0", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"], ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "0", "0", "0", "0", "0", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"], ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "0", "0", "0", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"], ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "0", "0", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"], ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "0", "0", "0", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"], ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"], ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"]]

// Get map stored in local storage from the map creator, or return a random map.
export const getTheMap = () => {
    let map = localStorage.getItem("map");
    if (map !== null) return JSON.parse(map);
    else {
        // for (let i = 2; i < theMap.length - 2; ++i) {
        //     for (let j = 2; j < theMap[0].length - 2; ++j) {
        //         if (Math.random() < 0.04) theMap[i][j] = 'w';
        //         if (Math.random() < 0.005) theMap[i][j] = 'i';
        //     }
        // }
        return theMap;
    }
}
