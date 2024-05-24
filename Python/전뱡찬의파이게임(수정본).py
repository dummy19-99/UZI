import pygame as p, sys as s, random as r

p.init()
win = p.display.set_mode((480,480))
clock = p.time.Clock()
XMAX, YMAX = 16, 16

class Snake:
    def __init__(self,pos):
        self.body = [pos]

    def move(self, key):
        global gameOver
        xpos, ypos = self.body[0]
        if key == p.K_LEFT:
            xpos -= 1
        elif key == p.K_RIGHT:
            xpos += 1
        elif key == p.K_UP:
            ypos -= 1
        elif key == p.K_DOWN:
            ypos += 1

        head = (xpos, ypos)

        if head in self.body or head[0] < 0 or head[0] >= XMAX or head[1] < 0 or head[1] >= YMAX:
            gameOver = True

        self.body.insert(0, head)
        if head == food:
            makeFood(self)
        else:
            self.body.pop()

    def draw(self):
        for body in self.body:
            p.draw.rect(win, (255,100,100), (body[0]*30, body[1]*30, 30, 30))
        body = self.body[0]
        p.draw.rect(win, (255,0,0), (body[0]*30, body[1]*30, 30, 30))
        
def makeFood(snake):
    global food
    while True:
        pos = (r.randrange(0, XMAX), r.randrange(0, YMAX))
        if pos != food and pos not in snake.body:
            food = pos
            break
        
def drawObject():
    win.fill((128,128,128))
    for idx in range(17):
        p.draw.line(win, (64,64,64), (idx*30, 0), (idx*30, 480))
        p.draw.line(win, (64,64,64), (0, idx*30), (480, idx*30))

    snake.draw()
    p.draw.ellipse(win, (0,255,0), (food[0]*30+1, food[1]*30+1, 28, 28))
    
def gameOverMessage():
    message = myfont.render("Game Over!", True, (255,255,0))
    x = (win.get_width() - message.get_width())/2
    y = (win.get_height() - message.get_height())/2
    win.fill((50,50,50))
    win.blit(message, (x,y))

myfont = p.font.SysFont(None, 80)
key = p.K_DOWN
message = None
gameOver = False
snake = Snake((XMAX//2, YMAX//2))
food =(0,0)
makeFood(snake)

while True:
    for event in p.event.get():
        if event.type == p.QUIT:
            p.quit()
            s.exit()
        elif event.type == p.KEYDOWN:
            key = event.key
            
    if not gameOver:
        snake.move(key)
        drawObject()
    else:
        gameOverMessage()
        
    p.display.update()
    clock.tick(5)
