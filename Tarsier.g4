grammar Tarsier;

program : statement+ EOF ;
statement 
    : assignment_statement
    | function_statement
    | if_statement
    ;

assignment_statement : ID ':' expression NEWLINE ;

function_statement : ID '(' function_list? ')' NEWLINE ;
function_list : expression (',' expression)* ;

expression 
    : '(' expression ')'                                        #eqPar
    | left = expression operator = (MUL|DIV) right = expression #eqMul
    | left = expression operator = (ADD|SUB) right = expression #eqAdd
    | ID                                                        #eqVar
    | INT                                                       #eqInt
//    | FIFTEEN #eq15
    ;

if_statement : if_fragment code_block else_fragment? ;

if_fragment : 'if' bool_expression NEWLINE? ;
else_fragment : 'else' NEWLINE? code_block ;
code_block : '{' NEWLINE? statement+ '}' NEWLINE ;

bool_expression 
    : left = expression '=' right = expression #boolEq
    | left = expression '>' right = expression #boolGt
    | left = expression '<' right = expression #boolLt
    ;

MUL : '*' ;
DIV : '/' ;
SUB : '-' ;
ADD : '+' ;

ID : ([a-z]|[A-Z])([a-z] | [A-Z] | '-')* ;
INT : '-'? [0-9]+ ;
//FIFTEEN : '15' ; // this needs to go above INT

COMMENT : '//' .*? NEWLINE -> skip ;
// COMMENT : '//' .*? NEWLINE ;
//ML_COMMENT : '/*' .*? '*/' NEWLINE? ;

NEWLINE : [\r\n]+ ;
WS : [ \t]+ -> skip ;