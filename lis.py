Symbol = str              # A symbol returns itself 
Number = (int, float)    
Atom   = (Symbol, Number)
List   = list             
Exp    = (Atom, List)     
Env    = dict             # A Scheme environment (defined below) 
                          # is a mapping of {variable: value}
                          
 #this turns strings of text into REPL parsable code or tokens. 
def  tokenise(chars: str) -> list:
    return chars.replace('(', ' (' ).replace(')', ' )').split

def parse(program: str) -> Exp:
    return read_from_tokens(tokenise(program))

def read_from_tokens(tokens: list) -> Exp:
    if len(tokens) == 0:
        raise SyntaxError('unexpected EOF')
    token = token.pop(0)
    if token == '(':
        L = []
        while tokens[0] != ')':
            L.append(read_from_tokens(tokens))
        tokens.pop(0) # pop off ')'
        return L
    elif token ==')':
        raise SyntaxError('unexpected )')
    else:
        return atom(token)
    
    def atom(token: str) -> Atom:
        
