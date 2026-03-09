"""
content_prompts.py
Generates executable, tool-specific AI prompts for the Digital Marketing Strategist framework.
"""

def generate_jasper_prompt(product_name, audience, key_benefit):
    """Generates a high-conversion ad copy prompt for Jasper or Copy.ai."""
    return f"""
Act as a direct response copywriter. Write 5 Facebook ad headlines and 3 primary text options for {product_name}.
Target Audience: {audience}
Core Benefit: {key_benefit}
Constraint: Use the PAS (Problem-Agitation-Solution) framework. 
Tone: Professional but urgent.
"""

def generate_descript_repurpose_prompt(video_topic):
    """Generates a prompt to repurpose video transcripts using Descript's AI features."""
    return f"""
Analyze the following transcript regarding '{video_topic}'. 
1. Identify the 3 most provocative 'Value Hooks' for a LinkedIn post.
2. Draft a 500-word SEO-optimized blog summary based on the speaker's key arguments.
3. Highlight segments that should be exported as 'Social Clips' (Under 60 seconds).
"""

def generate_frase_brief_prompt(target_keyword, competitor_urls):
    """Generates a content brief prompt for Frase or MarketMuse."""
    return f"""
Create a comprehensive content brief for the keyword: "{target_keyword}".
Reference Competitors: {competitor_urls}
Tasks:
1. List the top 10 'People Also Ask' questions related to this keyword.
2. Outline a H2/H3 header structure that covers the 'Search Intent' gaps found in the competitor URLs.
3. Recommend a target word count and 'Must-Have' semantic keywords for SEO.
"""

def get_all_prompts(context):
    """Aggregates all prompts based on user context."""
    return {
        "Production_Jasper": generate_jasper_prompt(
            context.get('product'), context.get('audience'), context.get('benefit')
        ),
        "Production_Descript": generate_descript_repurpose_prompt(
            context.get('topic')
        ),
        "Production_Frase": generate_frase_brief_prompt(
            context.get('keyword'), context.get('competitors')
        )
    }

# Example Usage:
# context = {'product': 'SaaS CRM', 'audience': 'Small business owners', 'benefit': 'Save 10 hours a week', 'topic': 'AI in Sales', 'keyword': 'best CRM for AI', 'competitors': 'hubspot.com, salesforce.com'}
# print(get_all_prompts(context))
