"""
URL configuration for pixy project.
"""
from django.contrib import admin
from django.urls import path, include
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions
from rest_framework_simplejwt.views import TokenRefreshView, TokenObtainPairView

SchemaView = get_schema_view(
    openapi.Info(
        title="Pixy API",
        default_version="v1",
        description="Restful API for Pixy app.",
        terms_of_service="google.com",
        contact=openapi.Contact(
            name="Novo Código",
            email="novocodigo@proton.me",
        ),
        license=openapi.License(
            name="PolyForm Shield License",
            url="https://polyformproject.org/licenses/shield/1.0.0"
        )
    ),
    public=False,
    permission_classes=(permissions.IsAuthenticatedOrReadOnly)
)

urlpatterns = [
    path('panel/', admin.site.urls),
    path('swagger/', SchemaView.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path("redoc/", SchemaView.with_ui('redoc', cache_timeout=0), name="schema-redoc"),
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('users/', include("user.urls")),
]
