Symbol = str              # A symbol returns itself 
Number = (int, float)    
Atom   = (Symbol, Number)
List   = list             
Exp    = (Atom, List)     
Env    = dict             # A Scheme environment (defined below) 
                          # is a mapping of {variable: value}
                          
 # this turns strings of text into REPL parsable code or tokens. 
def  tokenise(chars: str) -> list:
    return chars.replace('(', ' (' ).replace(')', ' )').split

# reads expression from a python string
def parse(program: str) -> Exp:
    return read_from_tokens(tokenise(program))

# reads expression from a sequence of tokens
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
    
# differentiates between numbers and sybols by testing atom
# first it checks if int then float then concludes symbol.
def atom(token: str) -> Atom:
    try: return int(token)
    except ValueError:
        try: return float(token)
        except ValueError:
            return Symbol(token)        
