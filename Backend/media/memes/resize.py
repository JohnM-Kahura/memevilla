from PIL import Image
from os import listdir
def resize(name):
    image=Image.open(name)
    image=image.resize((400,400))
    image.save(name)
image_urls=listdir()
for x in image_urls:
    if x !='resize.py':
        resize(x)
       
