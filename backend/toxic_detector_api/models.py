from django.db import models

class ToxicDetector(models.Model):
    text = models.TextField()
    lang = models.CharField("Language", max_length=3)
    date = models.DateField("Date", auto_now_add=True)

    def __str__(self):
        return self.name