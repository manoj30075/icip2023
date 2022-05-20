import React from "react";
import "./reviewers.css";

const Reviewers = ({ reviewers }) => {
  return (
    <div className="reviewers">
      <h3>Reviewers</h3>
      <h4>Review Guidelines</h4>
      <p>
        Thank you for volunteering your time to review for IV 2023! Reviewers
        time and expertise are a key factor in order to assure a high-quality
        technical program. This web page has been created in order to detail and
        clarify what is expected of all members of the Reviewing Committee.
      </p>
      <h4>Reviewer Duties</h4>
      <p>
        Once you get the reviewing assignment, please go through papers assigned
        and check if there is no conflict of interest and if the paper falls
        within your field of expertise. If either of these issues arise, please
        contact the Program Chairs as soon as possible to solve them.
      </p>
      &nbsp;
      <p>
        Any accepted contribution must be technically solid and make a
        contribution to the field of intelligent vehicles. A contribution to the
        field includes the novelty of an approach or breakthrough concept and
        convincing experimental results. However, a new vision or approach may
        constitute a contribution even if it does not exceed the state of the
        art (SOTA), and performance below SOTA should not be the sole reason for
        rejection. Similarly, slight errors that can be easily corrected are not
        grounds for rejection of an article.
      </p>
      &nbsp;
      <p>
        Please familiarize yourself with the various plagiarism and submission
        guidelines, and if you find that the work does not meet these
        guidelines, contact the Program Chair and ask him to resolve the issue.
        In the meantime, go ahead and review the paper as if there is no
        violation. The Program Chairs will follow up, but it may take a bit of
        time.
      </p>
      <h4>Review Report</h4>
      <p>
        The reviewer must elaborate on the most important aspects of the article
        in a specific and detailed manner, identifying the strengths and
        weaknesses of the manuscript. Although bullet points may be used, they
        must be adequately explained and help the reviewer make a final decision
        about the article. Remember that the assigned reviewer will make his or
        her decision based primarily on your comments, not on the assigned
        grade, so the decision must be well-reasoned. In addition, the review
        should provide sufficient feedback to the authors so that they may
        revise the paper for any future submissions.
      </p>
      &nbsp;
      <p>
        With respect to the overview of the state of the art, specific
        publications should be given rather than vague references such as “this
        is known” or “this has been used before”.
      </p>
      <h4>Ethical Considerations</h4>
      <p>
        It is the responsibility of IV reviewers to respect and protect the
        confidentiality of assigned papers. Papers submitted to IV are not
        published and are the property of the authors. Since it is possible that
        the paper will not be accepted, it may be further edited or submitted to
        another conference or journal. Also, it may still be considered
        confidential/proprietary in some organizations and companies.
        Accordingly, the following guidelines apply:
      </p>
      <ul>
        <li>
          You are not allowed to show the article (including the results,
          videos, images, codes, or any other supplementary materials) to anyone
          unless they have been included in the review process (Associate Editor
          (AE) or reviewer).
        </li>
        <li>
          You should not use the ideas or code from the articles for your own
          benefit (articles, suggestions or code) before they are published.
        </li>
        <li>
          After completion of the review, all copies and materials relating to
          the article must be deleted, including all additional materials.
        </li>
      </ul>
      <h5>Confidentiality</h5>
      <p>
        It is the responsibility of IV reviewers to respect and protect the
        confidentiality of assigned papers. Papers submitted to IV are not
        published and are the property of the authors. Since it is possible that
        the paper will not be accepted, it may be further edited or submitted to
        another conference or journal. Also, it may still be considered
        confidential/proprietary in some organizations and companies.
        Accordingly, the following guidelines apply:
      </p>
      <ul>
        <li>
          You are not allowed to show the article (including the results,
          videos, images, codes, or any other supplementary materials) to anyone
          unless they have been included in the review process (AE or reviewer).
        </li>
        <li>
          You should not use the ideas or code from the articles for your own
          benefit (articles, suggestions or code) before they are published.
        </li>
        <li>
          After completion of the review, all copies and materials relating to
          the article must be deleted, including all additional materials.
        </li>
      </ul>
      <h5>Conflict of Interest</h5>
      <p>
        It is vital for the conference that conflicts of interest are avoided,
        so it is important that there is no doubt about the impartiality of the
        reviewers. Although the organizers make an effort to avoid these cases,
        sometimes they can occur. If you have been assigned a paper with a
        potential conflict of interest, you should contact the assigning
        Associate Editor or Program Chair as soon as possible to resolve the
        issue. Conflicts of interest include (but are not limited to):
      </p>
      <ul>
        <li>You work at the same institution as one of the authors.</li>
        <li>
          If you’ve been involved in any way in the work presented, e.g. as
          thesis advisor, member of the committee, as an external advisor.
        </li>
        <li>
          You have collaborated with one of the authors in the recent years (3
          to 5 years). The definition of collaboration is broad; it is left to
          the reviewer’s judgment to determine this degree.
        </li>
        <li>
          If you were thesis advisor or advisee of one of the authors. This type
          of relationship is generally associated with a lifelong conflict of
          interest. Again, it is left to the reviewer’s discretion to identify
          the degree of conflict.
        </li>
        <li>If it may be perceived by others as conflict of interest.</li>
      </ul>
      <h4>Preprint Servers</h4>
      <p>
        Does IEEE consider authors posting their articles on preprint servers or
        on their companies’ web sites to be a form of prior publication, which
        may then disqualify the articles from further editorial consideration?
      </p>
      <p>
        No. IEEE policy allows authors to submit previously posted articles to
        IEEE publications for consideration as long as authors are able to
        transfer copyright to IEEE, i.e., they had not transferred copyright to
        another party prior to submission.
      </p>
      <p>
        Does the policy affect how authors post their articles on preprint
        servers such as TechRxiv or ArXiv?
      </p>
      <p>
        Yes. The IEEE recognizes that many authors share their unpublished
        articles on public sites. Once articles have been accepted for
        publication by IEEE, authors are required to post an IEEE copyright
        notice on their preprints. Upon publication, authors must replace the
        preprints with either 1) the full citation to the IEEE works with
        Digital Object Identifiers (DOI) or 2) the accepted versions only (not
        the IEEE-published versions) with the DOI. IEEE journals will make
        available to each author the accepted version of the article that the
        author can post that includes the DOI, IEEE copyright notice, and a
        notice indicating the article has been accepted for publication by IEEE.
        IEEE conference authors are free to post their own version of their
        articles, as accepted by an IEEE conference.
      </p>
      <a href="https://www.ieee.org/content/dam/ieee-org/ieee/web/org/pubs/author_version_faq.pdf">
        Link
      </a>
      <h4>Your Report</h4>
      <p>
        Disparaging comments are not welcome in peer reviews. It is important
        that comments help in decision making and allow authors to understand
        the shortcomings of their work in order to improve it in the future. A
        good reviewer should write gentle, concise, and helpful comments that
        allow the reviewer to immediately see the merits (pros and cons) of an
        article, rather than relying solely on the overall grade assigned.
        Remember that reviews are read by colleagues (other reviewers and AEs),
        so being a helpful reviewer will be an advantage in the research
        community.
      </p>
      <h5>Some helpful tips:</h5>
      <ul>
        <li>
          A good report should not be written in a hurry. It is recommended to
          take several days between reading the article and completing the
          report.
        </li>
        <li>
          Short reviews are of no benefit to either the authors or the AE,
          because accepting a review of an article requires taking the trouble
          to write a substantive review.
        </li>
        <li>
          If you point out that certain parts of an article need revision or are
          not clear enough, notes and suggestions for clarification should be
          provided.
        </li>
        <li>
          It is recommended not to include references to your identity and to
          indicate that articles of your own authorship should be cited.
        </li>
        <li>
          When referring to the novelty of an article, claims such as “this has
          been done before” or “this is known” should be accompanied by
          references that justify the statement. Positive claims must also be
          accompanied by details.
        </li>
        <li>
          Articles should not be rejected for the simple reason that they do not
          contain citations or comparisons to non-reviewed published articles,
          such as those on arXiv.
        </li>
        <li>
          If you feel that the topic has nothing to do with the congress, please
          explain this briefly in the review and suggest alternative conferences
          or journals. Anyway, keeping an open mind in this regard is advisable,
          as articles that expand the scope of the congress are welcome.
        </li>
        <li>
          Always be constructive in your reviews and use confident and
          respectful language. Your colleagues will value it and take criticism
          more positively.
        </li>
      </ul>
      <h4>Papercept Instructions</h4>
      <ol>
        <li>Download your papers.</li>
        <li>Check for possible conflict or submission rule violations.</li>
        <li>Review papers and assign rating.</li>
      </ol>
      <ol>
        <li>
          To download individual papers, you can click the links Download for
          the corresponding paper in the Reviewer’s Workspace. It will give you
          access to the download menu, where you can select to download the
          paper (“First submission”) or any other supplementary file to the
          paper that will be available in this menu.
        </li>
        <li>
          Contact the program chairs immediately if you believe you have a
          conflict with the paper or if the paper violates the submission rules.
          In the meantime, go ahead and review the paper as if there is no
          violation. The Program Chairs will follow up, but it may take a bit of
          time.
        </li>
        <li>
          Click “Review” in the Reviewers Workspace to get to the review form.
          Proceed with the review and save it to continue in the future, or
          click submit once the form is ready.
        </li>
      </ol>
      <h4>About arXiv</h4>
      <p>
        Authors should cite all the sources that have inspired their work,
        although it is not reasonable to ask for a review, inclusion or
        comparison of the work presented with an article published in preprint
        format, that has not been subjected to peer review (such as arXiv) or
        that one that has only recently appeared/published before the submission
        deadline. Similarly, it is not advisable to discourage ideas that have
        been developed in parallel and independently to these publications.
        Reviewers are therefore recommended to follow the following guidelines.
      </p>
      <ul>
        <li>
          The reviewer should not require a paper to be compared to, or discuss
          another paper recently published in ArXiv or similar. However, it is
          acceptable to indicate to the author the existence of something
          published in these repositories, either because of its similar or for
          its interest in the subject.
        </li>
        <li>
          Authors should cite the work they have been inspired by, even if it
          appears in an arXiv-style repository.
        </li>
        <li>
          Not citing an article in arXiv or similar IS NOT a reason for
          rejection. Please indicate the reference to the authors.
        </li>
        <li>
          It is not a reason for rejection that there is an article with similar
          ideas in an arXiv-style repository. If there are doubts about
          plagiarism, the reviewer should contact the Program Chair to resolve
          this issue.
        </li>
      </ul>
      <h4>Associate Editors</h4>
      <p>
        We want to thank you for accepting being part of the International
        Committee (named Associate Editor in the online Platform-Papercept) for
        The Intelligent Vehicles Symposium, sponsored by The IEEE Intelligent
        Transportation Systems Society (ITSS). As Associate Editor you are asked
        to manage the review of 3-5 papers, and to collect at least 3
        independent reviews for each paper.
      </p>
      <p>
        In order to ensure a fair review process in accordance with IEEE-ITSS
        standards, Associate Editors must verify that the following premises are
        met:
      </p>
      <ol>
        <li>
          Acting as an Associate Editor (AE) is a very important role for the
          IEEE-ITSS congresses, the scientific quality of congress depends on
          their engaged performance. That is why it is expected that they will
          be dedicated and professional in the performance of their duties.
        </li>
        <li>
          The reviews received must be properly documented and justified (with
          special relevance to those that are negative). If a review is received
          and is not properly justified, it is the task of the associated editor
          to ask the reviewer for clarification or to seek a new review.
        </li>
        <li>
          AEs should be familiar with the paper, and should not make a final
          decision without a documented judgment of the paper.
        </li>
        <li>
          AEs should remember the IEEE’s policy with respect to no unilateral
          decisions. This means that decisions made must be supported by at
          least two reviewers, including the AE.
        </li>
      </ol>
    </div>
  );
};

export default Reviewers;
