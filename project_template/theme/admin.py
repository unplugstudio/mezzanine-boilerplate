from __future__ import unicode_literals
from copy import deepcopy

from django.contrib import admin

from mezzanine.core.admin import (StackedDynamicInlineAdmin, SingletonAdmin,
                                  TabularDynamicInlineAdmin)
from mezzanine.pages.admin import PageAdmin
from mezzanine.pages.models import RichTextPage

from .models import SiteConfiguration

# Page (extra model fields)
# page_fieldsets = deepcopy(PageAdmin.fieldsets)
# page_fieldsets[0][1]["fields"].insert(1, "field1")
# PageAdmin.fieldsets = page_fieldsets

# admin.site.unregister(RichTextPage)
# admin.site.register(RichTextPage, PageAdmin)


# Site Configuration
class SiteConfigurationAdmin(SingletonAdmin):
    pass

admin.site.register(SiteConfiguration, SiteConfigurationAdmin)
