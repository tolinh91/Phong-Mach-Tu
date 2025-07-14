from django.shortcuts import render, redirect
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import AuthenticationForm
from .forms import RegisterForm
from .forms import EditAccountForm
from .forms import MedicalSupplyForm
from .models import MedicalSupply

def register_view(request):
    if request.method == "POST":
        form = RegisterForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.set_password(form.cleaned_data['password'])
            user.save()
            return redirect('login')
    else:
        form = RegisterForm()
    return render(request, 'accounts/register.html', {'form': form})

def login_view(request):
    if request.method == "POST":
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect('home')  # thay bằng trang chính
    else:
        form = AuthenticationForm()
    return render(request, 'accounts/login.html', {'form': form})

def logout_view(request):
    logout(request)
    return render(request, 'accounts/logout.html') 

@login_required
def delete_account(request):
    if request.method == 'POST':
        user = request.user
        user.delete()
        messages.success(request, 'Tài khoản đã được xóa thành công.')
        return redirect('login')  # hoặc trang chủ
    return redirect('home')  # không cho truy cập GET
@login_required
def edit_account(request):
    if request.method == 'POST':
        form = EditAccountForm(request.POST, instance=request.user)
        if form.is_valid():
            form.save()
            return redirect('profile')  # Hoặc bất kỳ URL nào sau khi cập nhật
    else:
        form = EditAccountForm(instance=request.user)

    return render(request, 'accounts/edit_account.html', {'form': form})
@login_required # Dẫn vào profile
def profile(request):
    return render(request, 'accounts/profile.html')

@login_required
def add_medical_supply(request): #Thêm vật tư y tế
    if request.method == 'POST':
        form = MedicalSupplyForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('medical_supply_list')  
    else:
        form = MedicalSupplyForm()
    return render(request, 'supplies/add_supply.html', {'form': form})
@login_required
def medical_supply_list(request): #Hiển thị danh sách vật tư y tế
    supplies = MedicalSupply.objects.all()
    return render(request, 'supplies/supply_list.html', {'supplies': supplies})
@login_required
def edit_medical_supply(request, supply_id): #Sữa vật tư.
    supply = get_object_or_404(MedicalSupply, id=supply_id)
    if request.method == 'POST':
        form = MedicalSupplyForm(request.POST, instance=supply)
        if form.is_valid():
            form.save()
            return redirect('medical_supply_list')  # quay lại danh sách
    else:
        form = MedicalSupplyForm(instance=supply)

    return render(request, 'supplies/edit_supply.html', {'form': form, 'supply': supply})
@login_required
def delete_medical_supply(request, supply_id):
    supply = get_object_or_404(MedicalSupply, id=supply_id)
    if request.method == 'POST':
        supply.delete()
        return redirect('medical_supply_list')  # Trang danh sách sau khi xóa
    return render(request, 'supplies/confirm_delete.html', {'supply': supply})