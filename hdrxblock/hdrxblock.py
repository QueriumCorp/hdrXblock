"""TO-DO: Write a description of what this XBlock is."""

import pkg_resources
from xblock.core import XBlock
from xblock.fields import Integer, String, Scope
from xblock.fragment import Fragment


class RoverHeaderXBlock(XBlock):

    # has_author_view = True # tells the xblock to use the AuthorView

    # Fields are defined on the class.  You can access them in your code as
    # self.<fieldname>.
    display_name = String(display_name="Display name", default='Section Header', scope=Scope.settings)

    hdr_title = String(help="Section header title", default="<h3>Foobar</h3><p>Mine is the last voice you will ever hear.</p>", scope=Scope.content)
    hdr_text = String(help="Section header text", default="Section Text", scope=Scope.content)
    hdr_html = String(help="Section header html", default="<h2>Section Header</h2><p>Instructions and learning resources for the next set of questions.</p>", scope=Scope.content)
    hdr_book_link = String(help="Section textbook link URL", default="https://cnx.org/contents/9b08c294-057f-4201-9f48-5d6ad992740d", scope=Scope.content)
    hdr_book_icon = String(help="Section textbook icon URL", default="https://png.icons8.com/color/1600/literature.png", scope=Scope.content)
    hdr_book_help = String(help="Section textbook help text", default="Takes you to the corresponding section of the textbook", scope=Scope.content)
    hdr_playground_link = String(help="Section playground link URL", default="https://www.openstax.org", scope=Scope.content)
    hdr_playground_icon = String(help="Section playground icon URL", default="https://png.icons8.com/color/1600/playground.png", scope=Scope.content)
    hdr_playground_help = String(help="Section playground help text", default="This playground will help you learn.", scope=Scope.content)
    hdr_video_link = String(help="Section video link URL", default="https://www.openstax.org", scope=Scope.content)
    hdr_video_icon = String(help="Section video icon URL", default="", scope=Scope.content)
    hdr_video_help = String(help="Section video help text", default="This video will help you learn.", scope=Scope.content)

    def resource_string(self, path):
        """Handy helper for getting resources from our kit."""
        data = pkg_resources.resource_string(__name__, path)
        return data.decode("utf8")

    # STUDENT VIEW
    def student_view(self, context=None):
        """
        The primary view of the RoverHeaderXBlock, shown to students
        when viewing courses.
        """
        html = self.resource_string("static/html/hdrstudent.html")
        frag = Fragment(html.format(self=self))
        frag.add_css(self.resource_string("static/css/hdrstudent.css"))
        frag.add_javascript(self.resource_string("static/js/src/hdrstudent.js"))
        frag.initialize_js('RoverHeaderXBlock')
        return frag

    # AUTHOR VIEW
    def studio_view(self, context=None):
        """
        The primary view of the RoverHeaderXBlock, shown to instructors
        when viewing assignments.
        """
        html = self.resource_string("static/html/hdrauthor.html")
        frag = Fragment(html.format(self=self))
        frag.add_css(self.resource_string("static/css/hdrauthor.css"))
        frag.add_javascript(self.resource_string("static/js/src/hdrauthor.js"))
        frag.initialize_js('RoverHeaderXBlock')
        return frag

    # SAVE SECTION HEADER
    @XBlock.json_handler
    def save_header(self, data, suffix=''):
        self.hdr_html = data['hdr_html']

        self.hdr_book_link = data['hdr_book_link']
        self.hdr_book_icon = data['hdr_book_icon']
        self.hdr_book_help = data['hdr_book_help']

        self.hdr_playground_link = data['hdr_playground_link']
        self.hdr_playground_icon = data['hdr_playground_icon']
        self.hdr_playground_help = data['hdr_playground_help']

        self.hdr_video_link = data['hdr_video_link']
        self.hdr_video_icon = data['hdr_video_icon']
        self.hdr_video_help = data['hdr_video_help']

        return {'result': 'success'}

    # TO-DO: change this to create the scenarios you'd like to see in the
    # workbench while developing your XBlock.
    @staticmethod
    def workbench_scenarios():
        """A canned scenario for display in the workbench."""
        return [
            ("RoverHeaderXBlock",
             """<hdrxblock/>
             """)
        ]
