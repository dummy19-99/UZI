"""
pikachu = 154
thunder = 71

ganger = 202
shadow_ball = 65

while pikachu > 0:
    pikachu = pikachu - shadow_ball
    print("피카츄가 %d의 데미지를 받았다!" % shadow_ball)
    if pikachu < 0:
        print("피카츄는 쓰러졌다!")
"""
import random

Player = ["가위", "바위", "보"]
NPC = ["가위", "바위", "보"]

가위 = 1
바위 = 2
보 = 3