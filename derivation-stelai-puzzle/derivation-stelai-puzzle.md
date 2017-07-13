{
	"date": "2015-09-04",
	"title": "昏き揺らぎの地 石碑パズル解法導出",
	"tags": [],
	"categories": [ "WizardryOnline" ],
	"series": [ "articles" ],
	"math": true,
	"javascript": true,
	"eximg": true,
	"weight": 0
}

<blockquote class="epigraph">
	これからお前たちに奴との出会いについて語るとしよう<br>
	悪魔との出会いを
	<div class="ref">
		<span class="cite">ザックリー</span>
		<span class="origin">クラウドアトラス（映画）</span>
	</div>
</blockquote>

<span class="site">昏き揺らぎの地</span> のリドルである<span class="keyword">叡智の瞳</span>パズルをなんとかうまく解く方法を考えたい。
<!--more-->

<link rel="stylesheet" href="/styles/derivation-stelai-puzzle.css">

### ルールの整理

###### 状態
石碑にはめ込まれた<span class="keyword">叡智の瞳</span>は（赤い）光を宿している状態（<span class="stela on"></span>）と宿していない状態（<span class="stela"></span>）がある。

<table class="tabular">
	<thead>
		<tr>
			<th>光を宿している状態</th>
			<th>光を宿していない状態</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><img class="eximg" src="/images/wizon/stela-on.jpg"  alt="stela-on"  width="150px"></td>
			<td><img class="eximg" src="/images/wizon/stela-off.jpg" alt="stela-off" width="150px"></td>
		</tr>
	</tbody>
</table>

###### 操作
パズルを解くうえで許されている操作は、一度に任意の１カ所の<span class="keyword">叡智の瞳</span>を`操作`するのみである。
`操作`をすると、`操作`を行った<span class="keyword">叡智の瞳</span>と「左上」「右上」「右下」「左下」の石碑の**状態が反転**する。
反転対象の<span class="keyword">叡智の瞳</span>が存在しない場合は操作されない（上下左右がつながっているという事はない）。
ゆえに１度に反転する石碑は最低３か所（角の石碑）、最大５か所（中央の石碑）である。

<table class="tabular">
	<tbody>
		<tr>
			<td><img class="eximg" src="/images/wizon/stela-operate.jpg"  alt="stela-on"  width="150px"></td>
		</tr>
	</tbody>
</table>

<span class="eg">[石碑操作例] **中央**の<span class="keyword">叡智の瞳</span>を`操作`した</span>
<table class="operate-stelai">
	<tbody>
		<tr>
			<td>
				<div class="stelai-puzzle">
					<span class="s0 on"></span>
					<span class="s1 on"></span>
					<span class="s2"></span>
					<span class="s3 on"></span>
					<span class="s4 on target"></span>
					<span class="s5"></span>
					<span class="s6"></span>
					<span class="s7"></span>
					<span class="s8 on"></span>
				</div>
			</td>
			<td>→</td>
			<td>
				<div class="stelai-puzzle">
					<span class="s0 on"></span>
					<span class="s1 effect"></span>
					<span class="s2"></span>
					<span class="s3 effect"></span>
					<span class="s4 effect"></span>
					<span class="s5 on effect"></span>
					<span class="s6"></span>
					<span class="s7 on effect"></span>
					<span class="s8 on"></span>
				</div>
			</td>
		</tr>
	</tbody>
</table>

<span class="eg">[石碑操作例] **４行目右**の<span class="keyword">叡智の瞳</span>を`操作`した</span>
<table class="operate-stelai">
	<tbody>
		<tr>
			<td>
				<div class="stelai-puzzle">
					<span class="s0 on"></span>
					<span class="s1 on"></span>
					<span class="s2"></span>
					<span class="s3 on"></span>
					<span class="s4 on"></span>
					<span class="s5"></span>
					<span class="s6"></span>
					<span class="s7 target"></span>
					<span class="s8 on"></span>
				</div>
			</td>
			<td>→</td>
			<td>
				<div class="stelai-puzzle">
					<span class="s0 on"></span>
					<span class="s1 on"></span>
					<span class="s2"></span>
					<span class="s3 on"></span>
					<span class="s4 effect"></span>
					<span class="s5"></span>
					<span class="s6 on effect"></span>
					<span class="s7 on effect"></span>
					<span class="s8 effect"></span>
				</div>
			</td>
		</tr>
	</tbody>
</table>

###### スタート
ランダムに２つの<span class="keyword">叡智の瞳</span>に光を宿している状態。

<span class="eg">[開始状態]</span>
<div class="stelai-puzzle">
	<span class="s0"></span>
	<span class="s1"></span>
	<span class="s2 on"></span>
	<span class="s3"></span>
	<span class="s4"></span>
	<span class="s5"></span>
	<span class="s6"></span>
	<span class="s7 on"></span>
	<span class="s8"></span>
</div>

ちなみに問題数は ${}_9 C_2 = 36$ 通りとなる。
そのうち回転や反転を行って同じ組み合わせになるものを除くと全８種類となる。

###### 開始状態全パターン
回転・反転で同じ状態になるものを除く。

<table class="operate-stelai">
	<tbody>
		<tr>
			<td>
				<div class="stelai-puzzle">
					<span class="s0 on"></span>
					<span class="s1 on"></span>
					<span class="s2"></span>
					<span class="s3"></span>
					<span class="s4"></span>
					<span class="s5"></span>
					<span class="s6"></span>
					<span class="s7"></span>
					<span class="s8"></span>
				</div>
			</td>
			<td>
				<div class="stelai-puzzle">
					<span class="s0"></span>
					<span class="s1 on"></span>
					<span class="s2"></span>
					<span class="s3 on"></span>
					<span class="s4"></span>
					<span class="s5"></span>
					<span class="s6"></span>
					<span class="s7"></span>
					<span class="s8"></span>
				</div>
			</td>
			<td>
				<div class="stelai-puzzle">
					<span class="s0"></span>
					<span class="s1 on"></span>
					<span class="s2"></span>
					<span class="s3"></span>
					<span class="s4 on"></span>
					<span class="s5"></span>
					<span class="s6"></span>
					<span class="s7"></span>
					<span class="s8"></span>
				</div>
			</td>
			<td>
				<div class="stelai-puzzle">
					<span class="s0 on"></span>
					<span class="s1"></span>
					<span class="s2"></span>
					<span class="s3"></span>
					<span class="s4 on"></span>
					<span class="s5"></span>
					<span class="s6"></span>
					<span class="s7"></span>
					<span class="s8"></span>
				</div>
			</td>
		</tr>
		<tr>
			<td>Pattern.A</td>
			<td>Pattern.B</td>
			<td>Pattern.C</td>
			<td>Pattern.D</td>
		</tr>
		<tr>
			<td>
				<div class="stelai-puzzle">
					<span class="s0 on"></span>
					<span class="s1"></span>
					<span class="s2 on"></span>
					<span class="s3"></span>
					<span class="s4"></span>
					<span class="s5"></span>
					<span class="s6"></span>
					<span class="s7"></span>
					<span class="s8"></span>
				</div>
			</td>
			<td>
				<div class="stelai-puzzle">
					<span class="s0 on"></span>
					<span class="s1"></span>
					<span class="s2"></span>
					<span class="s3"></span>
					<span class="s4"></span>
					<span class="s5 on"></span>
					<span class="s6"></span>
					<span class="s7"></span>
					<span class="s8"></span>
				</div>
			</td>
			<td>
				<div class="stelai-puzzle">
					<span class="s0 on"></span>
					<span class="s1"></span>
					<span class="s2"></span>
					<span class="s3"></span>
					<span class="s4"></span>
					<span class="s5"></span>
					<span class="s6"></span>
					<span class="s7"></span>
					<span class="s8 on"></span>
				</div>
			</td>
			<td>
				<div class="stelai-puzzle">
					<span class="s0"></span>
					<span class="s1 on"></span>
					<span class="s2"></span>
					<span class="s3"></span>
					<span class="s4"></span>
					<span class="s5"></span>
					<span class="s6"></span>
					<span class="s7 on"></span>
					<span class="s8"></span>
				</div>
			</td>
		</tr>
		<tr>
			<td>Pattern.E</td>
			<td>Pattern.F</td>
			<td>Pattern.G</td>
			<td>Pattern.H</td>
		</tr>
	</tbody>
</table>

###### ゴール
すべての<span class="keyword">叡智の瞳</span>に光を宿す。
すべての<span class="keyword">叡智の瞳</span>に光を宿すと<span class="keyword">叡智の瞳</span>は青い瞳を宿す。

<table class="tabular">
	<tbody>
		<tr>
			<td><img class="eximg" src="/images/wizon/stela-solved.jpg"  alt="stela-on"  width="150px"></td>
		</tr>
	</tbody>
</table>

<span class="eg" id="eg-solve">[パズル解答例] `Pattern.D` から始めてゴールまで（最短手数）</span>
<table class="operate-stelai">
	<tbody>
		<tr>
			<td>スタート</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td>ゴール</td>
		</tr>
		<tr>
			<td>
				<div class="stelai-puzzle">
					<span class="s0 on"></span>
					<span class="s1 target"></span>
					<span class="s2"></span>
					<span class="s3"></span>
					<span class="s4 on"></span>
					<span class="s5"></span>
					<span class="s6"></span>
					<span class="s7"></span>
					<span class="s8"></span>
				</div>
			</td>
			<td>→</td>
			<td>
				<div class="stelai-puzzle">
					<span class="s0 effect"></span>
					<span class="s1 on effect"></span>
					<span class="s2 on effect"></span>
					<span class="s3 target"></span>
					<span class="s4 effect"></span>
					<span class="s5"></span>
					<span class="s6"></span>
					<span class="s7"></span>
					<span class="s8"></span>
				</div>
			</td>
			<td>→</td>
			<td>
				<div class="stelai-puzzle">
					<span class="s0 on effect"></span>
					<span class="s1 on"></span>
					<span class="s2 on"></span>
					<span class="s3 on effect"></span>
					<span class="s4 on effect"></span>
					<span class="s5"></span>
					<span class="s6 on effect"></span>
					<span class="s7"></span>
					<span class="s8 target"></span>
				</div>
			</td>
			<td>→</td>
			<td>
				<div class="stelai-puzzle">
					<span class="s0 on"></span>
					<span class="s1 on"></span>
					<span class="s2 on"></span>
					<span class="s3 on"></span>
					<span class="s4 on"></span>
					<span class="s5 on effect"></span>
					<span class="s6 on"></span>
					<span class="s7 on effect"></span>
					<span class="s8 on effect"></span>
				</div>
			</td>
			<td>→</td>
			<td>
				<div class="stelai-puzzle solved">
					<span class="s0"></span>
					<span class="s1"></span>
					<span class="s2"></span>
					<span class="s3"></span>
					<span class="s4"></span>
					<span class="s5"></span>
					<span class="s6"></span>
					<span class="s7"></span>
					<span class="s8"></span>
				</div>
			</td>
		</tr>
	</tbody>
</table>

### 数学的性質
###### 石碑の座標表記
石碑の座標表記を導入する。

<div class="figure">
	<div class="stelai-puzzle solved">
		<span class="s0">0</span>
		<span class="s1">1</span>
		<span class="s2">2</span>
		<span class="s3">3</span>
		<span class="s4">4</span>
		<span class="s5">5</span>
		<span class="s6">6</span>
		<span class="s7">7</span>
		<span class="s8">8</span>
	</div>
	<span class="caption">石碑の座標</span>
</div>

石碑はひし形状に並んでいるが正方形に並べたものを 45 度傾けたものとみなすことができる。
二次元に柱が配置されているので行列とみなし $s_{m, n}$ で石碑の位置を指定する事も可能であるが、プログラム作成上の都合によりベクトルとみなし０を起点 (*0-origin*) とし番号を振ることにする（これからの計算にもほとんど支障はきたさない）。

###### パズルの性質

* 同じ<span class="keyword">叡智の瞳</span>を続けて２回押すとすべての<span class="keyword">叡智の瞳</span>の状態が元に戻る
* <span class="keyword">叡智の瞳</span>を操作する順序は関係ない

<span class="eg">[パズルの性質] `Pattern.B` の状態で座標４ ($s_4$) の<span class="keyword">叡智の瞳</span>を２回続けて`操作`する</span>
<table class="operate-stelai">
	<tbody>
		<tr>
			<td>Pattern.B</td>
			<td></td>
			<td></td>
			<td></td>
			<td>Pattern.B</td>
		</tr>
		<tr>
			<td>
				<div class="stelai-puzzle">
					<span class="s0"></span>
					<span class="s1 on"></span>
					<span class="s2"></span>
					<span class="s3 on"></span>
					<span class="s4"></span>
					<span class="s5"></span>
					<span class="s6"></span>
					<span class="s7"></span>
					<span class="s8"></span>
				</div>
			</td>
			<td>→</td>
			<td>
				<div class="stelai-puzzle">
					<span class="s0"></span>
					<span class="s1"></span>
					<span class="s2"></span>
					<span class="s3"></span>
					<span class="s4 on"></span>
					<span class="s5 on"></span>
					<span class="s6"></span>
					<span class="s7 on"></span>
					<span class="s8"></span>
				</div>
			</td>
			<td>→</td>
			<td>
				<div class="stelai-puzzle">
					<span class="s0"></span>
					<span class="s1 on"></span>
					<span class="s2"></span>
					<span class="s3 on"></span>
					<span class="s4"></span>
					<span class="s5"></span>
					<span class="s6"></span>
					<span class="s7"></span>
					<span class="s8"></span>
				</div>
			</td>
		</tr>
	</tbody>
</table>

これらの性質により以下のことがわかる。
<p class="boxed">
<span class="keyword">叡智の瞳</span>が光を宿しているかどうかの判定は…<br>
<span class="keyword">叡智の瞳</span>の状態が変化した回数が<strong>偶数回</strong>か<strong>奇数回</strong>かによって決定される
</p>

### 導出への準備
###### <span class="keyword">叡智の瞳</span>の数式表現
特定の石碑を $s_i$ と表し、<span class="keyword">叡智の瞳</span>全体をベクトルで以下のように表記する。

<div class="math">
\[
	\mathbf{s} = [ s_0, s_1, \cdots, s_8 ]
\]
</div>

###### <span class="keyword">叡智の瞳</span>の状態の数式表現
<div class="stelai-puzzle figure">
	<span class="s0 on"></span>
	<span class="s1 on"></span>
	<span class="s2"></span>
	<span class="s3"></span>
	<span class="s4"></span>
	<span class="s5 on"></span>
	<span class="s6"></span>
	<span class="s7 on"></span>
	<span class="s8"></span>
</div>

$n$ の位置の<span class="keyword">叡智の瞳</span>が光を宿している状態を $s_i = 1$ とし、光を宿していない状態を $s_i = 0$ とする。たとえば、右のような石碑の状態をベクトルで表現すると以下のようになる。

<div class="math">
\[
	\mathbf{s} = [ 1, 1, 0, 0, 0, 1, 0, 1, 0 ]
\]
</div>

これにより<span class="keyword">叡智の瞳</span>は以下のような性質をもつ。

* $s \in 0, 1$
* $0 \leq s \leq 1$

###### <span class="keyword">叡智の瞳</span>の演算
<span class="keyword">叡智の瞳</span>の状態は変化した回数の偶奇によって決定する性質により２の剰余をとる演算で事足りる。

<span class="eg">[演算例] $s_i$ に**光が宿っている**状態で $s_i$ に影響する<span class="keyword">叡智の瞳</span>を２回 `操作` された</span>

<div class="math">
\[
	s_i + 2 = 1 + 2 = 3 \equiv 1 (\mod 2)
\]
</div>

演算結果が `1` なので $s_i$ は現在、**光が宿っている**ということがわかる。

四則演算の結果を以下のように定義する。

| $a$ | $b$ | $a + b$ | $a - b$ | $a \times b$ | $a \div b$ |
| :-: | :-: | :-----: | :-----: | :----------: | :--------: |
| $0$ | $0$ | $0$     | $0$     | $0$          | NA         |
| $0$ | $1$ | $1$     | $1$     | $0$          | $0$        |
| $1$ | $0$ | $1$     | $1$     | $0$          | NA         |
| $1$ | $1$ | $0$     | $0$     | $1$          | $1$        |

* 和算と差算の演算結果は同様になり**排他的論理和 (XOR) 演算と同様**
* 積算と除算も演算結果は同様になり**論理積 (AND) 演算と同様**

###### 計算式の作成
<ul class="figure-side-list">
	<li><span class="keyword">叡智の瞳</span>の初期状態を $a_i$</li>
	<li><span class="keyword">叡智の瞳</span>の操作後の状態を $b_i$</li>
	<li>$i$ の<span class="keyword">叡智の瞳</span>が操作された回数を $h_i$</li>
	<li>いずれも $0 \leq i \leq 8$</li>
</ul>

<div class="figure">
	<div class="stelai-puzzle solved">
		<span class="s0">0</span>
		<span class="s1">1</span>
		<span class="s2">2</span>
		<span class="s3">3</span>
		<span class="s4">4</span>
		<span class="s5">5</span>
		<span class="s6">6</span>
		<span class="s7">7</span>
		<span class="s8">8</span>
	</div>
	<span class="caption"><span class="keyword">叡智の瞳</span>の座標</span>
</div>

<hr class="clearfix">

$a_i, b_i, h_i$ は以下の関係になる。

<p class="boxed">
\[
	b_i = \left\{
	\begin{array}{rcrcrcrcrl}
		a_i &amp; + &amp; h_{i-3} &amp;   &amp;         &amp; + &amp; h_{i+1} &amp; + &amp; h_{i+3} &amp; \qquad \mathrm{if} \quad i \equiv 0 \\
		a_i &amp; + &amp; h_{i-3} &amp; + &amp; h_{i-1} &amp; + &amp; h_{i+1} &amp; + &amp; h_{i+3} &amp; \qquad \mathrm{if} \quad i \equiv 1 \\
		a_i &amp; + &amp; h_{i-3} &amp; + &amp; h_{i-1} &amp;   &amp;         &amp; + &amp; h_{i+3} &amp; \qquad \mathrm{if} \quad i \equiv 2 \\
	\end{array}
	(\mod 3)
	\right. \\
	\mbox{（ただし、$i<0$ または $8 < i$ のときは $h_i = 0$ とする）}
\]
</p>

操作した<span class="keyword">叡智の瞳</span> $a\_i$ とその左上 $h\_{i-3}$ 、左下 $h\_{i-1}$、右上 $h\_{i+1}$、右下 $h\_{i+3}$ を足したもの。
但し書きは、存在しない座標の<span class="keyword">叡智の瞳</span>を無視するためのものである。
基点から直列に座標を振ったので、場合分けが発生してしまったが式は複雑さは増していない。

###### [参考] <span class="keyword">叡智の瞳</span>を行列として扱った場合
<span class="keyword">叡智の瞳</span>の並びを行列とみなし２つのパラメータで座標を割り当てる。
以下は前項のものをベクトルから行列に置き換えたもの。
<a href="#計算式の作成:a108f0bcf04ae609f9fdc7b788ebcb3d">計算式の作成</a>の項と比較すると場合分けがなくなって１本の式になった。

<ul class="figure-side-list">
	<li><span class="keyword">叡智の瞳</span>の初期状態を $a_{m,n}$</li>
	<li><span class="keyword">叡智の瞳</span>の操作後の状態を $b_{m,n}$</li>
	<li>$(m,n)$ の<span class="keyword">叡智の瞳</span>が操作された回数を $h_{m,n}$</li>
	<li>いずれも $0 \leq m, n \leq 2$</li>
</ul>

<div class="figure">
	<div class="stelai-puzzle solved">
		<span class="s0">0,0</span>
		<span class="s1">0,1</span>
		<span class="s2">0,2</span>
		<span class="s3">1,0</span>
		<span class="s4">1,1</span>
		<span class="s5">1,2</span>
		<span class="s6">2,0</span>
		<span class="s7">2,1</span>
		<span class="s8">2,2</span>
	</div>
	<span class="caption"><span class="keyword">叡智の瞳</span>の座標</span>
</div>

<hr class="clearfix">

$a\_{m,n}, b\_{m,n}, h\_{m,n}$ は以下の関係になる。

<p class="boxed">
\[
	b_{m,n} = a_{m,n} + h_{m-1,n} + h_{m,n-1} + h_{m,n+1} + h_{m+1,n} \\
	\mbox{（ただし、$m,n<0$ または $2 < m,n$ のときは $h_{m,n} = 0$ とする）}
\]
</p>

###### <span class="keyword">叡智の瞳</span>の連立方程式
<a href="#計算式の作成:a108f0bcf04ae609f9fdc7b788ebcb3d">計算式の作成</a>の項で作成した計算式にすべての<span class="keyword">叡智の瞳</span>を当てはめると以下のようになる。

<div class="figure">
	<div class="stelai-puzzle solved">
		<span class="s0">0</span>
		<span class="s1">1</span>
		<span class="s2">2</span>
		<span class="s3">3</span>
		<span class="s4">4</span>
		<span class="s5">5</span>
		<span class="s6">6</span>
		<span class="s7">7</span>
		<span class="s8">8</span>
	</div>
	<span class="caption"><span class="keyword">叡智の瞳</span>の座標</span>
</div>

<div class="math">
\[
	\left\{
	\begin{array}{rcrrrrrrrrrr}
		b_0 &amp; = &amp; a_0 &amp; +h_0 &amp; +h_1 &amp;      &amp; +h_3 &amp;      &amp;      &amp;      &amp;      &amp;      \\
		b_1 &amp; = &amp; a_1 &amp; +h_0 &amp; +h_1 &amp; +h_2 &amp;      &amp; +h_4 &amp;      &amp;      &amp;      &amp;      \\
		b_2 &amp; = &amp; a_2 &amp;      &amp; +h_1 &amp; +h_2 &amp;      &amp;      &amp; +h_5 &amp;      &amp;      &amp;      \\
		b_3 &amp; = &amp; a_3 &amp; +h_0 &amp;      &amp;      &amp; +h_3 &amp; +h_4 &amp;      &amp; +h_6 &amp;      &amp;      \\
		b_4 &amp; = &amp; a_4 &amp;      &amp; +h_1 &amp;      &amp; +h_3 &amp; +h_4 &amp; +h_5 &amp;      &amp; +h_7 &amp;      \\
		b_5 &amp; = &amp; a_5 &amp;      &amp;      &amp; +h_2 &amp;      &amp; +h_4 &amp; +h_5 &amp;      &amp;      &amp; +h_8 \\
		b_6 &amp; = &amp; a_6 &amp;      &amp;      &amp;      &amp; +h_3 &amp;      &amp;      &amp; +h_6 &amp; +h_7 &amp;      \\
		b_7 &amp; = &amp; a_7 &amp;      &amp;      &amp;      &amp;      &amp; +h_4 &amp;      &amp; +h_6 &amp; +h_7 &amp; +h_8 \\
		b_8 &amp; = &amp; a_8 &amp;      &amp;      &amp;      &amp;      &amp;      &amp; +h_5 &amp;      &amp; +h_7 &amp; +h_8
	\end{array}
	\right.
\]
</div>

###### 方程式を解く上での問題
石碑のリドルはすべての<span class="keyword">叡智の瞳</span>に光を宿す、つまり初期状態または途中まで解かれた状態 $a_i$ に対して $b_i = 1$ となるような $h_i$ の値をうまく見つければよい。
つまり、上記の九元一次方程式を解いて $h_i$ の値を求めればよい。
しかし、$b_i = 1$ となる値を見つけるのは式が複雑になるので<span class="keyword">叡智の瞳</span>の状態に対偶をとって考える。
そこで、改めてルールを簡単をイメージすると以下の通り。

イメージ

* スタート：すべての<span class="keyword">叡智の瞳</span>が光を宿った状態からランダムに２つの<span class="keyword">叡智の瞳</span>が光を宿していない
* ゴール：すべての<span class="keyword">叡智の瞳</span>に宿させない
* 状態：同じ
* 操作：同じ

他にも、同様の状態になるイメージを複数考えられるが論理が破たんしてしまうなどの理由で上記のイメージで行う。

###### 行列へ変換
まず、とりあえず **$b_i = 0$** を代入して $a_i$ を左辺に移行する。
$b_i = 0$ を代入したので<span class="keyword">叡智の瞳</span>は**光を宿していない状態を指している**ことに注意（前項参照）。
$a_i$ を左辺に移行すると以下な連立方程式になる。

<div class="math">
\[
	\left\{
	\begin{array}{rcrrrrrrrrr}
		a_0 &amp; = &amp;  h_0 &amp; +h_1 &amp;      &amp; +h_3 &amp;      &amp;      &amp;      &amp;      &amp;      \\
		a_1 &amp; = &amp;  h_0 &amp; +h_1 &amp; +h_2 &amp;      &amp; +h_4 &amp;      &amp;      &amp;      &amp;      \\
		a_2 &amp; = &amp;      &amp;  h_1 &amp; +h_2 &amp;      &amp;      &amp; +h_5 &amp;      &amp;      &amp;      \\
		a_3 &amp; = &amp;  h_0 &amp;      &amp;      &amp; +h_3 &amp; +h_4 &amp;      &amp; +h_6 &amp;      &amp;      \\
		a_4 &amp; = &amp;      &amp;  h_1 &amp;      &amp; +h_3 &amp; +h_4 &amp; +h_5 &amp;      &amp; +h_7 &amp;      \\
		a_5 &amp; = &amp;      &amp;      &amp;  h_2 &amp;      &amp; +h_4 &amp; +h_5 &amp;      &amp;      &amp; +h_8 \\
		a_6 &amp; = &amp;      &amp;      &amp;      &amp;  h_3 &amp;      &amp;      &amp; +h_6 &amp; +h_7 &amp;      \\
		a_7 &amp; = &amp;      &amp;      &amp;      &amp;      &amp;  h_4 &amp;      &amp; +h_6 &amp; +h_7 &amp; +h_8 \\
		a_8 &amp; = &amp;      &amp;      &amp;      &amp;      &amp;      &amp;  h_5 &amp;      &amp; +h_7 &amp; +h_8
	\end{array}
	\right.
\]
</div>

右辺にでてくる係数を行列にまとめると以下のようになる。
またこれを**<span class="keyword">叡智の瞳</span>の方程式**と名づける。

<div class="math">
\[
	\begin{bmatrix}
		a_0 \\
		a_1 \\
		a_2 \\
		a_3 \\
		a_4 \\
		a_5 \\
		a_6 \\
		a_7 \\
		a_8
	\end{bmatrix}
	=
	\begin{bmatrix}
		1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		1 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 \\
		1 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 \\
		0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 \\
		0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 1 \\
		0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1
	\end{bmatrix}
	\begin{bmatrix}
		h_0 \\
		h_1 \\
		h_2 \\
		h_3 \\
		h_4 \\
		h_5 \\
		h_6 \\
		h_7 \\
		h_8
	\end{bmatrix}
\]
</div>

###### 記号の導入
<span class="keyword">叡智の瞳</span>の方程式をもう少し抽象化する。

<div class="math">
\[
	\mathbf{a} =
	\begin{bmatrix}
		a_0 \\
		a_1 \\
		a_2 \\
		a_3 \\
		a_4 \\
		a_5 \\
		a_6 \\
		a_7 \\
		a_8
	\end{bmatrix}
	, S =
	\begin{bmatrix}
		1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		1 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 \\
		1 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 \\
		0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 \\
		0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 1 \\
		0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1
	\end{bmatrix}
	, \mathbf{h} =
	\begin{bmatrix}
		h_0 \\
		h_1 \\
		h_2 \\
		h_3 \\
		h_4 \\
		h_5 \\
		h_6 \\
		h_7 \\
		h_8
	\end{bmatrix}

\]
</div>

として **$\mathbf{a} = S \mathbf{h}$** と完結に記述できるようになった。

###### $a_i$ 移行関する補足

$b_i = 0$ を代入して $a_i = \ldots$ となる理由。

$a_i = 0$ の場合

<div class="math">
\[
	\begin{array}{rcll}
		b_i   &amp; = &amp; a_i + \ldots &amp;                      \\
		0     &amp; = &amp; 0   + \ldots &amp; ( b_i = 0, a_i = 0 ) \\
		0 - 0 &amp; = &amp; \ldots       &amp;                      \\
		0     &amp; = &amp; \ldots       &amp; ( a_i = 0 )          \\
		a_i   &amp; = &amp; \ldots       &amp; ■
	\end{array}
\]
</div>

$a_i = 1$ の場合（参照：<a href="#span-class-keyword-叡智の瞳-span-の演算:a108f0bcf04ae609f9fdc7b788ebcb3d"><span class="keyword">叡智の瞳</span>の演算</a>）

<div class="math">
\[
	\begin{array}{rcll}
		b_i   &amp; = &amp; a_i + \ldots &amp;                       \\
		0     &amp; = &amp; 1   + \ldots &amp; ( b_i = 0, a_i = 1 )  \\
		0 - 1 &amp; = &amp; \ldots       &amp; ( a - b = 0 - 1 = 1 ) \\
		1     &amp; = &amp; \ldots       &amp; ( a_i = 1 )           \\
		a_i   &amp; = &amp; \ldots       &amp; ■
	\end{array}
\]
</div>

$a_i$ が取りうるすべての値 $( 0, 1 )$ において同じ結果になるので<a href="#行列へ変換:a108f0bcf04ae609f9fdc7b788ebcb3d">行列へ変換</a>の項にある連立方程式になる。

### <span class="keyword">叡智の瞳</span>の方程式
<span class="keyword">叡智の瞳</span>の方程式 $\mathbf{a} = S \mathbf{h}$ をどう解くか考えたい。
パズルのゴールである $\mathbf{b}$ はすでに除去されておりパズルの初期状態である $\mathbf{a}$ は既知である。
そして $S$ は定数であるから、未知なのは $\mathbf{h}$ だけである。
そこで $\mathbf{h} = \ldots$ という形に式を持っていきたい。

<div class="math">
\[
	\begin{array}{rcl}
		\mathbf{a}              &amp; = &amp; S\mathbf{h}       \\
		S\mathbf{h}           &amp; = &amp; \mathbf{a}          \\
		S^{-1} S \mathbf{h} &amp; = &amp; S^{-1} \mathbf{a} \\
		\mathbf{h}              &amp; = &amp; S^{-1} \mathbf{a}
	\end{array}
\]
</div>

方程式の右辺にある $S$ を除去したい。
そこで $S$ の逆行列であある $S^{-1}$ を（行列では積算の交換法則が成り立たないため）両辺の左から掛けて $S$ を除去することで $\mathbf{h} = \ldots$ という形の式になった。

###### $ S^{-1} $ を求める
$2 \times 2$ 行列、$3 \times 3$ 行列および $4 \times 4$ 行列であれば広く知られた逆行列の公式があるが $S$ は $9 \times 9$ 行列であるためそれらを利用できない。
そこで、逆行列を解くことが出来るアルゴリズムである [ガウスの消去法](https://ja.wikipedia.org/wiki/%E3%82%AC%E3%82%A6%E3%82%B9%E3%81%AE%E6%B6%88%E5%8E%BB%E6%B3%95) を利用する。

ガウスの消去法についての説明は割愛するが以下に計算過程を記述していく。

[計算過程をスキップ](#ガウスの消去法-終了状態)

###### ガウスの消去法：開始状態
<div class="math">
\[
	\begin{array}{l}
		0: \\ 1: \\ 2: \\ 3: \\ 4: \\ 5: \\ 6: \\ 7: \\ 8:
	\end{array}
	\left[
	\begin{array}{ccccccccc|ccccccccc}
		1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		1 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		1 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1
	\end{array}
	\right]
\]
</div>

###### 前進消去
###### step 1: line 0 - line 1, line 0 - line 3
<div class="math">
\[
	\begin{array}{l}
		0: \\ 1: \\ 2: \\ 3: \\ 4: \\ 5: \\ 6: \\ 7: \\ 8:
	\end{array}
	\left[
	\begin{array}{ccccccccc|ccccccccc}
		1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		1 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		1 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1
	\end{array}
	\right]
	\begin{array}{l}
		\text{pivot} \\ \text{elim} \\ \\ \text{elim} \\ \\ \\ \\ \\ \\
	\end{array}
\]
</div>

###### step2: swap line 1, line 2
<div class="math">
\[
	\begin{array}{l}
		0: \\ 1: \\ 2: \\ 3: \\ 4: \\ 5: \\ 6: \\ 7: \\ 8:
	\end{array}
	\left[
	\begin{array}{ccccccccc|ccccccccc}
		1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1
	\end{array}
	\right]
	\begin{array}{l}
		\\ \text{swap} \\ \text{swap} \\ \\ \\ \\ \\ \\ \\
	\end{array}
\]
</div>

###### step3: line 1 - line 3, line 1 - line 4
<div class="math">
\[
	\begin{array}{l}
		0: \\ 1: \\ 2: \\ 3: \\ 4: \\ 5: \\ 6: \\ 7: \\ 8:
	\end{array}
	\left[
	\begin{array}{ccccccccc|ccccccccc}
		1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1
	\end{array}
	\right]
	\begin{array}{l}
		\\ \text{pivot} \\ \\ \text{elim} \\ \text{elim} \\ \\ \\ \\ \\
	\end{array}
\]
</div>

###### step4: line 2 - line 3, line 2 - line 4, line 2 - line 5
<div class="math">
\[
	\begin{array}{l}
		0: \\ 1: \\ 2: \\ 3: \\ 4: \\ 5: \\ 6: \\ 7: \\ 8:
	\end{array}
	\left[
	\begin{array}{ccccccccc|ccccccccc}
		1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1
	\end{array}
	\right]
	\begin{array}{l}
		\\ \\ \text{pivot} \\ \text{elim} \\ \text{elim} \\ \text{elim} \\ \\ \\ \\
	\end{array}
\]
</div>

###### step5: swap line 4, line 7
<div class="math">
\[
	\begin{array}{l}
		0: \\ 1: \\ 2: \\ 3: \\ 4: \\ 5: \\ 6: \\ 7: \\ 8:
	\end{array}
	\left[
	\begin{array}{ccccccccc|ccccccccc}
		1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1
	\end{array}
	\right]
	\begin{array}{l}
		\\ \\ \\ \\ \text{swap} \\ \\ \\ \text{swap} \\ \\
	\end{array}
\]
</div>

###### step6: swap line 5, line 6
<div class="math">
\[
	\begin{array}{l}
		0: \\ 1: \\ 2: \\ 3: \\ 4: \\ 5: \\ 6: \\ 7: \\ 8:
	\end{array}
	\left[
	\begin{array}{ccccccccc|ccccccccc}
		1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1
	\end{array}
	\right]
	\begin{array}{l}
		\\ \\ \\ \\ \text{pivot} \\ \text{swap} \\ \text{swap} \\ \\ \\
	\end{array}
\]
</div>

###### step7: line 5 - line 8
<div class="math">
\[
	\begin{array}{l}
		0: \\ 1: \\ 2: \\ 3: \\ 4: \\ 5: \\ 6: \\ 7: \\ 8:
	\end{array}
	\left[
	\begin{array}{ccccccccc|ccccccccc}
		1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1
	\end{array}
	\right]
	\begin{array}{l}
		\\ \\ \\ \\ \\ \text{pivot} \\ \\ \\ \text{elim} \\
	\end{array}
\]
</div>

###### step8, step 9, step 10
<div class="math">
\[
	\begin{array}{l}
		0: \\ 1: \\ 2: \\ 3: \\ 4: \\ 5: \\ 6: \\ 7: \\ 8:
	\end{array}
	\left[
	\begin{array}{ccccccccc|ccccccccc}
		1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1
	\end{array}
	\right]
	\begin{array}{l}
		\\ \\ \\ \\ \\ \\ \text{pivot} \\ \text{pivot} \\ \text{pivot} \\
	\end{array}
\]
</div>

###### 後退代入

###### step1: line 8 - line 6, line 8 - line 4
<div class="math">
\[
	\begin{array}{l}
		0: \\ 1: \\ 2: \\ 3: \\ 4: \\ 5: \\ 6: \\ 7: \\ 8:
	\end{array}
	\left[
	\begin{array}{ccccccccc|ccccccccc}
		1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1
	\end{array}
	\right]
	\begin{array}{l}
		\\ \\ \\ \\ \text{elim} \\ \\ \text{elim} \\ \\ \text{pivot} \\
	\end{array}
\]
</div>

###### step2: line 7 - line 5, line 7 - line 4
<div class="math">
\[
	\begin{array}{l}
		0: \\ 1: \\ 2: \\ 3: \\ 4: \\ 5: \\ 6: \\ 7: \\ 8:
	\end{array}
	\left[
	\begin{array}{ccccccccc|ccccccccc}
		1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 1 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 1 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1
	\end{array}
	\right]
	\begin{array}{l}
		\\ \\ \\ \\ \text{elim} \\ \text{elim} \\ \\ \text{pivot} \\ \\
	\end{array}
\]
</div>

###### step3: line 6 - line 4, line 6 - line 3
<div class="math">
\[
	\begin{array}{l}
		0: \\ 1: \\ 2: \\ 3: \\ 4: \\ 5: \\ 6: \\ 7: \\ 8:
	\end{array}
	\left[
	\begin{array}{ccccccccc|ccccccccc}
		1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 1 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1
	\end{array}
	\right]
	\begin{array}{l}
		\\ \\ \\ \text{elim} \\ \text{elim} \\ \\ \text{pivot} \\ \\ \\
	\end{array}
\]
</div>

###### step4: line 5 - line 3, line 5 - line 1
<div class="math">
\[
	\begin{array}{l}
		0: \\ 1: \\ 2: \\ 3: \\ 4: \\ 5: \\ 6: \\ 7: \\ 8:
	\end{array}
	\left[
	\begin{array}{ccccccccc|ccccccccc}
		1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 1 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 1 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1
	\end{array}
	\right]
	\begin{array}{l}
		\\ \text{elim} \\ \\ \text{elim} \\ \\ \text{pivot} \\ \\ \\ \\
	\end{array}
\]
</div>

###### step5: line 4 - line 2
<div class="math">
\[
	\begin{array}{l}
		0: \\ 1: \\ 2: \\ 3: \\ 4: \\ 5: \\ 6: \\ 7: \\ 8:
	\end{array}
	\left[
	\begin{array}{ccccccccc|ccccccccc}
		1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 1 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 1 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1
	\end{array}
	\right]
	\begin{array}{l}
		\\ \\ \text{elim} \\ \\ \text{pivot} \\ \\ \\ \\ \\
	\end{array}
\]
</div>

###### step6: line 3 - line 2, line 3 - line 0
<div class="math">
\[
	\begin{array}{l}
		0: \\ 1: \\ 2: \\ 3: \\ 4: \\ 5: \\ 6: \\ 7: \\ 8:
	\end{array}
	\left[
	\begin{array}{ccccccccc|ccccccccc}
		1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 1 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 1 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1
	\end{array}
	\right]
	\begin{array}{l}
		\text{elim} \\ \\ \text{elim} \\ \text{pivot} \\ \\ \\ \\ \\ \\
	\end{array}
\]
</div>

###### step7: line 2 - line 1
<div class="math">
\[
	\begin{array}{l}
		0: \\ 1: \\ 2: \\ 3: \\ 4: \\ 5: \\ 6: \\ 7: \\ 8:
	\end{array}
	\left[
	\begin{array}{ccccccccc|ccccccccc}
		1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 1 \\
		0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 1 \\
		0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 1 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 1 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1
	\end{array}
	\right]
	\begin{array}{l}
		\\ \text{elim} \\ \text{pivot} \\ \\ \\ \\ \\ \\ \\
	\end{array}
\]
</div>

###### step9: line 1 - line 0
<div class="math">
\[
	\begin{array}{l}
		0: \\ 1: \\ 2: \\ 3: \\ 4: \\ 5: \\ 6: \\ 7: \\ 8:
	\end{array}
	\left[
	\begin{array}{ccccccccc|ccccccccc}
		1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 1 \\
		0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 \\
		0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 1 \\
		0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 1 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 1 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1
	\end{array}
	\right]
	\begin{array}{l}
		\text{elim} \\ \text{pivot} \\ \\ \\ \\ \\ \\ \\ \\
	\end{array}
\]
</div>

###### ガウスの消去法：終了状態
<div class="math">
\[
	\begin{array}{l}
		0: \\ 1: \\ 2: \\ 3: \\ 4: \\ 5: \\ 6: \\ 7: \\ 8:
	\end{array}
	\left[
	\begin{array}{ccccccccc|ccccccccc}
		1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 \\
		0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 \\
		0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 1 \\
		0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 1 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 1 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1
	\end{array}
	\right]
\]
</div>

###### $S^{-1}$ の導出
$S$ にガウスの消去法を用いて以下の通り逆行列 $S^{-1}$ を求めることが出来た。

<div class="math">
\[
	S^{-1} =
	\begin{bmatrix}
		1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 \\
		0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 \\
		1 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 1 \\
		0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 1 \\
		0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 \\
		1 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 \\
		1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 1 \\
		1 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
		0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1
	\end{bmatrix}
\]
</div>

### 石碑パズルの解法

###### リドルと解法の対応
$S^{-1}$ が導出され $\mathbf{h} = S^{-1}\mathbf{a}$ を求める事ができるようになった。
[方程式を解く上での問題](#方程式を解く上での問題)でリドルのゴールを**全ての<span class="keyword">叡智の瞳</span>に光を宿さない**に組み替えたことを思い出してほしい。
そこで、リドルの解を求めるにあたって問題入力もそれに対応させる必要がある。
やることは単純でありすべての<span class="keyword">叡智の瞳</span>の状態を反転させるだけである。

<div class="figure">
	<div class="stelai-puzzle">
		<span class="s0 on">0</span>
		<span class="s1">1</span>
		<span class="s2">2</span>
		<span class="s3">3</span>
		<span class="s4 on">4</span>
		<span class="s5">5</span>
		<span class="s6">6</span>
		<span class="s7">7</span>
		<span class="s8">8</span>
	</div>
	<span class="caption">Pattern.D</span>
</div>

<span class="eg">[問題の対応] `Pattern.D` を $\mathbf{a}$ 表現と解法への対応</span>

<div class="math">
\[
	\mathbf{a} =
	\begin{bmatrix}
		1 \\ 0 \\ 0 \\ 0 \\ 1 \\ 0 \\ 0 \\ 0 \\ 0
	\end{bmatrix}
	\qquad
	\xrightarrow{adjust}
	\qquad
	\mathbf{a}^{adjust} =
	\begin{bmatrix}
		0 \\ 1 \\ 1 \\ 1 \\ 0 \\ 1 \\ 1 \\ 1 \\ 1
	\end{bmatrix}
\]
</div>

###### パズルの解答導出
<span class="keyword">叡智の瞳</span>の初期状態または現在の状態から $\mathbf{a}^{adjust}$ を入力しそれを左から $S^{-1}$ を掛けると $\mathbf{h}$ が導かれる。
その $\mathbf{h}$ が`操作`するべき<span class="keyword">叡智の瞳</span>に対応したものとなる（`操作`する<span class="keyword">叡智の瞳</span>の順序は順不同）。

<span class="eg">[解答導出] `Pattern.D` を初期状態とし解答を導出する</span>

<div class="math">
\[
	\begin{array}{rcl}
		\mathbf{h} &amp; = &amp; S^{-1}\mathbf{a} \\
		&amp; = &amp;
		\begin{bmatrix}
			1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 \\
			0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 \\
			1 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 1 \\
			0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 1 \\
			0 &amp; 1 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 \\
			1 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 \\
			1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 1 \\
			1 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\
			0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 1
		\end{bmatrix}
		\times
		\begin{bmatrix}
			0 \\ 1 \\ 1 \\ 1 \\ 0 \\ 1 \\ 1 \\ 1 \\ 1
		\end{bmatrix} \\
		&amp; = &amp;
		\begin{bmatrix}
			1 \cdot 0 + 0 \cdot 1 + 1 \cdot 1 + 0 \cdot 1 + 0 \cdot 0 + 1 \cdot 1 + 1 \cdot 1 + 1 \cdot 1 + 0 \cdot 1\\
			0 \cdot 0 + 0 \cdot 1 + 0 \cdot 1 + 0 \cdot 1 + 1 \cdot 0 + 0 \cdot 1 + 1 \cdot 1 + 1 \cdot 1 + 1 \cdot 1\\
			1 \cdot 0 + 0 \cdot 1 + 1 \cdot 1 + 1 \cdot 1 + 0 \cdot 0 + 0 \cdot 1 + 0 \cdot 1 + 1 \cdot 1 + 1 \cdot 1\\
			0 \cdot 0 + 0 \cdot 1 + 1 \cdot 1 + 0 \cdot 1 + 1 \cdot 0 + 1 \cdot 1 + 0 \cdot 1 + 0 \cdot 1 + 1 \cdot 1\\
			0 \cdot 0 + 1 \cdot 1 + 0 \cdot 1 + 1 \cdot 1 + 1 \cdot 0 + 1 \cdot 1 + 0 \cdot 1 + 1 \cdot 1 + 0 \cdot 1\\
			1 \cdot 0 + 0 \cdot 1 + 0 \cdot 1 + 1 \cdot 1 + 1 \cdot 0 + 0 \cdot 1 + 1 \cdot 1 + 0 \cdot 1 + 0 \cdot 1\\
			1 \cdot 0 + 1 \cdot 1 + 0 \cdot 1 + 0 \cdot 1 + 0 \cdot 0 + 1 \cdot 1 + 1 \cdot 1 + 0 \cdot 1 + 1 \cdot 1\\
			1 \cdot 0 + 1 \cdot 1 + 1 \cdot 1 + 0 \cdot 1 + 1 \cdot 0 + 0 \cdot 1 + 0 \cdot 1 + 0 \cdot 1 + 0 \cdot 1\\
			0 \cdot 0 + 1 \cdot 1 + 1 \cdot 1 + 1 \cdot 1 + 0 \cdot 0 + 0 \cdot 1 + 1 \cdot 1 + 0 \cdot 1 + 1 \cdot 1
		\end{bmatrix} \\
		&amp; = &amp;
		\begin{bmatrix}
			0 + 0 + 1 + 0 + 0 + 1 + 1 + 1 + 0\\
			0 + 0 + 0 + 0 + 0 + 0 + 1 + 1 + 1\\
			0 + 0 + 1 + 1 + 0 + 0 + 0 + 1 + 1\\
			0 + 0 + 1 + 0 + 0 + 1 + 0 + 0 + 1\\
			0 + 1 + 0 + 1 + 0 + 1 + 0 + 1 + 0\\
			0 + 0 + 0 + 1 + 0 + 0 + 1 + 0 + 0\\
			0 + 1 + 0 + 0 + 0 + 1 + 1 + 0 + 1\\
			0 + 1 + 1 + 0 + 0 + 0 + 0 + 0 + 0\\
			0 + 1 + 1 + 1 + 0 + 0 + 1 + 0 + 1
		\end{bmatrix} \\
		&amp; = &amp;
		\begin{bmatrix}
			4 \equiv 0\\
			3 \equiv 1\\
			4 \equiv 0\\
			3 \equiv 1\\
			4 \equiv 0\\
			2 \equiv 0\\
			4 \equiv 0\\
			2 \equiv 0\\
			5 \equiv 1
		\end{bmatrix}
		(\mod 2) \\
		\mathbf{h} &amp; = &amp;
		\begin{bmatrix}
			0\\
			1\\
			0\\
			1\\
			0\\
			0\\
			0\\
			0\\
			1
		\end{bmatrix}
	\end{array}
\]
</div>

<div class="stelai-puzzle figure">
	<span class="s0 on">0</span>
	<span class="s1 target">1</span>
	<span class="s2">2</span>
	<span class="s3 target">3</span>
	<span class="s4 on">4</span>
	<span class="s5">5</span>
	<span class="s6">6</span>
	<span class="s7">7</span>
	<span class="s8 target">8</span>
</div>

ここで求まった $\mathbf{h}$ が `操作` するべき<span class="keyword">叡智の瞳</span>であり若い添え字順に操作したのが [e.g.4 パズル解答例](#eg-solve)になる。

### JavaScript による実装
前項までで導出した解法を JavaScript によるプログラムに落としていく。
リドル（パズル）の解を得るのに**最低限のもの**のみを実装することとし、ユーザーインターフェイスなどは省く。
ユーザーインターフェイスも含めたコード全文は [recol.StelaiPuzzle.js](/js/recol.StelaiPuzzle.js) に掲載されてる。
また、ここで作成した JavaScript の `RECOL.StelaPuzzle` モジュールと前述で示した [recol.StelaiPuzzle.js](/js/recol.StelaiPuzzle.js) には一部メソッドが欠落しているが最低限の範囲をこえるためである。

<div class="internal-article">
	<a href="/post/wizon/tools/stelai-puzzle/"></a>
	<p class="article-eyecatch"><img src="/images/wizon/eyecatches-stelai-puzzle.png"></p>
	<p class="article-title">昏き揺らぎの地 石碑パズル</p>
	<p class="article-description"><code>RECOL.StelaPuzzle</code> を実装され実用的に操作できるも</p>
</div>

コーディング上のマイルールとして JavaScript の変数（定数扱い、フィールド扱い、メソッド扱いすべて含む）の先頭にアンダーバー `_` があるものは外部から変更不可能なプライベート変数を指している。
アンダーバーのついていないものはたとえ定数扱いであれど、残念ながら外部から変更が可能であることを暗に示している。

###### 定数の定義
前項までで求めた $S^{-1}$ を２次元配列の形で定数に定義。
プログラムで動的に求める事も可能だが石碑のサイズは $3 \times 3$ で固定であるためわざわざ計算コストをかけて求めることをせず定数として登録している。

```` javascript
var _SOLUTION_MATRIX = [
		[ 1, 0, 1, 0, 0, 1, 1, 1, 0 ],
		[ 0, 0, 0, 0, 1, 0, 1, 1, 1 ],
		[ 1, 0, 1, 1, 0, 0, 0, 1, 1 ],
		[ 0, 0, 1, 0, 1, 1, 0, 0, 1 ],
		[ 0, 1, 0, 1, 1, 1, 0, 1, 0 ],
		[ 1, 0, 0, 1, 1, 0, 1, 0, 0 ],
		[ 1, 1, 0, 0, 0, 1, 1, 0, 1 ],
		[ 1, 1, 1, 0, 1, 0, 0, 0, 0 ],
		[ 0, 1, 1, 1, 0, 0, 1, 0, 1 ]
	];
````

<span class="keyword">叡智の瞳</span>の状態を定数表現したもの。
`setStela( 3, STELA_STATE.ON );` といった具合に外部からの状態操作に用いる。

```` javascript
var STELA_STATE = {
		OFF: 0,
		ON:  1
	};
````

配列（<span class="keyword">叡智の瞳</span>）のサイズを保持。
配列のサイズは固定であるため for 文の継続条件用に定数登録。

```` javascript
var VECTOR_SIZE = 9;
````

###### フィールドの定義
[<span class="keyword">叡智の瞳</span>の数式表現](#span-class-keyword-叡智の瞳-span-の数式表現)で定義した $\mathbf{s}$ を表現したもの。
プライベートフィールド扱いであり、`_stelai` フィールドの操作は後述の `setStela()` メソッドで行う。

```` javascript
var _stelai = [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
````

###### <span class="keyword">叡智の瞳</span>操作メソッド
`_stelai` フィールドのセッター。
座標 (`position`) や状態 (`state`) の型や範囲のチェックは行っていない単純なもの。
また、ユーザーインターフェイスを経由してマウスで１つ１つ設定することを想定しているので１度に１つの<span class="keyword">叡智の瞳</span>しか操作できない。

```` javascript
var setStela = function ( position, state ) {
	_stelai[ position ] = state;
};
````

###### パズルの解を求めるメソッド
現在の<span class="keyword">叡智の瞳</span>の状態（プライベートフィールド `_stelai` ）からパズルの解を求める。
入力はプライベートフィールド `_stelai` を参照するので入力は存在しない。
出力は[<span class="keyword">叡智の瞳</span>の方程式](#span-class-keyword-叡智の瞳-span-の方程式)における $\mathbf{h}$ を戻り値とする。

```` javascript
var getSolution = function () {
	// 1. 内部変数宣言
	var COMPLEMENT_STELAI = ( function () {
			var cs = [];

			for ( var i = 0; i < VECTOR_SIZE; i += 1 ) {
				cs[ i ] = _stelai[ i ] ^ 1;
			}

			return cs;
		} () ),
		product = [];

	// 2. 処理本体
	for ( var i = 0; i < VECTOR_SIZE; i += 1 ) {
		product[ i ] = 0;
		for ( var j = 0; j < VECTOR_SIZE; j += 1 ) {
			product[ i ] += COMPLEMENT_STELAI[ j ] * _SOLUTION_MATRIX[ i ][ j ];
		}
		product[ i ] %= 2;
	}

	// 3. 戻り値
	return product;
};
````

###### １．内部変数宣言
```` javascript
var COMPLEMENT_STELAI = ( function () {
		var cs = [];

		for ( var i = 0; i < VECTOR_SIZE; i += 1 ) {
			cs[ i ] = _stelai[ i ] ^ 1;
		}

		return cs;
	} () ),
	product = [];
````

関数内上部に定義された内部変数 `product` は行列の積算結果を格納するための配列。
もう１つの内部変数 `COMPLEMENT_STELAI` は定数扱いで[リドルと解法の対応](#リドルと解法の対応)で行っている動作と同様で $\mathbf{a}^{adjust}$ を求めている。実装上行っている処理は `_stelai` の各値に排他的論理和をとり値を反転している。
以下のように if 文などで行ってもよいが排他的論理和を用いる方が処理を効率的に行えるため採用している。

```` javascript
// alternative procedure #1
for ( var i = 0; i < VECTOR_SIZE; i += 1 ) {
	if ( _stelai[ i ] === STELA_STATE.ON ) {
		cs[ i ] = STELA_STATE.OFF;
	} else {
		cs[ i ] = STELA_STATE.ON;
	}
}

// alternative procedure #2
// STELA_STATE.ON が truthy であることを利用した if 文
for ( var i = 0; i < VECTOR_SIZE; i += 1 ) {
	if ( _stelai[ i ] ) {
		cs[ i ] = STELA_STATE.OFF;
	} else {
		cs[ i ] = STELA_STATE.ON;
	}
}

// alternative procedure #3
// 分岐内の処理内容が値代入のみなので #2 を三項演算子による書きかえ
for ( var i = 0; i < VECTOR_SIZE; i += 1 ) {
	cs[ i ] = _stelai[ i ] ? STELA_STATE.OFF : STELA_STATE.ON;
}
````

###### ２．処理本体
```` javascript
for ( var i = 0; i < VECTOR_SIZE; i += 1 ) {
	product[ i ] = 0;
	for ( var j = 0; j < VECTOR_SIZE; j += 1 ) {
		product[ i ] += COMPLEMENT_STELAI[ j ] * _SOLUTION_MATRIX[ i ][ j ];
	}
	product[ i ] %= 2;
}
````

内部変数の宣言の続く二重 for 文が処理本体となる。
最後の一文は[<span class="keyword">叡智の瞳</span>の演算](#span-class-keyword-叡智の瞳-span-の演算)で定義した通り最後に偶奇（２の剰余）をとっている。
前述と for 文内先頭にある `product[ i ]` の初期化を除けば行列の積を求めているだけである。
本来の行列（正方行列同士）の積ならば以下のような三重 for 文になるが乗算行列の列数が常に１列なので簡略化している。

```` javascript
var n = [ VECTOR_SIZE ][ VECTOR_SIZE ],
	m = [ VECTOR_SIZE ][ VECTOR_SIZE ];

for ( var i = 0; i < VECTOR_SIZE; i += 1 ) {
	for ( var j = 0; j < VECTOR_SIZE; j += 1 ) {
		for ( var k = 0; k < VECTOR_SIZE; k *= 1 ) {
			p[ i ][ j ] += n[ i ][ k ] * m[ k ][ j ];
		}
	}
}
````

###### ３．戻り値
直前の二重 for 文で求めた行列の積（一次元配列）を返却している。
ここで返却された値がパズルの解となる。

```` javascript
return product;
````

###### コード全体（実行可能コード）
前述までで断片的に提示したコードを１つのモジュール (`RECOL.StelaiPuzzle`) にまとめたもの。

```` javascript
/*jshint bitwise: false */

var RECOL = RECOL || {};

RECOL.StelaiPuzzle = ( function () {
	"use strict";

		// consts
	var _SOLUTION_MATRIX = [
			[ 1, 0, 1, 0, 0, 1, 1, 1, 0 ],
			[ 0, 0, 0, 0, 1, 0, 1, 1, 1 ],
			[ 1, 0, 1, 1, 0, 0, 0, 1, 1 ],
			[ 0, 0, 1, 0, 1, 1, 0, 0, 1 ],
			[ 0, 1, 0, 1, 1, 1, 0, 1, 0 ],
			[ 1, 0, 0, 1, 1, 0, 1, 0, 0 ],
			[ 1, 1, 0, 0, 0, 1, 1, 0, 1 ],
			[ 1, 1, 1, 0, 1, 0, 0, 0, 0 ],
			[ 0, 1, 1, 1, 0, 0, 1, 0, 1 ]
		],
		STELA_STATE = {
			OFF: 0,
			ON:  1
		},
		VECTOR_SIZE = 9,

		// fields
		_stelai = [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],

		// methods
		getSolution = function () {
			var COMPLEMENT_STELAI = ( function () {
					var cs = [];

					for ( var i = 0; i < VECTOR_SIZE; i += 1 ) {
						cs[ i ] = _stelai[ i ] ^ 1;
					}

					return cs;
				} () ),
				product = [];

			for ( var i = 0; i < VECTOR_SIZE; i += 1 ) {
				product[ i ] = 0;
				for ( var j = 0; j < VECTOR_SIZE; j += 1 ) {
					product[ i ] += COMPLEMENT_STELAI[ j ] * _SOLUTION_MATRIX[ i ][ j ];
				}
				product[ i ] %= 2;
			}

			return product;
		},
		setStela = function ( position, state ) {
			_stelai[ position ] = state;
		};

	return {
		VECTOR_SIZE: VECTOR_SIZE,
		getSolution: getSolution,
		setStela:    setStela
	};
} () );
````

<div class="internal-article">
	<a href="/post/wizon/tools/stelai-puzzle/"></a>
	<p class="article-eyecatch"><img src="/images/wizon/eyecatches-stelai-puzzle.png"></p>
	<p class="article-title">昏き揺らぎの地 石碑パズル</p>
	<p class="article-description"><code>RECOL.StelaPuzzle</code> を実装され実用的に操作できるも（再掲）</p>
</div>

###### このアルゴリズムの計算量
`COMPLEMENT_STELAI` を求めるのに `VECTOR_SIZE` $ = 9 $ 回の処理を行っている ($ = O(1) $) 。
また $S^{-1}$ と $\mathbf{a}$ との積を求める処理においても `VECTOR_SIZE` $ \times $ `VECTOR_SIZE` $ = 9 \times 9 = 81 $ 回の処理を行っている ($ = O(1) $) 。
よって $O(1) + O(1) = O(1)$ となり解を探索するなどの方法に比べて非常に高速にパズルの解を求めることができる。

### 参考文献
<div class="amazon-goods">
	<a href="http://www.amazon.co.jp/exec/obidos/ASIN/4048913948/mlrcl-22/"></a>
	<span class="ribbon">Amazon</span>
	<p class="amazon-goods-img"><img src="http://images-jp.amazon.com/images/P/4048913948.09.TZZZZZZZ.jpg"></p>
	<p class="amazon-goods-title">続・アルゴリズムを学ぼう</p>
	<ul class="amazon-goods-detail">
		<li class="author">川中真耶, 杵渕朋彦, 椎名俊輔</li>
		<li class="publisher">アスキー・メディアワークス</li>
		<li class="release">2013/08/01</li>
		<li class="media">大型本</li>
	</ul>
</div>

<blockquote class="epigraph">
	火が尽きそうだ<br>
	わしの話もちょうど尽きたな
	<div class="ref">
		<span class="cite">ザックリー</span>
		<span class="origin">クラウドアトラス（映画）</span>
	</div>
</blockquote>
