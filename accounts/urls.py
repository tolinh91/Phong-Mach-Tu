from django.urls import path
from . import views
from django.contrib import admin
from django.urls import path, include 
urlpatterns = [
    path('register/', views.register_view, name='register'),
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('delete/', views.delete_account, name='delete_account'),
    path('edit/', views.edit_account, name='edit_account'),
    path('profile/', views.profile, name='profile'),
    path('supplies/add/', views.add_medical_supply, name='add_medical_supply'),
    path('supplies_list/', views.medical_supply_list, name='medical_supply_list'),
    path('supplies/edit/<int:supply_id>/', views.edit_medical_supply, name='edit_medical_supply'),
    path('supplies/delete/<int:supply_id>/', views.delete_medical_supply, name='delete_medical_supply'),
]