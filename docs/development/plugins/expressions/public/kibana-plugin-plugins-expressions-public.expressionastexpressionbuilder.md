<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [kibana-plugin-plugins-expressions-public](./kibana-plugin-plugins-expressions-public.md) &gt; [ExpressionAstExpressionBuilder](./kibana-plugin-plugins-expressions-public.expressionastexpressionbuilder.md)

## ExpressionAstExpressionBuilder interface

<b>Signature:</b>

```typescript
export interface ExpressionAstExpressionBuilder 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [findFunction](./kibana-plugin-plugins-expressions-public.expressionastexpressionbuilder.findfunction.md) | <code>&lt;FnDef extends AnyExpressionFunctionDefinition = AnyExpressionFunctionDefinition&gt;(fnName: InferFunctionDefinition&lt;FnDef&gt;['name']) =&gt; Array&lt;ExpressionAstFunctionBuilder&lt;FnDef&gt;&gt; &#124; []</code> | Recursively searches expression for all ocurrences of the function, including in subexpressions.<!-- -->Useful when performing migrations on a specific function, as you can iterate over the array of references and update all functions at once. |
|  [functions](./kibana-plugin-plugins-expressions-public.expressionastexpressionbuilder.functions.md) | <code>ExpressionAstFunctionBuilder[]</code> | Array of each of the <code>buildExpressionFunction()</code> instances in this expression. Use this to remove or reorder functions in the expression. |
|  [toAst](./kibana-plugin-plugins-expressions-public.expressionastexpressionbuilder.toast.md) | <code>() =&gt; ExpressionAstExpression</code> | Converts expression to an AST. <code>ExpressionAstExpression</code> |
|  [toString](./kibana-plugin-plugins-expressions-public.expressionastexpressionbuilder.tostring.md) | <code>() =&gt; string</code> | Converts expression to an expression string. <code>string</code> |
|  [type](./kibana-plugin-plugins-expressions-public.expressionastexpressionbuilder.type.md) | <code>'expression_builder'</code> | Used to identify expression builder objects. |

