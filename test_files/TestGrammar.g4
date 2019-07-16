grammar TestGrammar;

entry : (thing NEWLINE)+ EOF ;

thing
    : '{' thing '}'
    | thing OP thing
    | INT
    | STR
    ;

OP : '$' | '#' | '@' ;

NEWLINE : [\r\n]+ ;
INT : [0-9]+ ;
STR : [a-z]+ ;
WS : [ \t]+ -> skip ;