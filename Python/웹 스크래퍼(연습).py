score_list = [90, 45, 70, 60, 55]
number = 1
for score in score_list:
    if score >= 60:
        result = "합격"
        print("{}번, {}입니다.".format(number, result))
    else:
        result = "불합격"
        print("{}번, {}입니다.".format(number, result))
    number += 1