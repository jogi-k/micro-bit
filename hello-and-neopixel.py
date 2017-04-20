from microbit import *
import neopixel
from random import randint


display.clear()
r = 255
g = r-40
b = 40
np = neopixel.NeoPixel(pin0, 32)
np.clear()    

while True:
    if button_a.is_pressed():
        display.scroll('Hello, World!')
        display.show(Image.HEART)
        sleep(2000)
        display.clear()
        
    if button_b.is_pressed():
        for i in range(1,10):
            for pixel in range(0,32):
                flicker = randint(0,200)
                r1 = r - flicker
                g1 = g - flicker
                b1 = b - flicker
                if g1 < 0:
                    g1 = 0
                if r1 < 0 :
                    r1 = 0
                if b1 < 0 :
                    b1 = 0
                np[pixel] = (r1 ,g1 ,b1)
                np.show()
                sleep(randint(0,150))
        np.clear()    
