from django.contrib import admin
from .models import Tag, Project, ProjectImage, Resume


class ProjectImageInline(admin.TabularInline):
    model = ProjectImage
    extra = 1

class ProjectAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "link"
    )
    inlines = [ProjectImageInline]
    search_fields = ("title", "description")
    list_filter = ("tags", )

class TagAdmin(admin.ModelAdmin):
    list_display = ("name",)
    search_fields = ("name",)

class ResumeAdmin(admin.ModelAdmin):
    list_display = ("name",)

# Register your models here.
admin.site.register(Tag, TagAdmin)
admin.site.register(Project, ProjectAdmin)
admin.site.register(ProjectImage)
admin.site.register(Resume, ResumeAdmin)