# Generated by Django 3.2.3 on 2021-05-15 09:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('manager', '0013_customs_invoice_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='tracking',
            name='shipment',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='tracker', to='manager.shipment'),
        ),
        migrations.AlterField(
            model_name='tracking',
            name='delivered',
            field=models.BooleanField(blank=True, default=False, null=True),
        ),
    ]