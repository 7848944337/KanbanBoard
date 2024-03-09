# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Employee(models.Model):
    emp_id = models.CharField(db_column='Emp_id', primary_key=True, max_length=5)  # Field name made lowercase.
    emp_name = models.CharField(db_column='Emp_name', max_length=45)  # Field name made lowercase.
    password = models.CharField(max_length=45)
    highest = models.CharField(db_column='Highest', max_length=15, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'employee'


class Proirity(models.Model):
    proirity_id = models.CharField(db_column='Proirity_id', primary_key=True, max_length=8)  # Field name made lowercase.
    proirity_name = models.CharField(db_column='Proirity_name', max_length=20, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'proirity'


class Project(models.Model):
    proj_id = models.CharField(db_column='Proj_id', primary_key=True, max_length=5)  # Field name made lowercase.
    proj_name = models.CharField(max_length=30, blank=True, null=True)
    emp = models.ForeignKey(Employee, models.DO_NOTHING, db_column='Emp_id', blank=True, null=True)  # Field name made lowercase.
    proirity = models.ForeignKey(Proirity, models.DO_NOTHING, db_column='Proirity_id', blank=True, null=True)  # Field name made lowercase.
    status = models.ForeignKey('Status', models.DO_NOTHING, db_column='Status_id', blank=True, null=True)  # Field name made lowercase.
    descript = models.CharField(db_column='Descript', max_length=300, blank=True, null=True)  # Field name made lowercase.
    start_date = models.CharField(db_column='Start_date', max_length=10, blank=True, null=True)  # Field name made lowercase.
    end_date = models.CharField(db_column='End_date', max_length=10, blank=True, null=True)  # Field name made lowercase.
    mang_id = models.CharField(db_column='Mang_id', max_length=5, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'project'


class Status(models.Model):
    status_id = models.CharField(db_column='Status_id', primary_key=True, max_length=15)  # Field name made lowercase.
    status_name = models.CharField(db_column='Status_name', max_length=20, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'status'
