(function() {var type_impls = {
"hir_ty":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ProgramClauseData%3CI%3E\" class=\"impl\"><a href=\"#impl-ProgramClauseData%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; ProgramClauseData&lt;I&gt;<div class=\"where\">where\n    I: Interner,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_from_env_clause\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">into_from_env_clause</a>(self, interner: I) -&gt; ProgramClauseData&lt;I&gt;</h4></section></summary><div class=\"docblock\"><p>Change the program clause data into a <code>FromEnv</code> program clause.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.intern\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">intern</a>(self, interner: I) -&gt; ProgramClause&lt;I&gt;</h4></section></summary><div class=\"docblock\"><p>Intern the program clause data.</p>\n</div></details></div></details>",0,"hir_ty::ProgramClauseData"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TypeSuperFoldable%3CI%3E-for-ProgramClauseData%3CI%3E\" class=\"impl\"><a href=\"#impl-TypeSuperFoldable%3CI%3E-for-ProgramClauseData%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; TypeSuperFoldable&lt;I&gt; for ProgramClauseData&lt;I&gt;<div class=\"where\">where\n    I: Interner,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_super_fold_with\" class=\"method trait-impl\"><a href=\"#method.try_super_fold_with\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">try_super_fold_with</a>&lt;E&gt;(\n    self,\n    folder: &amp;mut dyn FallibleTypeFolder&lt;I, Error = E&gt;,\n    outer_binder: <a class=\"struct\" href=\"hir_ty/struct.DebruijnIndex.html\" title=\"struct hir_ty::DebruijnIndex\">DebruijnIndex</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;ProgramClauseData&lt;I&gt;, E&gt;</h4></section></summary><div class='docblock'>Recursively folds the value.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.super_fold_with\" class=\"method trait-impl\"><a href=\"#method.super_fold_with\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">super_fold_with</a>(\n    self,\n    folder: &amp;mut dyn TypeFolder&lt;I, Error = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/convert/enum.Infallible.html\" title=\"enum core::convert::Infallible\">Infallible</a>&gt;,\n    outer_binder: <a class=\"struct\" href=\"hir_ty/struct.DebruijnIndex.html\" title=\"struct hir_ty::DebruijnIndex\">DebruijnIndex</a>\n) -&gt; Self</h4></section></summary><div class='docblock'>A convenient alternative to <code>try_super_fold_with</code> for use with\ninfallible folders. Do not override this method, to ensure coherence\nwith <code>try_super_fold_with</code>.</div></details></div></details>","TypeSuperFoldable<I>","hir_ty::ProgramClauseData"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-ProgramClauseData%3CI%3E\" class=\"impl\"><a href=\"#impl-Debug-for-ProgramClauseData%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for ProgramClauseData&lt;I&gt;<div class=\"where\">where\n    I: Interner,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, fmt: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.76.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","hir_ty::ProgramClauseData"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-HasInterner-for-ProgramClauseData%3CI%3E\" class=\"impl\"><a href=\"#impl-HasInterner-for-ProgramClauseData%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; HasInterner for ProgramClauseData&lt;I&gt;<div class=\"where\">where\n    I: Interner,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Interner\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Interner\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Interner</a> = I</h4></section></summary><div class='docblock'>The interner associated with the type.</div></details></div></details>","HasInterner","hir_ty::ProgramClauseData"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-ProgramClauseData%3CI%3E\" class=\"impl\"><a href=\"#impl-PartialEq-for-ProgramClauseData%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for ProgramClauseData&lt;I&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + Interner,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;ProgramClauseData&lt;I&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.76.0/src/core/cmp.rs.html#242\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","hir_ty::ProgramClauseData"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TypeFoldable%3CI%3E-for-ProgramClauseData%3CI%3E\" class=\"impl\"><a href=\"#impl-TypeFoldable%3CI%3E-for-ProgramClauseData%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; TypeFoldable&lt;I&gt; for ProgramClauseData&lt;I&gt;<div class=\"where\">where\n    I: Interner,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_fold_with\" class=\"method trait-impl\"><a href=\"#method.try_fold_with\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">try_fold_with</a>&lt;E&gt;(\n    self,\n    folder: &amp;mut dyn FallibleTypeFolder&lt;I, Error = E&gt;,\n    outer_binder: <a class=\"struct\" href=\"hir_ty/struct.DebruijnIndex.html\" title=\"struct hir_ty::DebruijnIndex\">DebruijnIndex</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;ProgramClauseData&lt;I&gt;, E&gt;</h4></section></summary><div class='docblock'>Apply the given folder <code>folder</code> to <code>self</code>; <code>binders</code> is the\nnumber of binders that are in scope when beginning the\nfolder. Typically <code>binders</code> starts as 0, but is adjusted when\nwe encounter <code>Binders&lt;T&gt;</code> in the IR or other similar\nconstructs.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.fold_with\" class=\"method trait-impl\"><a href=\"#method.fold_with\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">fold_with</a>(\n    self,\n    folder: &amp;mut dyn TypeFolder&lt;I, Error = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/convert/enum.Infallible.html\" title=\"enum core::convert::Infallible\">Infallible</a>&gt;,\n    outer_binder: <a class=\"struct\" href=\"hir_ty/struct.DebruijnIndex.html\" title=\"struct hir_ty::DebruijnIndex\">DebruijnIndex</a>\n) -&gt; Self</h4></section></summary><div class='docblock'>A convenient alternative to <code>try_fold_with</code> for use with infallible\nfolders. Do not override this method, to ensure coherence with\n<code>try_fold_with</code>.</div></details></div></details>","TypeFoldable<I>","hir_ty::ProgramClauseData"],["<section id=\"impl-Eq-for-ProgramClauseData%3CI%3E\" class=\"impl\"><a href=\"#impl-Eq-for-ProgramClauseData%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for ProgramClauseData&lt;I&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + Interner,</div></h3></section>","Eq","hir_ty::ProgramClauseData"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-ProgramClauseData%3CI%3E\" class=\"impl\"><a href=\"#impl-Clone-for-ProgramClauseData%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for ProgramClauseData&lt;I&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + Interner,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; ProgramClauseData&lt;I&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.76.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.76.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.76.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","hir_ty::ProgramClauseData"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hash-for-ProgramClauseData%3CI%3E\" class=\"impl\"><a href=\"#impl-Hash-for-ProgramClauseData%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for ProgramClauseData&lt;I&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + Interner,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/hash/trait.Hash.html#tymethod.hash\" class=\"fn\">hash</a>&lt;__H&gt;(&amp;self, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.reference.html\">&amp;mut __H</a>)<div class=\"where\">where\n    __H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,</div></h4></section></summary><div class='docblock'>Feeds this value into the given <a href=\"https://doc.rust-lang.org/1.76.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.76.0/core/hash/trait.Hash.html#tymethod.hash\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_slice\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.3.0\">1.3.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.76.0/src/core/hash/mod.rs.html#238-240\">source</a></span><a href=\"#method.hash_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/hash/trait.Hash.html#method.hash_slice\" class=\"fn\">hash_slice</a>&lt;H&gt;(data: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.slice.html\">[Self]</a>, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.reference.html\">&amp;mut H</a>)<div class=\"where\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Feeds a slice of this type into the given <a href=\"https://doc.rust-lang.org/1.76.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.76.0/core/hash/trait.Hash.html#method.hash_slice\">Read more</a></div></details></div></details>","Hash","hir_ty::ProgramClauseData"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Zip%3CI%3E-for-ProgramClauseData%3CI%3E\" class=\"impl\"><a href=\"#impl-Zip%3CI%3E-for-ProgramClauseData%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; Zip&lt;I&gt; for ProgramClauseData&lt;I&gt;<div class=\"where\">where\n    I: Interner,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.zip_with\" class=\"method trait-impl\"><a href=\"#method.zip_with\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">zip_with</a>&lt;Z&gt;(\n    zipper: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.reference.html\">&amp;mut Z</a>,\n    variance: Variance,\n    a: &amp;ProgramClauseData&lt;I&gt;,\n    b: &amp;ProgramClauseData&lt;I&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.unit.html\">()</a>, NoSolution&gt;<div class=\"where\">where\n    Z: Zipper&lt;I&gt;,</div></h4></section></summary><div class='docblock'>Uses the zipper to walk through two values, ensuring that they match.</div></details></div></details>","Zip<I>","hir_ty::ProgramClauseData"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-CouldMatch%3CDomainGoal%3CI%3E%3E-for-ProgramClauseData%3CI%3E\" class=\"impl\"><a href=\"#impl-CouldMatch%3CDomainGoal%3CI%3E%3E-for-ProgramClauseData%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; CouldMatch&lt;DomainGoal&lt;I&gt;&gt; for ProgramClauseData&lt;I&gt;<div class=\"where\">where\n    I: Interner,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.could_match\" class=\"method trait-impl\"><a href=\"#method.could_match\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">could_match</a>(\n    &amp;self,\n    interner: I,\n    db: &amp;dyn UnificationDatabase&lt;I&gt;,\n    other: &amp;DomainGoal&lt;I&gt;\n) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Checks whether <code>self</code> and <code>other</code> could possibly match.</div></details></div></details>","CouldMatch<DomainGoal<I>>","hir_ty::ProgramClauseData"],["<section id=\"impl-StructuralEq-for-ProgramClauseData%3CI%3E\" class=\"impl\"><a href=\"#impl-StructuralEq-for-ProgramClauseData%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.StructuralEq.html\" title=\"trait core::marker::StructuralEq\">StructuralEq</a> for ProgramClauseData&lt;I&gt;<div class=\"where\">where\n    I: Interner,</div></h3></section>","StructuralEq","hir_ty::ProgramClauseData"],["<section id=\"impl-StructuralPartialEq-for-ProgramClauseData%3CI%3E\" class=\"impl\"><a href=\"#impl-StructuralPartialEq-for-ProgramClauseData%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for ProgramClauseData&lt;I&gt;<div class=\"where\">where\n    I: Interner,</div></h3></section>","StructuralPartialEq","hir_ty::ProgramClauseData"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()