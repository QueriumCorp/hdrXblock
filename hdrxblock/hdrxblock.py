"""TO-DO: Write a description of what this XBlock is."""

import pkg_resources
from xblock.core import XBlock
from xblock.fields import Integer, String, Scope
from xblock.fragment import Fragment


class RoverHeaderXBlock(XBlock):
    """
    TO-DO: document what your XBlock does.
    """

    # Fields are defined on the class.  You can access them in your code as
    # self.<fieldname>.

    hdr_title = String(help="Section header title", default="Section Title", scope=Scope.content)
    hdr_text = String(help="Section header text", default="Section Text", scope=Scope.content)
    hdr_book_link = String(help="Section textbook link URL", default="https://cnx.org/contents/9b08c294-057f-4201-9f48-5d6ad992740d", scope=Scope.content)
    hdr_book_icon = String(help="Section textbook icon URL", default="https://png.icons8.com/color/1600/literature.png", scope=Scope.content)
    hdr_book_help = String(help="Section textbook help text", default="Takes you to the corresponding section of the textbook", scope=Scope.content)
    hdr_playground_link = String(help="Section playground link URL", default="https://www.openstax.org", scope=Scope.content)
    hdr_playground_icon = String(help="Section playground icon URL", default="https://png.icons8.com/color/1600/playground.png", scope=Scope.content)
    hdr_playground_help = String(help="Section playground help text", default="This playground will help you learn.", scope=Scope.content)

    count = Integer(
        default=0, scope=Scope.user_state,
        help="A simple counter, to show something happening",
    )

    def resource_string(self, path):
        """Handy helper for getting resources from our kit."""
        data = pkg_resources.resource_string(__name__, path)
        return data.decode("utf8")

    # TO-DO: change this view to display your data your own way.
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

    # TO-DO: change this handler to perform your own actions.  You may need more
    # than one handler, or you may not need any handlers at all.
    @XBlock.json_handler
    def increment_count(self, data, suffix=''):
        """
        An example handler, which increments the data.
        """
        # Just to show data coming in...
        assert data['hello'] == 'world'

        self.count += 1
        return {"count": self.count}

    # TO-DO: change this to create the scenarios you'd like to see in the
    # workbench while developing your XBlock.
    @staticmethod
    def workbench_scenarios():
        """A canned scenario for display in the workbench."""
        return [
            ("RoverHeaderXBlock",
             """<hdrxblock/>
             """),
            ("Multiple RoverHeaderXBlock",
             """<vertical_demo>
                <hdrxblock/>
                <hdrxblock/>
                <hdrxblock/>
                </vertical_demo>
             """),
        ]
