from django import forms
from django.contrib.auth.models import User
import re

class RegisterForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput, min_length=8)
    confirm_password = forms.CharField(widget=forms.PasswordInput)

    class Meta:
        model = User
        fields = ['username', 'email', 'password']

    def clean_username(self):
        username = self.cleaned_data['username']
        if User.objects.filter(username=username).exists():
            raise forms.ValidationError("Tên người dùng đã tồn tại.")
        return username

    def clean_email(self):
        email = self.cleaned_data['email']
        if User.objects.filter(email=email).exists():
            raise forms.ValidationError("Email đã được sử dụng.")
        return email

    def clean_password(self):
        password = self.cleaned_data['password']
        if not re.search(r'[A-Z]', password) or not re.search(r'\d', password):
            raise forms.ValidationError("Mật khẩu phải có ít nhất 1 chữ hoa và 1 số.")
        return password

    def clean(self):
        cleaned_data = super().clean()
        if cleaned_data.get("Mật khẩu") != cleaned_data.get("Xác nhận mật khẩu"):
            raise forms.ValidationError("Mật khẩu xác nhận không khớp.")
        return cleaned_data
