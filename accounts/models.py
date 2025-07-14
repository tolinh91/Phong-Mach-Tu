from django.db import models

class MedicalSupply(models.Model):
    name = models.CharField(max_length=100)
    quantity = models.PositiveIntegerField()
    unit = models.CharField(max_length=20)
    expiration_date = models.DateField()
    description = models.TextField(blank=True)
    def __str__(self):
        return f"{self.name} ({self.quantity} {self.unit})"