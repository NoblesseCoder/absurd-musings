---
layout: "index"
title: "Musings"
pageTitle: "Musings List"
currentYear: "2021"
---

<div class="scrollable">

<a href = "https://towardsdatascience.com/solving-multi-armed-bandits-mab-problem-via-%CE%B5-greedy-agents-298de2e69971" class="tlink"> Solving Multi-Armed Bandits (MAB) problem via ε-greedy agents </a>

<a href = "https://medium.com/@Lightokun/an-anime-inspired-acl-injury-393083989ade" class="tlink"> An Anime inspired ACL injury 
</a>

<a href = "https://towardsdatascience.com/defence-against-the-data-arts-python-v-s-r-5f4529c1d90f" class="tlink"> Defence Against the Data Arts : Python v/s R </a>

<ul class="list-unstyled"> 
	{%- for musing in collections.musings -%}
	<li class="list">
		<h5><a class= "tlink" href="{{musing.url}}">{{musing.data.pageTitle}}</a> </h5>
	</li> 
	{%- endfor -%} 
</ul>

</div>